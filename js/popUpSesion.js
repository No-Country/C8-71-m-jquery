const logout = document.querySelector('#menu__sesion--cerrar');
const popConfirmar = document.querySelector('.popUpMensaje');
const btnVolver = document.querySelector('#btnvolver')

const popLogOut = () => {
    logout.addEventListener('click', () => {
        popConfirmar.classList.add('active')
    })
    btnVolver.addEventListener('click', () => {
        popConfirmar.classList.remove('active')
    })
    
};

popLogOut();