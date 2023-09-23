import React, { createContext, useEffect, useState } from 'react'
import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from '../config/firebase-config'
import * as SecureStore from 'expo-secure-store';

export const UserContext = createContext()

export default function UserProvider(props) {
    const [user, setUser] = useState({ token: null })
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    useEffect(() => {
        async function getTokenFromStorage() {
            let userToken
            setIsAuthenticating(true)
            try {
                userToken = await SecureStore.getItemAsync('userToken')
                setUser({ token: userToken })
            } catch (error) {
                setUser({ token: null })
            } finally {
                setIsAuthenticating(false)
            }
        }
        getTokenFromStorage()
    }, [])

    const authContext = {
        login: async ({ email, password }) => {
            setIsAuthenticating(true)
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            ).catch(function (error) {
                setIsAuthenticating(false)
            });

            const token = await user.getIdToken()
            await SecureStore.setItemAsync('userToken', token)
            setUser({ ...user, token: token })
            setIsAuthenticating(false)
        },
        logout: async () => {
            await signOut(auth)
            await SecureStore.deleteItemAsync('userToken')
            setUser({ token: null })
        },
        register: async ({ email, password }) => {
            setIsAuthenticating(true)
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            ).catch(function (error) {
                var errorCode = error.code
                var errorMessage = error.message
                console.log(errorCode)
                setIsAuthenticating(false)
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