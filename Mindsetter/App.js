import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './Screens/Login'

//import Home from './Screens/HomeScreen'
/*

export default function() {
  return (
    <Home />
  );
}
*/
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
        <Login/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C94A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  