import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Slider,
  Button,
  TouchableOpacity,
  Alert, } from 'react-native';

import { MonoText } from '../components/StyledText';

var rsvpString;
var demoString = "Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations to address all of the parts of the developer's workflow while building complex web applications. Angular is a complete rewrite from the same team that built AngularJS.";
var rsvpContinueIncrementingVar;
var words;

export class RSVP extends React.Component {
/*
Pass the string to this components as a prop
take that prop and run it through the rsvp()
after it's split into the incrementing index array
have the rsvp() set the state of the main text View
of this RSVP Component

Also have it say Loading... with the dots changing,
all while being in red until the prop string is recieved
and done being split. Then change back to blue as the first
word in the split array waiting for the user to touch it.

Set the rsvpDisplay to "First word in the array: " + words[index]
that way it won't be blank when it first displayes. Though that will
have to run right away for the render
*/

  constructor(props){
    super(props);
    this.state = {
      rsvpDisplay: "Loading",
      continueLoading: true,
      rsvpColor: '#E74C3C',
      rsvpTouchDisable: true,
      rsvpNote: "",
      rsvpContinueIncrementing: false,
      rsvpIsIncrementing: false,
      rsvpIndex: 0,
    };
  }

  async componentDidMount() {
    rsvpContinueIncrementingVar = false;
    //I could do this as a for loop and push "." to the end each time
           this.setState({rsvpColor: '#E74C3C'});
           this.setState({rsvpTouchDisable: true});
    while(this.state.continueLoading === true) {
           if (this.state.continueLoading !== true) return;
           this.setState({rsvpDisplay: "Loading"});
           if (this.state.continueLoading !== true) return;
           await new Promise(r => setTimeout(r, 1000));
           if (this.state.continueLoading !== true) return;
           this.setState({rsvpDisplay: "Loading."});
           if (this.state.continueLoading !== true) return;
           await new Promise(r => setTimeout(r, 1000));
           if (this.state.continueLoading !== true) return;
           this.setState({rsvpDisplay: "Loading.."});
           if (this.state.continueLoading !== true) return;
           await new Promise(r => setTimeout(r, 1000));
           if (this.state.continueLoading !== true) return;
           this.setState({rsvpDisplay: "Loading..."});
           if (this.state.continueLoading !== true) return;
           await new Promise(r => setTimeout(r, 1000));
        }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props) {
      words = nextProps.children;
      this.setState({
        continueLoading: false,
        rsvpDisplay: words[0],
        rsvpColor: '#4A90E2',
        rsvpTouchDisable: false,
        rsvpNote: "Tap on the words to play",
        arrayLength: words.length,
      });
    }
  }

  async rsvp() {
    rsvpContinueIncrementingVar = !rsvpContinueIncrementingVar;
         while (this.state.rsvpIndex < words.length && rsvpContinueIncrementingVar == true){
               rsvpString = words[this.state.rsvpIndex]
               this.setState({
                 rsvpNote: "Tap on the words to stop",
                 rsvpIsIncrementing: true,
                 rsvpDisplay: rsvpString
               });
               await new Promise(r => setTimeout(r, 150));
               this.setState({rsvpIndex: this.state.rsvpIndex + 1})
         }
      this.setState({rsvpNote: "Tap on the words to play"});
 }

  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.boxContainer, styles.boxOne]}>
            <MonoText style={styles.pauseText}>{this.state.rsvpNote}</MonoText>
          </View>
          <View style={[styles.boxContainer, styles.boxTwo]}>
            <TouchableOpacity
              onPress={this.rsvp.bind(this)}
              disabled={this.state.rsvpTouchDisable}>
              <Text style={[styles.rsvp, {color: this.state.rsvpColor}]}>{this.state.rsvpDisplay}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxTwo}>
            <Slider
              thumbTintColor={'#4A90E2'}
              minimumTrackTintColor={'#4A90E2'}
              maximumTrackTintColor={'#4A90E2'}>
            </Slider>
          </View>
          <View style={[styles.wpmContainer, styles.boxContainer, styles.boxThree]}>
              <MonoText style={styles.wpm}>WPM 300</MonoText>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxOne: {
    //backgroundColor: '#FFEEE4',
  },
  boxTwo: {
    //backgroundColor: '#F17F42'
  },
  boxThree: {
    //backgroundColor: '#CE6D39',
  },
  pauseText: {
    //flex: 1,
    //textAlign: 'center',
    color: '#9B9B9B',
    textDecorationLine: 'underline',
    //fontSize: 6,
    //font-family: Futura_Medium;
  },
  rsvp: {
      //flex: 2,
      //flex-grow: 1;
    textAlign: 'center',
//    color: '#4A90E2',
    fontSize: 30,
    fontFamily: 'futura',
  },
  slider: {
    //flex: 3;
    //flex-grow: 1;
  },
  wpmContainer: {
    //flex: 4,
    bottom: 0,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#9B9B9B',
    marginTop: 20,
    marginLeft: 130,
    marginRight: 130,
    marginBottom: 20,
  },
  wpm: {
    fontWeight: 'bold',
    //font-size: 3vw;
    textAlign: 'center',
    color: '#9B9B9B',
    //font-family: Futura_Medium;
  },
});
