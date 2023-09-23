import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton';
import useUser from '../../hooks/useUser';
import Input from '../../components/Input';

export default function Register({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register } = useUser()

  function registerHandler() {
    register({ email, password });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Register</Text>
      <View>
        <Text>Already have an account?</Text>
        <PrimaryButton title='Login' onPress={() => navigation.navigate('Login')} />
      </View>
      <Input placeholder='email' value={email} onChange={(value) => setEmail(value)} keyboardType='email-address' />
      <Input placeholder='password' value={password} onChange={(value) => setPassword(value)} secureTextEntry onSubmitEditing={registerHandler} />
      <PrimaryButton title='Register' onPress={registerHandler} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%'
  },
});