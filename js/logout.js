import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js';
import { mensajePop } from './mensajePop.js';

const popConfirmar = document.querySelector('.popUpMensaje');
const btnConfirmar = document.querySelector('#btnLogOut');
const btnAgregar = document.querySelector('#agregarAlojamiento');


btnConfirmar.addEventListener('click', async() => {
    await signOut(auth);
    popConfirmar.classList.remove('active')
    btnAgregar.children[0].setAttribute('href', '')
    mensajePop('Sesión cerrada con exito', 'error');
})

btnAgregar.addEventListener('click', () => {
    if (btnAgregar.children[0].getAttribute('href')===''){
        mensajePop('Inicia Sesión para que puedas agregar tu alojamiento', 'error');
    }
})