import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import { auth } from "./firebase.js";

const signupForm = document.querySelector('#registro__form--turista');


signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['user_turista_registrarse'].value;
    const password = signupForm['password_turista_registrarse'].value;
    
    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

    } catch (error) {
        console.log(error);
        
    }
        
})