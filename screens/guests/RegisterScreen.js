import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton';
import useUser from '../../hooks/useUser';
import Input from '../../components/Input';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register } = useUser()

  async function registerHandler() {
    try {
      await register({ email, password });
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not register you in!'
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Register</Text>
      <View>
        <Text>Already have an account?</Text>
        <PrimaryButton title='Login' onPress={() => navigation.navigate('Login')} />
      </View>
      <Input placeholder='email' value={email} onChange={(value) => setEmail(value)} keyboardType='email-address' autoCapitalize="none"/>
      <Input placeholder='password' value={password} onChange={(value) => setPassword(value)} secureTextEntry onSubmitEditing={registerHandler} autoCapitalize="none"/>
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