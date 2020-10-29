import React, { useState } from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper';

export default function BoxList() {
    const [checked, setChecked] = React.useState(true);
    
    return (
        <View style={styles.box}>
            <View>
                <Text style={styles.mainTitle}>Main Title</Text>
                <Text  style={styles.subTitle}>Sub Title</Text>
            </View>
            <View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        color='white'
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                        style={styles.checkbox}
                    />
                </View>
            </View>
        </View>
      
    )
}

const styles = StyleSheet.create({
    box:{
        width: '94%',
        backgroundColor: 'green',
        left: 10,
        borderRadius:10,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    mainTitle:{
        color: 'white',
        fontSize: 20,
        marginBottom: 7,
    },
    subTitle:{
        color: 'white',
        fontSize: 15,
        marginBottom: 7,
    }
  
   
})
