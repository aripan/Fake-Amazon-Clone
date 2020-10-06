import firebase from "firebase";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_Id,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Database with FireStore
const db = firebaseApp.firestore();

// Authentication
const auth = firebase.auth();

export { db, auth };
