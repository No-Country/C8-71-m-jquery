import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { mensajePop } from './mensajePop.js';

const signInForm = document.querySelector('#inicioSesion__form');


signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['user_anfitrion'].value;
    const password = signInForm['password_anfitrion'].value;
    
    

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        // console.log(credentials)    
        signInForm.reset();
        window.location.href='./bienvenido.html';
    } catch (error) {
        console.log(error)    
        if (error.code === 'auth/user-not-found') {
            mensajePop('El usuario no está registrado', 'error');
        }else if (error.code === 'auth/wrong-password') {
            mensajePop('La contraseña es incorrecta', 'error');
        } else {
            console.log(error);
            mensajePop('Por favor verifica tus datos e intentalo nuevamente', 'error');
        }   
        
    }
})

