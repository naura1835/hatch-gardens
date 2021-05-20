import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASGBL9JACj0gqxs887rHwI7Br35rW3UQ4",
  authDomain: "plant-oasis-db.firebaseapp.com",
  projectId: "plant-oasis-db",
  storageBucket: "plant-oasis-db.appspot.com",
  messagingSenderId: "563300781001",
  appId: "1:563300781001:web:08456ea0a3d466e911f618",
  measurementId: "G-0F7SLSTM8X",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
