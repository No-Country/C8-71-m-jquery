import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

const googleBtn = document.querySelector('#googleLogIn');

googleBtn.addEventListener('click', async() => {
    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);
        window.location.href='./bienvenido.html';

    } catch (error) {
        console.log(error);
    }
})