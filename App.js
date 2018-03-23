/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import codePush from 'react-native-code-push';
import Crashes from 'appcenter-crashes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  // componentDidMount() {
    // codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })
  // }

  async setupCrashes() {
    await Crashes.setEnabled(true);
    Crashes.setListener({
        shouldProcess: function (report) {
            return true; // return true if the crash report should be processed, otherwise false.
        },

        // Other callbacks must also be defined at the same time if used.
        // Default values are used if a method with return parameter is not defined.
    });
    isEnabled = await Crashes.isEnabled();
    console.log('Crashes are enabled?', isEnabled);
  };

  render() {
    this.setupCrashes()
    console.log('this is a change');
    Crashes.generateTestCrash();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is version 2.5, mofo!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
