// var firebase = require('firebase-admin')

// const firebaseConfig = {
//   apiKey: "AIzaSyDyzX5S9_1N4FZfIIlwyUcIedw7qqMYoTs",
//   authDomain: "hospital-fa0f3.firebaseapp.com",
//   databaseURL: "https://hospital-fa0f3-default-rtdb.firebaseio.com",
//   projectId: "hospital-fa0f3",
//   storageBucket: "hospital-fa0f3.appspot.com",
//   messagingSenderId: "254767231960",
//   appId: "1:254767231960:web:7d6ab73829fa949c3678ad",
//   measurementId: "G-GYQZSLJJ5J"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // console.log(firebase);
// const db = firebase.firestore();
// const auth = firebase.auth();
// // var admin = require("firebase");
// module.exports = {db, auth};  


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test", {
}).then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => { console.log(err) });

