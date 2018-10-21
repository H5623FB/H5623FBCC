import firebase from "firebase";

var config = {
    apiKey: "AIzaSyDtXfHLiQnff5cB6POkHcn2_uVOh1PsEBY",
    authDomain: "fbcc-e51e7.firebaseapp.com",
    databaseURL: "https://fbcc-e51e7.firebaseio.com",
    projectId: "fbcc-e51e7",
    storageBucket: "fbcc-e51e7.appspot.com",
    messagingSenderId: "279321215698"
  };
//firebase.initializeApp(config);
var fire = firebase.initializeApp(config);
export default fire;