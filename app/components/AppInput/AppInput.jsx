import React from 'react'
import { TextInput } from 'react-native-paper';
import { StyleSheet, } from 'react-native'

export default function AppInput({label}) {
    const [text, setText] = React.useState('');

  return (
    <TextInput
      label={label}
      mode='outlined'
      value={text}
      onChangeText={text => setText(text)}
      selectionColor='black'
      underlineColor='black'
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
    input:{
        width: '95%',
        marginLeft: 10,
        marginTop:15
    }
})
