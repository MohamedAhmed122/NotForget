import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import {white , black} from '../../Config/color'

export default function AppButton({children}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.button}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: black,
        width: '94%',
        height:40,
        borderRadius: 7
    },
    button:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 7,
        color: white,
    }
})
