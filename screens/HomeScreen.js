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
import {
  WebBrowser,
  Camera,
  Permissions,
  FileSystem,
} from 'expo';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import { MonoText } from '../components/StyledText';
import { RSVP } from '../components/RSVP';
//import Camera from 'react-native-camera';
import axios from 'axios';

//DEFINING GLOBAL VARIABLES
var screen = Dimensions.get('window');
// API KEYS
const cloudVisionKey = 'AIzaSyADh2eyiZCxc4g1IMjc0PjQFudxKlFW3-s';
// Endpoints
const cloudVision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      ocrString: "ocrString",
    };
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    ocrString: "ocrString",
  };

  componentDidMount() {
  FileSystem.makeDirectoryAsync(
    FileSystem.documentDirectory + 'photos'
  ).catch(e => {
    console.log(e, 'Directory exists');
  });
}

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

takePicture = async function() {
this.refs.modal1.open()
  if (this.camera) {
    this.camera.takePictureAsync({
      quality: 0.1,
      base64: true,
    }).then(data => {
        //console.log(data.base64);
        //This right here is the part doing the cloud vision api calls
        axios.post(cloudVision, {
          requests: [
            {
              image: {
                content: data.base64
              },
              features: [{
                //Or 'TEXT_DETECTION'
                type: 'DOCUMENT_TEXT_DETECTION',
                maxResults: 1
              }]
            }
          ]
        })
        .then(function (response) {
        //console.log(response);
        //var json = JSON.parse(response);
        //console.log('json parse results: ' + json.data.responses.textAnnotations.description);
        //Here he's setting a const variable to hold the different json object results
        //from the cloud vision api.
          const textAnnotations = response.data.responses[0].textAnnotations[0];
          const textContent = textAnnotations.description;

          Alert.alert(
           'Google Cloud Vision',
           'Text Results: ' + textContent);
          this.setState({ocrString: textContent});

        }.bind(this))
        .catch(function (error) {
          console.log(error, 'error');
        }).catch(err => console.error(err));


             });
      }
    };

  render() {
    const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={styles.container}>
            <Camera style={{ flex: 1 }} type={this.state.type}
              ref={ref => { this.camera = ref; }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>

                <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"modal1"}
                    swipeToClose={this.state.swipeToClose}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}>

                  <RSVP>Loading...</RSVP>

                </Modal>

                <TouchableOpacity
                  style={{
                    flex: 1.0,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={this.takePicture.bind(this)}>
                  <MonoText
                    style={{ fontSize: 20, marginBottom: 25, color: 'white' }}>
                    {' '}Capture{' '}
                  </MonoText>
                </TouchableOpacity>

              </View>
            </Camera>
            <View
              style={[styles.navigationFilename]}>
            </View>

          </View>
        );
      }
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  rsvp: {
      //flex: 2,
      //flex-grow: 1;
    textAlign: 'center',
    color: '#4A90E2',
      //font-family: Futura_Medium;
    fontSize: 30,

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
