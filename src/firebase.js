import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-aqpZdAO96LWdUwizFu85jyFhiehFwfI",
  authDomain: "imessenger-clone.firebaseapp.com",
  databaseURL: "https://imessenger-clone.firebaseio.com",
  projectId: "imessenger-clone",
  storageBucket: "imessenger-clone.appspot.com",
  messagingSenderId: "511349875179",
  appId: "1:511349875179:web:07afcde2898510eb5079ae",
  measurementId: "G-9DH3KFS581",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export default db;
export { auth, provider };
