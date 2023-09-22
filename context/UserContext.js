import React, { createContext, useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../config/firebase-config'
import * as SecureStore from 'expo-secure-store';

export const UserContext = createContext()

export default function UserProvider(props) {
    const [user, setUser] = useState('')

    const authContext = {
        login: async ({ username, password }) => {
            const { user } = await signInWithEmailAndPassword(auth, username, password)
            const token = await user.getIdToken()
            await SecureStore.setItemAsync('userToken', token)
            setUser({ ...user, token: token })
        },
        logout: async () => {
            await SecureStore.deleteItemAsync('userToken')
            setUser('')
        },
        user
    }

    return <UserContext.Provider value={authContext} {...props} />
}