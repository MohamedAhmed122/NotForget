import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import Header from '../../components/Header/Header'
import AppInput from '../../components/AppInput/AppInput'
import AppButton from '../../components/AppButton/AppButton'
import { blue } from '../../Config/color'


export default function RegisterScreen() {
    return (
        <View style={styles.screen}>
           <Header>Login</Header>
           <View style={styles.container}>
                <AppInput label='Name'/>
                <AppInput label='Email'/>
                <AppInput label='Password'/>
                <AppInput label='Confirm Password'/>
           </View>
           <View style={styles.inputContainer}>
                <AppButton >Register</AppButton>
           </View>
           <Text style={styles.text}>
               If you have account  
               <Text style={styles.span}> Login</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
    },
    container:{
        marginTop: 100,
    },
    inputContainer:{
        marginTop: 70
    },
    text:{
        textAlign: 'center',
        marginTop: 30,
        fontSize: 16
    },
    span:{
        color: blue,
        fontWeight: 'bold'
    }
})
