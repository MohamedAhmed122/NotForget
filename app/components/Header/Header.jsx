import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { black, white } from '../../Config/color'

export default function Header({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '1%',
        bottom:' 0%',
        backgroundColor: white,
        height: 60,
        shadowColor: black,
        shadowOpacity: 1.0,
    },
    text:{
        color: black,
        marginTop: 20,
        marginLeft: 30,
        fontSize: 20,
    
    }
})
