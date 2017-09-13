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
//This is my code for turning off react navigation header. It's part of the expo
//boilerplate
  static navigationOptions = {
    header: null,
  };

//Idk what the constructor does but this seems to be where
//he defined the parameters for changing the state of the
//view
//Do I need any of this either?
/*
  constructor(props) {
     super(props);
     this.state = {
       captureText: null,
       showLoader: false,
       sourceLanguage: 'en',
       targetLanguage: null
     };
     this.setTextContent = this.setTextContent.bind(this);
     this.toggleLoader = this.toggleLoader.bind(this);
     // this.speakText = this.speakText.bind(this);
     this.changeLanguage = this.changeLanguage.bind(this);
   }
*/

//This is his takePicture() method
  takeGCVPicture() {
    //const self = this;
    //this.toggleLoader();
    this.camera.capture()
      .then((image64) => {
        console.log(image64.data);
//This right here seems to be the only part doing the cloud vision api calls
        axios.post(cloudVision, {

          requests: [
            {
              image: {
                content: image64.data
              },
              features: [{
                type: 'TEXT_DETECTION',
                maxResults: 1
              }]
            }
          ]
/*

          "requests": [
            {
              "image": {
                "content": image64.data
              },
              "features": [
                {
                  "type": "DOCUMENT_TEXT_DETECTION"
                }
              ]
            }
          ]
*/
        })
//Here he's setting a const variable to hold the different json object results
//from the cloud vision api.
        .then(function (response) {
//Here I'm going to need to change what it does with the response.
//I'll probably just pop up an alert with the response for now. Or also console.log
        console.log(response);
/*
          const textAnnotations = response.data.responses[0].textAnnotations[0];
          const textContent = textAnnotations.description;
          const detectedLanguage = textAnnotations.locale;
          self.setTextContent(textContent,detectedLanguage);
*/
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

   RNTesseractOcr.startOcr(imagePath, "LANG_ENGLISH")
     .then((result) => {
       this.setState({ ocrResult: result });
       console.log("OCR Result: ", result);
       tesseractResult = String(result);
       Alert.alert(
         'Alert Title',
         result
       )
     })
     .catch((err) => {
       console.log("OCR Error: ", err);
     })
     .done();

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
           <MonoText style={styles.capture} onPress={this.takeTesseractPicture.bind(this)}>[Tesseract]</MonoText>
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
