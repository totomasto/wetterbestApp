import firebase from 'firebase'
import firestore from 'firebase/firestore'


 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey:       process.env.VUE_APP_apiKey,
    authDomain:   process.env.VUE_APP_authDomain,
    databaseURL:  process.env.VUE_APP_databaseURL,
    projectId:    process.env.VUE_APP_projectId,
    storageBucket:process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId,
    appId: process.env.VUE_APP_appId,
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export default firebaseApp;