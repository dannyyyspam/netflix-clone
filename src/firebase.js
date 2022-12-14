import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCikJAe9FlCd4b4oG3KRgTtgJVKekAnS0c",
  authDomain: "netflix-clone-7769d.firebaseapp.com",
  projectId: "netflix-clone-7769d",
  storageBucket: "netflix-clone-7769d.appspot.com",
  messagingSenderId: "234012744683",
  appId: "1:234012744683:web:ab6f4c7a6864b559f597ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
