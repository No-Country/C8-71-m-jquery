const btnMenu = document.querySelector('.header__perfil');
const icon = document.querySelectorAll('.header__perfil > i');
const menu = document.querySelector('.perfil_menu');

const activarMenu = () => { 
    btnMenu.addEventListener('click', () => {
        for (let i = 0; i < icon.length; i++) {
            icon[i].classList.toggle('active');
        };
        menu.classList.toggle('active');
    });
};

activarMenu();