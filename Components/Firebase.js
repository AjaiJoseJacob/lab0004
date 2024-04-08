import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0PlaBHOydkZQXYJrhZr2va-EEOGSfVec",
    authDomain: "lab0004-4c7de.firebaseapp.com",
    projectId: "lab0004-4c7de",
    storageBucket: "lab0004-4c7de.appspot.com",
    messagingSenderId: "43079263162",
    appId: "1:43079263162:web:9ddb4122754c56e9973383"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
