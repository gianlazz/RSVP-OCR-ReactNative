import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Camera from 'react-native-camera';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import axios from 'axios';

//DEFINING GLOBAL VARIABLES

// API KEYS
const cloudVisionKey = 'AIzaSyADh2eyiZCxc4g1IMjc0PjQFudxKlFW3-s';
// Endpoints
const cloudVision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;
//Used for native OCR
var imagePath;
var tesseractResult;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  takeGCVPicture() {
    this.camera.capture()
      .then((image64) => {
        console.log(image64.data);
//This right here is the part doing the cloud vision api calls
        axios.post(cloudVision, {
          requests: [
            {
              image: {
                content: image64.data
              },
              features: [{
                //Or 'DOCUMENT_TEXT_DETECTION'
                type: 'TEXT_DETECTION',
                maxResults: 1
              }]
            }
          ]
        })
        .then(function (response) {
        console.log(response);
        //var json = JSON.parse(response);
        //console.log('json parse results: ' + json.data.responses.textAnnotations.description);

        //Here he's setting a const variable to hold the different json object results
        //from the cloud vision api.
          const textAnnotations = response.data.responses[0].textAnnotations[0];
          const textContent = textAnnotations.description;

          Alert.alert(
           'Google Cloud Vision',
           'Text Results: ' + textContent);

        })
        .catch(function (error) {
          console.log(error, 'error');
        });
      }).catch(err => console.error(err));
  }

// This is my takePicture() method!
//I should probably refactor my code and add some more
//functions to clean it up.
  takeTesseractPicture() {
  this.camera.capture()
   .then((path) => imagePath = String(path.path))
   .catch(err => console.error(err));

   imagePath = imagePath.replace("file:///" , "/");

   console.log('This is the path: ' + imagePath);

   Alert.alert(
    'Alert Title',
    'This is the path: ' + imagePath)


  }

  render() {
    return (
      <View style={styles.container}>

        <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           captureTarget={Camera.constants.CaptureTarget.memory}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
           <MonoText style={styles.capture} onPress={this.takeGCVPicture.bind(this)}>[Cloud Vision]</MonoText>
       </Camera>

          <View
            style={[styles.navigationFilename]}>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 0,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
