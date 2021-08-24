import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAA3CQoO5uwPFpo39eO7E685xkfg035Bek",
  authDomain: "slack-clone-ketan.firebaseapp.com",
  projectId: "slack-clone-ketan",
  storageBucket: "slack-clone-ketan.appspot.com",
  messagingSenderId: "934016419850",
  appId: "1:934016419850:web:498fae7e75c2b834d537f3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};