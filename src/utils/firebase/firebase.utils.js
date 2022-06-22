import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASGBL9JACj0gqxs887rHwI7Br35rW3UQ4",
  authDomain: "plant-oasis-db.firebaseapp.com",
  projectId: "plant-oasis-db",
  storageBucket: "plant-oasis-db.appspot.com",
  messagingSenderId: "563300781001",
  appId: "1:563300781001:web:08456ea0a3d466e911f618",
  measurementId: "G-0F7SLSTM8X",
};

//intialize firebase app
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

//initialize firebase authentication
export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// export default firebase;
