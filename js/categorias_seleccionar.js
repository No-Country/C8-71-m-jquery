const categorias=document.querySelectorAll('.categorias');

const categoriasActivar= function () {
    for (let index = 0; index <categorias.length; index++) {
            categorias[index].addEventListener('click', function () {
                categorias[index].classList.toggle('active');
            })
    }
    
}

categoriasActivar();