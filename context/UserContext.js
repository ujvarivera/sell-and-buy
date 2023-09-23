import React, { createContext, useState } from 'react'
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../config/firebase-config'
import * as SecureStore from 'expo-secure-store';

export const UserContext = createContext()

export default function UserProvider(props) {
    const [user, setUser] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authContext = {
        login: async ({ email, password }) => {
            setIsAuthenticating(true)
            const { user } = await signInWithEmailAndPassword(
                auth, 
                email, 
                password
            ).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
              });
              
            const token = await user.getIdToken()
            await SecureStore.setItemAsync('userToken', token)
            setUser({ ...user, token: token })
            setIsAuthenticating(false)
        },
        logout: async () => {
            await SecureStore.deleteItemAsync('userToken')
            setUser('')
        },
        register: async ({ email, password }) => {
            setIsAuthenticating(true)
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            ).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
            const token = await user.getIdToken()
            await SecureStore.setItemAsync('userToken', token)
            setUser({ ...user, token: token })
            setIsAuthenticating(false)
        },
        user,
        isAuthenticating,
        setIsAuthenticating
    }

    return <UserContext.Provider value={authContext} {...props} />
}