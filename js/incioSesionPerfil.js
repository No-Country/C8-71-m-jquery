const btnTurista = document.querySelector('.turista__ingresar');
const btnAnfitrion = document.querySelector('.anfitrion__ingresar');
const bannerAnfitrion = document.querySelector('.seleccionPerfil__anfitrion');
const bannerTurista = document.querySelector('.seleccionPerfil__turista');
const sesionAnfitrion = document.querySelector('.inicioSesion__anfitrion');
const sesionTurista = document.querySelector('.inicioSesion__turista');
const btnAtras = document.querySelectorAll('.inicioSesion__volver');
var viewWindow = window.matchMedia("(max-width: 720px)");

const cambiarPantalla = (boton, banner, sesion) => {
    boton.classList.remove('active');
    boton.parentNode.style.paddingTop = '0';
    banner.classList.remove('active');
    sesion.classList.add('active');
    if (viewWindow.matches) {
        boton.parentNode.parentNode.style.transition = 'all 0.3s ease';
        boton.parentNode.parentNode.style.height = '32%';
    }
}

const volverPantalla = (boton, banner, sesion) => {
    boton.classList.add('active');
    banner.classList.add('active');
    sesion.classList.remove('active');
    if (viewWindow.matches) {
        
        boton.parentNode.parentNode.style.height = '100%';
    } else {
        boton.parentNode.style.paddingTop = '40%';
    }
}

const inicioSesion = (botonIngresar, botonRegresar) => {
    botonIngresar.addEventListener('click', () => {
        switch (botonIngresar) {
            case btnTurista:
                cambiarPantalla(btnTurista, bannerAnfitrion, sesionTurista);
                botonRegresar.addEventListener('click', () => {
                    volverPantalla(btnTurista, bannerAnfitrion, sesionTurista);
                });
                break;

            case btnAnfitrion:
                cambiarPantalla(btnAnfitrion, bannerTurista, sesionAnfitrion);
                botonRegresar.addEventListener('click', () => {
                    volverPantalla(btnAnfitrion, bannerTurista, sesionAnfitrion);
                });
                break;

            default:
                break;
        };
    });
};



inicioSesion(btnTurista, btnAtras[1]);
inicioSesion(btnAnfitrion, btnAtras[0]);
