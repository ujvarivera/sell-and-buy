import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import Constants from 'expo-constants';

const { firebaseConfig } = Constants.expoConfig.extra;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { 
    app, 
    auth, 
    db,
    storage,
    collection, 
    addDoc, 
    getDocs, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut,
    query,
    orderBy,
    onSnapshot,
    where
}