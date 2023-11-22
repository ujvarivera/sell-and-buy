import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton';
import TouchableComponent from '../../components/TouchableComponent'
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
      <Text style={styles.text}>Sell & Buy</Text>
      <Input placeholder='email' value={email} onChange={(value) => setEmail(value)} keyboardType='email-address' autoCapitalize="none"/>
      <Input placeholder='password' value={password} onChange={(value) => setPassword(value)} secureTextEntry onSubmitEditing={registerHandler} autoCapitalize="none"/>
      <PrimaryButton title='Register' onPress={registerHandler} />
      <View style={styles.flexRow}>
        <Text>Already have an account?</Text>
        <TouchableComponent title='Login' onPress={() => navigation.navigate('Login')} />
      </View>
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