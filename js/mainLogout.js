import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

import './logout.js';

const loggedInLinks = document.querySelectorAll('.loggedIn');
const loggedOutLinks = document.querySelectorAll('.loggedOut');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loggedInLinks.forEach(link => link.classList.add('active'));
        loggedOutLinks.forEach(link => link.classList.remove('active'));
    } else {
        loggedOutLinks.forEach(link => link.classList.add('active'));
        loggedInLinks.forEach(link => link.classList.remove('active'));
        if (window.location.href.slice(!window.location.href.lastIndexOf("/")+1,) === "index.html") {
            window.location.href = "../index/html"; 
        }
    }
});