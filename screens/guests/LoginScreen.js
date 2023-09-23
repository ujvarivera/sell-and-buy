import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import PrimaryButton from '../../components/PrimaryButton'
import useUser from '../../hooks/useUser'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("user@demo.com")
  const [password, setPassword] = useState("password")
  const { login } = useUser()

  async function loginHandler() {
    try {
      await login({ email, password });
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials!'
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Input placeholder='email' value={email} onChange={(value) => setEmail(value)} keyboardType='email-address' autoCapitalize="none"/>
      <Input placeholder='password' value={password} onChange={(value) => setPassword(value)} secureTextEntry onSubmitEditing={loginHandler} autoCapitalize="none"/>
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
