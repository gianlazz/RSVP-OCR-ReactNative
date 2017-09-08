import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Slider, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View>

          <View>
            <Text style={styles.pauseText}>Tap on the words to play</Text>
          </View>

          <View>
            <Text style={styles.rsvp}>RSVPSTRING</Text>
          </View>

          <Slider></Slider>

          <View style={styles.footer}>
            <View>
              <Text style={styles.wpm}>WPM 300</Text>
            </View>
          </View>

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
/*
  container: {
    display: flex;
  flex-flow: column;
  height: 100%;
  },
*/
  pauseText: {
    //flex: 1;
    textAlign: 'center',
    //color: #9B9B9B;
    //text-decoration: underline;
    //font-size: 3vw;
    //font-family: Futura_Medium;
  },

  rsvp: {
      //flex: 2;
      //flex-grow: 1;
    textAlign: 'center',
      //color: #4A90E2;
      //font-family: Futura_Medium;
      //font-size: 12vw;

  },

  slider: {
    //flex: 3;
    //flex-grow: 1;
  },

  wpm: {
    //flex: 4;
    //bottom: 0px;
    //font-weight: bold;
    //font-size: 3vw;
    textAlign: 'center',
    //color: #9B9B9B;
    //border-style: solid;
    //border-width: 2px;
    //margin-top: 20px;
    //margin-left: 130px;
    //margin-right: 130px;
    //margin-bottom: 20px;
    //font-family: Futura_Medium;
  },

});
