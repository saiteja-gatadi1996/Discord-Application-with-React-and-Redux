// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyATz3XqinbEFu6eSYHVljp3qHmGRnBXFCQ",
  authDomain: "discord-clone-73c75.firebaseapp.com",
  databaseURL: "https://discord-clone-73c75.firebaseio.com",
  projectId: "discord-clone-73c75",
  storageBucket: "discord-clone-73c75.appspot.com",
  messagingSenderId: "724614995819",
  appId: "1:724614995819:web:5fab6a71dffc806aa9362e",
  measurementId: "G-TV2KKYCKN8"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;