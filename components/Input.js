import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input(props) {
  return (
    <View>
      <TextInput onChangeText={props.onChange} style={styles.input} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: 'violet',
      borderRadius: 12,
      padding: 12,
      marginVertical: 12,
    },
  });