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
        if (boton == btnTurista) {
            sesionAnfitrion.style.left = 'auto';
            sesionAnfitrion.style.top = '0';
            sesionAnfitrion.style.bottom= '-40%';
            sesionAnfitrion.style.height= '60vh';
        }
    }
    else if (boton == btnTurista) {
        sesionAnfitrion.style.left = '100%';
        sesionAnfitrion.style.top = '-100%';
        
    }
}

const volverPantalla = (boton, banner, sesion) => {
    boton.classList.add('active');
    banner.classList.add('active');
    sesion.classList.remove('active');
    if (viewWindow.matches) {
        
        boton.parentNode.parentNode.style.height = '100%';
        if (boton == btnTurista) {
            // sesionAnfitrion.style.left = 'auto';
            // sesionAnfitrion.style.top = 'auto';
            sesionAnfitrion.style.bottom= 'auto';
            sesionAnfitrion.style.height= 'inherit';
        }
    }
    else {
        boton.parentNode.style.paddingTop = '40%';
    }
     if (boton == btnTurista) {
        sesionAnfitrion.style.left = '0';
        sesionAnfitrion.style.top = '0';
        
    }
}

const inicioSesion = (botonIngresar, botonRegresar) => {
    botonIngresar.addEventListener('click', () => {
        switch (botonIngresar) {
            case btnTurista:
                cambiarPantalla(btnTurista, bannerAnfitrion, sesionAnfitrion);
                botonRegresar.addEventListener('click', () => {
                    volverPantalla(btnTurista, bannerAnfitrion, sesionAnfitrion);
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



inicioSesion(btnTurista, btnAtras[0]);
inicioSesion(btnAnfitrion, btnAtras[0]);
