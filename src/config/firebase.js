import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBhCaDUX8NyhpmJNpI42fTHO9PqpwpGnmo",
    authDomain: "mirth-movies.firebaseapp.com",
    databaseURL: "https://mirth-movies.firebaseio.com",
    projectId: "mirth-movies",
    storageBucket: "mirth-movies.appspot.com",
    messagingSenderId: "699945830767",
    appId: "1:699945830767:web:25ed0f0e1da22f8e8b009a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots: true })


export default  firebase;
