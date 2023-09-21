import { View, Button } from 'react-native'
import React from 'react'

export default function PrimaryButton({ onPress, title }) {
  return (
    <View>
      <Button title={title} onPress={onPress} color="violet"/>
    </View>
  )
}