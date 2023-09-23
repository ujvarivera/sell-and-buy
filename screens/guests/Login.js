import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import PrimaryButton from '../../components/PrimaryButton'
import useUser from '../../hooks/useUser'

export default function Login({ navigation }) {
  const [email, setEmail] = useState("user@demo.com")
  const [password, setPassword] = useState("password")
  const { login } = useUser()

  function loginHandler() {
    login({ email, password });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Input placeholder='email' value={email} onChange={(value) => setEmail(value)} keyboardType='email-address' />
      <Input placeholder='password' value={password} onChange={(value) => setPassword(value)} secureTextEntry onSubmitEditing={loginHandler} />
      <PrimaryButton title='Login' onPress={loginHandler} />
      <View>
        <Text>Don't have an account?</Text>
        <PrimaryButton title='Register' onPress={() => navigation.replace('Register')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'scretch',
    justifyContent: 'center',
    padding: 16,
    width: '100%'
  },
});
