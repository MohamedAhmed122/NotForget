import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton/AppButton';
import AppInput from './app/components/AppInput/AppInput';
import Header from './app/components/Header/Header';
import RegisterScreen from './app/Screens/RegisterScreen/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <RegisterScreen />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // // alignItems: 'center',
    // justifyContent: 'center',
  },
});
