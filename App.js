import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './app/Screens/HomeScreen/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
     <HomeScreen />
   
    </View>
  );
}

const styles = StyleSheet.create({

});
