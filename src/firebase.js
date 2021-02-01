import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCH_5tDcWqQtQNbK8BBp6Txdv-9TwbmM-Q",
  authDomain: "clone-f82f9.firebaseapp.com",
  projectId: "clone-f82f9",
  storageBucket: "clone-f82f9.appspot.com",
  messagingSenderId: "80498369547",
  appId: "1:80498369547:web:9ba5e76ea6471132acd30e",
  measurementId: "G-Q206FH96BB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default {db,auth };
