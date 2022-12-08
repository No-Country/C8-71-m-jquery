const categorias=document.querySelectorAll('.categorias');

const popComenzar = document.querySelector('.popUpComenzar');
const btnVolver = document.querySelector('#btnComenzar');

setTimeout(() => {
    popComenzar.classList.add('active')
}, 1500);

const cerrarPop = () => {
    btnVolver.addEventListener('click', () => {
        popComenzar.classList.remove('active')
    })
}


const categoriasActivar= function () {
    for (let index = 0; index <categorias.length; index++) {
            categorias[index].addEventListener('click', function () {
                categorias[index].classList.toggle('active');
            })
    }
    
}

categoriasActivar();
cerrarPop();