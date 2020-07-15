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


// Contact Form
const form = document.getElementById("demo-form");
const fname = document.getElementById("#fname");
const lname = document.getElementById("#lname");
const email = document.getElementById("#email");
const message = document.getElementById("#message");

// Listen to the form submission
form.addEventListener("submit", (e) => {
    // Prevent the default form redirect
    e.preventDefault();

    // Write a new message to the database collection "guestbook"
    firebase.firestore().collection("contactForm").add({
        FirstName: input.value,
        timestamp: Date.now(),
    });

    // clear message input field
    input.value = "";

    // Retutn false to avoid redirect
    return false;
});