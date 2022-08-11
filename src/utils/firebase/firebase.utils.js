import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();

export const addCollectionAndDocument = async (
  collectionKey,
  objectsToAdd,
  field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  // const categoryMap =
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  // .reduce((accumulator, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   accumulator[title.toLowerCase()] = {
  //     title: `${title} plant`,
  //     routeName: title,
  //     items: items,
  //   };

  //   return accumulator;
  // }, {});

  // return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      alert("error creating user" + err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (func) =>
  onAuthStateChanged(auth, func);
