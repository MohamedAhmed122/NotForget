import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import  Header  from '../../components/Header/Header'
import Constants from 'expo-constants'
import PlusButton from '../../components/PlusButton/PlusButton'


const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Header>Not To Forget</Header>
            <View style={{height: 420}}>
                <Image 
                style={styles.image}
                source={require('../../../assets/background.png')} 
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    So far, you have nothing to do. Have a nice rest! Typography
                </Text>
            </View>
            <PlusButton />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        width: '100%',
        height: '100%'
    },
    image:{
        width: 349,
        height: 196,
        left: 6,
        top: 195,
        position: 'absolute',
        
    },
    textContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
     text:{
        width: '68%',
        textAlign:'center',
    }
})
