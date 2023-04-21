import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const config = {
  apiKey: "AIzaSyAicergJ0tWforHVov_z641lwa7UMOCGO4",
  authDomain: "fir-recipes-2ea2b.firebaseapp.com",
  projectId: "fir-recipes-2ea2b",
  storageBucket: "fir-recipes-2ea2b.appspot.com",
  messagingSenderId: "644743449947",
  appId: "1:644743449947:web:03acd33c737b35b351de7e",
  measurementId: "G-FEXKXF443P"

};

firebase.initializeApp(config);

/* if(!firebase.apps.length) {
    firebase.initializeApp(config);
} */



export default firebase;


/* apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
projectId: process.env.REACT_APP_PROJECT_ID, 
storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID, 
appId: process.env.REACT_APP_APP_ID, 
measurementId: process.env.REACT_APP_MEASUREMENT_ID, */