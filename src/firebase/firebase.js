import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";


const config = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

//const database = firebase.database();
const app = initializeApp(config);
const db = getDatabase();
const reference = ref(db, 'people');

console.log(reference);


onValue(reference, (snapshot)=>{

  const data  = snapshot.val();
})