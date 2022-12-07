

const mensajeCuenta = document.querySelector('#mensajeCuenta');
const cerrarMensaje = document.querySelector('#cerraMensajeCuenta')


cerrarMensaje.addEventListener('click', () => { 
    mensajeCuenta.classList.remove('active');
})


