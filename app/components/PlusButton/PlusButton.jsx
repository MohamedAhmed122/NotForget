import React from 'react'
import { Feather } from '@expo/vector-icons';
import { StyleSheet,  TouchableOpacity, View } from 'react-native'
import { black } from '../../Config/color';

export default function PlusButton() {
    return (
    
        <TouchableOpacity style={styles.container}> 
            <Feather style={styles.plus} name="plus" size={30} color="white" />
        </TouchableOpacity>
 
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: black,
        position: 'absolute',
        height: 56,
        width: 56,
        borderRadius: 28,
        bottom: 35,
        right: 20,
        alignItems: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
       
    },
    plus:{
        position: 'absolute',
        left: '20.83%',
        right: '20.83%',
        top: '20.83%',
        bottom: '20.83%'
    }
})
