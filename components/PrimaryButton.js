import { View, Button } from 'react-native'
import React from 'react'

export default function PrimaryButton({ onPress, title, color='violet' }) {
  return (
    <View style={{ margin: 6 }}>
      <Button title={title} onPress={onPress} color={color} />
    </View>
  )
}