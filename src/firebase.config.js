import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBF9QUSC5yFZbOIXzZwBkDCO17neV1AR-4",
  authDomain: "clone-af859.firebaseapp.com",
  databaseURL: "https://clone-af859.firebaseio.com",
  projectId: "clone-af859",
  storageBucket: "clone-af859.appspot.com",
  messagingSenderId: "429517327396",
  appId: "1:429517327396:web:df15d68bfd0e39db64dcb1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
