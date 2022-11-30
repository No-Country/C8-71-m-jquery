const perfilAnfitrion = document.querySelector(".seleccionPerfil__anfitrion");
const perfilTurista = document.querySelector(".seleccionPerfil__turista");
const overlayTurista = document.querySelector(".turista__overlay");
const overlayAnfitrion = document.querySelector(".anfitrion__overlay");


const activarOverlay = (perfil) => perfil.addEventListener('mouseover',
    () => {
        switch (perfil) {
            case perfilTurista:

                overlayAnfitrion.classList.add('active');
                break;

            case perfilAnfitrion:

                overlayTurista.classList.add('active');
                break;
        }
    }
);

const quitarOverlay = (perfil) => perfil.addEventListener('mouseout',
    () => {
        switch (perfil) {
            case perfilTurista:

                overlayAnfitrion.classList.remove('active');
                break;

            case perfilAnfitrion:

                overlayTurista.classList.remove('active');
                break;
        }
    }
);

activarOverlay(perfilAnfitrion);
activarOverlay(perfilTurista);

quitarOverlay(perfilAnfitrion);
quitarOverlay(perfilTurista);
