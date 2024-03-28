import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXTd2kerK_c7Osj4Qgr3z7LGd9HLoyeEQ",
  authDomain: "subscriptions-c945c.firebaseapp.com",
  projectId: "subscriptions-c945c",
  storageBucket: "subscriptions-c945c.appspot.com",
  messagingSenderId: "639463876379",
  appId: "1:639463876379:web:c7892731d797ef0c10d5be"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
