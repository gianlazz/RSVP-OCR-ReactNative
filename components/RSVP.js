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
      rsvpDisplay: "Loading",
      continueLoading: true,
      rsvpColor: '#E74C3C',
      rsvpTouchDisable: true,
      rsvpNote: "",
      rsvpContinueIncrementing: false,
      rsvpIsIncrementing: false,
    };
  }

  async componentDidMount() {
    //this needs to loop while continueLoading: true
    //then once the prop is recieved that state boolean needs
    //to be set as false.

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
      //let splitStringArray = JSON.stringify(nextProps).replace("\n" + "{\"children\":\"" , " ").split(/[\s]+/);
      splitStringArray = nextProps.children;
      this.setState({continueLoading: false});
      this.setState({rsvpDisplay: splitStringArray[0]});
      this.setState({rsvpColor: '#4A90E2'});
      this.setState({rsvpTouchDisable: false});
      this.setState({rsvpNote: "Tap on the words to play"});
    }
  }

//Might need to make this await the prop promise?
  async rsvp() {
    //console.log(demoString.split(/[\s]+/));
    //console.log(JSON.stringify(this.props));
    //console.log(JSON.stringify(this.props).replace("\n" + "{\"children\":\"" , " ").split(/[\s]+/));
    //let splitStringArray = JSON.stringify(this.props).replace("\n" + "{\"children\":\"" , " ").split(/[\s]+/);
    let words = splitStringArray
    console.log("This is the words variable: " + words);

//     Alert.alert(
//      'splitStringArray',
//      'Results: ' + splitStringArray);
    let index = 0;
    //console.log("First word in the array: " + splitStringArray[index])
    //console.log("Number of index: " + splitStringArray.length)
    this.setState({rsvpContinueIncrementing: !this.state.rsvpContinueIncrementing})

         while (index < words.length){
           if(this.state.rsvpContinueIncrementing == true) {
               this.setState({rsvpNote: "Tap on the words to stop"});
               this.setState({rsvpIsIncrementing: true});
               //console.log(index)
               rsvpString = words[index]
               //console.log(rsvpString)
               //Set the state right here:
               this.setState({rsvpDisplay: rsvpString});

               await new Promise(r => setTimeout(r, 150));
               index++
            } else {return;}
         }
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
