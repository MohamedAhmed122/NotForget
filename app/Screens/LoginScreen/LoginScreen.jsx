import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import Header from '../../components/Header/Header'
import AppInput from '../../components/AppInput/AppInput'
import AppButton from '../../components/AppButton/AppButton'
import { blue } from '../../Config/color'


export default function LoginScreen() {
    return (
        <View style={styles.screen}>
           <Header>Login</Header>
           <View style={styles.container}>
                <AppInput label='Email'/>
                <AppInput label='Password'/>
           </View>
           <View style={styles.inputContainer}>
                <AppButton >Login</AppButton>
           </View>
           <Text style={styles.text}>
               If you don't have account  
               <Text style={styles.span}> Register</Text>
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
