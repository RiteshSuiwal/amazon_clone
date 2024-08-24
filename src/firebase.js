// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
//   // your config
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_d13R6LZftZBQbPd9wQV-3XUk1bF15cI",
  authDomain: "login-95466.firebaseapp.com",
  projectId: "login-95466",
  storageBucket: "login-95466.appspot.com",
  messagingSenderId: "309912825075",
  appId: "1:309912825075:web:52a1b9b22b72b1829f5b86",
  measurementId: "G-KTW2NSBCRG"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
