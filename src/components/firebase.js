import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwZ-N--_Y_7UfFGMZIF1QUL4JYtJC2rME",
  authDomain: "admin-9ce1b.firebaseapp.com",
  databaseURL: "https://admin-9ce1b-default-rtdb.firebaseio.com",
  projectId: "admin-9ce1b",
  storageBucket: "admin-9ce1b.appspot.com",
  messagingSenderId: "913644858190",
  appId: "1:913644858190:web:84d2a01e34303f56cdcc1f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };