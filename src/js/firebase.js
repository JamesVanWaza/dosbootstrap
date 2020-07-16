/** FirebaseJS **/
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Firebase Perfomance
import "firebase/performance";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";
import "firebase/storage";
import "firebase/database";
import "firebase/remote-config";

// Firebase Project Config 
const firebaseConfig = {
    apiKey: "AIzaSyC2fSgvBKn_kfTA-YA_oNSnuv2T9IFJ1LY",
    authDomain: "startbootstrap-dostesting.firebaseapp.com",
    databaseURL: "https://startbootstrap-dostesting.firebaseio.com",
    projectId: "startbootstrap-dostesting",
    storageBucket: "startbootstrap-dostesting.appspot.com",
    messagingSenderId: "1027318006182",
    appId: "1:1027318006182:web:74246415fbcdb666170f67"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();


const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const inputMsg = document.querySelector("#inputMsg");
const form = document.querySelector("#demo-form");

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Write data to db
const doSth = () => {
    db.collection("contactForm")
        .add({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: inputMsg.value,
            timestamp: Date.now()
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            inputMsg.value = "";
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
};