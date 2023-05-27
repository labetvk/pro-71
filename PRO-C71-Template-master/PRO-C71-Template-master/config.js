import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyACi0YJBocEcqofcszvZ99gCFkXsbed5LA",
    authDomain: "pro-71-2d3a4.firebaseapp.com",
    projectId: "pro-71-2d3a4",
    storageBucket: "pro-71-2d3a4.appspot.com",
    messagingSenderId: "420624937699",
    appId: "1:420624937699:web:b8ebb6d25a8f9cd2cfcbd6"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
