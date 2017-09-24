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

Set the rsvpDisplay to "First word in the array: " + splitStringArray[index]
that way it won't be blank when it first displayes. Though that will
have to run right away for the render
*/

  constructor(props){
    super(props);
    this.state = {
      rsvpDisplay: "Placeholder",
      ocrString2: "Loading...",
    };
  }
  async rsvp() {
  console.log(demoString.split(/[\s]+/));
  console.log(JSON.stringify(this.props).replace("\n", " ").split(/[\s]+/));
   let splitStringArray = demoString.split(/[\s]+/);
//     Alert.alert(
//      'splitStringArray',
//      'Results: ' + splitStringArray);
   let index = 0;
     console.log("First word in the array: " + splitStringArray[index])
     console.log("Number of index: " + splitStringArray.length)
   while (index < splitStringArray.length){
     console.log(index)
    rsvpString = splitStringArray[index]
     console.log(rsvpString)
     //Set the state right here:
     this.setState({rsvpDisplay: rsvpString});
    await new Promise(r => setTimeout(r, 150));
    index++
   }
 }

  render() {
    return (
      <View style={styles.container}>

          <View style={[styles.boxContainer, styles.boxOne]}>
            <MonoText style={styles.pauseText}>Tap on the words to play</MonoText>
          </View>

          <View style={[styles.boxContainer, styles.boxTwo]}>
            <TouchableOpacity
              onPress={this.rsvp.bind(this)}>
              <Text style={styles.rsvp}
                {...this.props} />
            </TouchableOpacity>
          </View>

          <View style={[styles.boxContainer, styles.boxTwo]}>
            <TouchableOpacity
              onPress={this.rsvp.bind(this)}>
              <Text style={styles.rsvp}>{this.state.rsvpDisplay}</Text>
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
    color: '#4A90E2',
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
