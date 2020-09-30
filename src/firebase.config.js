import firebase from "firebase";

const firebaseConfig = {
  apiKey: "", // add your api key
  authDomain: "clone-af859.firebaseapp.com",
  databaseURL: "https://clone-af859.firebaseio.com",
  projectId: "clone-af859",
  storageBucket: "clone-af859.appspot.com",
  messagingSenderId: "", // add your api key
  appId: "", // add your api key
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
