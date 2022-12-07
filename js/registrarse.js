import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { mensajePop } from './mensajePop.js';

const signupForm = document.querySelector('#registro__form--turista');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['user_turista_registrarse'].value;
    const password = signupForm['password_turista_registrarse'].value;
    
    // console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        // console.log(userCredentials);
        signupForm.reset();
        window.location.href='./bienvenido.html';

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            mensajePop('El correo ya está registrado', 'error');
        }else if (error.code === 'auth/weak-password') {
            mensajePop('La contraseña es muy insegura, debe contener al menos 6 caracteres', 'error');
        }else if (error.code === 'auth/invalid-email') {
            mensajePop('Por favor ingrese un correo válido', 'error');
        } else {
            console.log(error);
            mensajePop('Por favor verifica tus datos e intentalo nuevamente', 'error');
        }
    }
})
