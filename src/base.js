import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDaoX3vtirrY70clJQcPFZfIqaxZeUbURU",
    authDomain: "noteherder-7f1c0.firebaseapp.com",
    databaseURL: "https://noteherder-7f1c0.firebaseio.com",
    projectId: "noteherder-7f1c0",
    storageBucket: "noteherder-7f1c0.appspot.com",
    messagingSenderId: "197732594038"
  };
  const app = firebase.initializeApp(config);

  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const auth = firebase.auth()

  export default Rebase.createClass(app.database())