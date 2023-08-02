// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0arvMdKuqsq7rwZbYSu3HM1-u7zoKi60",
  authDomain: "imoney-126c2.firebaseapp.com",
  projectId: "imoney-126c2",
  storageBucket: "imoney-126c2.appspot.com",
  messagingSenderId: "356244697589",
  appId: "1:356244697589:web:6412aa9eabd60e28eaf0bc",
  measurementId: "G-E1W3XC6DRK",
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const fireStoreCore = getFirestore(firebaseApp);

// export { fireStoreCore };

const app = firebase.initializeApp(firebaseConfig);

const projectAuth = app.auth();
const projectFirestore = app.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectAuth, projectFirestore, timestamp };
