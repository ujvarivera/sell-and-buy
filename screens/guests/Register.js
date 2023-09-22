import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/PrimaryButton';

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Register</Text>
      <View>
        <Text>You already have an account?</Text>
        <PrimaryButton title='Login' onPress={() => navigation.navigate('Login')}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
});