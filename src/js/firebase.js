// Initialize Firebase
import { initializeApp } from "firebase/app";

import {} from "firebase/analytics";
import {} from "firebase/auth";
import {} from "firebase/firestore";
import {} from "firebase/functions";
import {} from "firebase/messaging";
import {} from "firebase/storage";
import {} from "firebase/performance";
import {} from "firebase/remote-config";
import {} from "firebase/app-check";

// Firebase configuration
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
const app = initializeApp(firebaseConfig);