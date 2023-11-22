import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import PrimaryButton from '../../components/PrimaryButton'
import TouchableComponent from '../../components/TouchableComponent'
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
      <Text style={styles.text}>Sell & Buy</Text>
      <Input placeholder='email' value={email} onChange={(value) => setEmail(value)} keyboardType='email-address' autoCapitalize="none"/>
      <Input placeholder='password' value={password} onChange={(value) => setPassword(value)} secureTextEntry onSubmitEditing={loginHandler} autoCapitalize="none"/>
      <PrimaryButton title='Login' onPress={loginHandler} />
      <View style={styles.flexRow}>
        <Text>Don't have an account?</Text>
        <TouchableComponent title='Register' onPress={() => navigation.replace('Register')} />
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
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  text: {
    fontSize: 30,
    color: 'violet',
    marginBottom: 20,
    textAlign: 'center'
  }
});
