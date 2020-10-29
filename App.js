import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoxList from './app/components/BoxList/BoxList';

import HomeScreen from './app/Screens/HomeScreen/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
     <BoxList />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40
  }
});
