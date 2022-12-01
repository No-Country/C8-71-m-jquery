const btnTurista = document.querySelector('.turista__ingresar');
const btnAnfitrion = document.querySelector('.anfitrion__ingresar');
const bannerAnfitrion = document.querySelector('.seleccionPerfil__anfitrion');
const bannerTurista = document.querySelector('.seleccionPerfil__turista');
const sesionAnfitrion = document.querySelector('.inicioSesion__anfitrion');
const sesionTurista = document.querySelector('.inicioSesion__turista');
const btnAtras = document.querySelectorAll('.inicioSesion__volver');

const cambiarPantalla = (boton, banner, sesion) => {
    boton.classList.remove('active');
    boton.parentNode.style.padding = '20%';
    banner.classList.remove('active');
    sesion.classList.add('active');
}

const volverPantalla = (boton, banner, sesion) => {
    boton.classList.add('active');
    boton.parentNode.style.padding = '56% 20% 20%';
    banner.classList.add('active');
    sesion.classList.remove('active');
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
