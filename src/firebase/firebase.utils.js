import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZ9s05MYSWn0s41ms5wHEZrG6hUvzdNP0",
  authDomain: "crwn-db-1eb2c.firebaseapp.com",
  projectId: "crwn-db-1eb2c",
  storageBucket: "crwn-db-1eb2c.appspot.com",
  messagingSenderId: "616632609716",
  appId: "1:616632609716:web:8b3db8a10a26746c9ca0e1",
  measurementId: "G-GEKHFDW51R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
