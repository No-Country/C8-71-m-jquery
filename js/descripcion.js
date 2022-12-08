
const btnFinalizar = document.querySelector('#btnFinalizar');
const popComenzar = document.querySelector('.popUpComenzar');
const btnVolver = document.querySelector('#btnComenzar');


const abrirPop = () => {
    btnFinalizar.addEventListener('click', () => {
        popComenzar.classList.add('active');
    })
}

const redirIndex = () => {
    btnVolver.addEventListener('click', () => {
        window.location.href = "../index.html";
        
    })
}


abrirPop();
redirIndex();