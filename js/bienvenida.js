import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

const userName = document.querySelector('#nombreUser');


onAuthStateChanged(auth, async (user) => { 
    if (user) {
        if (user.displayName) {
            userName.innerHTML = user.displayName.split(' ')[0];
            console.log(user);
        } else {
            userName.innerHTML = user.email.split('@')[0];
        }
    }
})

// setTimeout(() => {
//     window.location.href = "../index.html"; 
// }, 4000);
