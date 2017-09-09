import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Slider, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { MonoText } from '../components/StyledText';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>

            <View style={[styles.boxContainer, styles.boxOne]}>
              <MonoText style={styles.pauseText}>Tap on the words to play</MonoText>
            </View>

            <View style={[styles.boxContainer, styles.boxTwo]}>
              <MonoText style={styles.rsvp}>RSVPSTRING</MonoText>
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
    backgroundColor: '#CE6D39',
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
      //font-family: Futura_Medium;
    fontSize: 30,

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
