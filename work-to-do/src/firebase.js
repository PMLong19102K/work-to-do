import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB2LGgNqIuoKZ9JHjCw8fyfWl4kcUMTIhA",
    authDomain: "work-to-do-b9e31.firebaseapp.com",
    databaseURL: "https://work-to-do-b9e31-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "work-to-do-b9e31",
    storageBucket: "work-to-do-b9e31.appspot.com",
    messagingSenderId: "1023582843241",
    appId: "1:1023582843241:web:380fa0d66b8c7d68fb8df8"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;