// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";
import "firebase/performance";
import "firebase/storage";
import "firebase/database";
import "firebase/remote-config";

// Firebase Project Config 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Cloud Firestore
let db = firebase.firestore();

// Reference messages collection
let messagesRef = db.collection("DosBootstrapCF").doc("contact");

// Listen for form submit
document.querySelector("#dosBForm").addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    //Get value
    let name = getInputVal('fName');

    // Save message
    saveMessage(name);
}

// Function to get form value
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name) {
    messagesRef.set({
        name: name,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // add last updated on 
    });
    console.log('Submitted');
}