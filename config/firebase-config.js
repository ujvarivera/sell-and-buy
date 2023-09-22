import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import Constants from 'expo-constants';

const { firebaseConfig } = Constants.expoConfig.extra;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, collection, addDoc, getDocs, signInWithEmailAndPassword }