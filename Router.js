import React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useUser from './hooks/useUser';
import LoginScreen from "./screens/guests/LoginScreen"
import RegisterScreen from "./screens/guests/RegisterScreen"
import AuthenticatedStack from './AuthenticatedStack';
import Loading from './components/Loading';

const Stack = createNativeStackNavigator()

export default function Router() {
  const { user, isAuthenticating } = useUser()

  if (isAuthenticating) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {
          !user?.token ?
            <Stack.Group>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Group> :
            <Stack.Screen name="Root" component={AuthenticatedStack} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});
