// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChOepFFtN6bMS_LOctjIf35IXz6gLFQ5o",
  authDomain: "colon-dream.firebaseapp.com",
  projectId: "colon-dream",
  storageBucket: "colon-dream.appspot.com",
  messagingSenderId: "111527542755",
  appId: "1:111527542755:web:160f05877ab87319802ad6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);