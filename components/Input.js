import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({ placeholder, onChange }) {
  return (
    <View>
      <TextInput placeholder={placeholder} onChangeText={onChange} style={styles.input}/>
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