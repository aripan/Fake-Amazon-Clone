import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVompMO1CzNGgX5UweppqWHzRA5fCN_30",
  authDomain: "react--clone-c8de9.firebaseapp.com",
  databaseURL: "https://react--clone-c8de9.firebaseio.com",
  projectId: "react--clone-c8de9",
  storageBucket: "react--clone-c8de9.appspot.com",
  messagingSenderId: "91292172114",
  appId: "1:91292172114:web:a49572951fc6582279c48b",
  measurementId: "G-QBJKY49RBE",
};

// Initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Database with FireStore
const db = firebaseApp.firestore();

// Authentication
const auth = firebase.auth();

export { db, auth };
