import React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useUser from './hooks/useUser';
import Login from "./screens/guests/Login"
import Register from "./screens/guests/Register"
import AuthenticatedStack from './AuthenticatedStack';
import Loading from './components/Loading';

const Stack = createNativeStackNavigator()

export default function Router() {
  const { user, isAuthenticating } = useUser()

  if (user === null || isAuthenticating) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {
          !user.token ?
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Group> :
            <Stack.Screen name="Root" component={AuthenticatedStack} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});
