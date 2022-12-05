const heart = document.querySelectorAll('.card__favorito i');

const activarFavorito = () => {
    for (let i = 0; i < heart.length; i++) {
        heart[i].addEventListener('click', () => {
            heart[i].classList.toggle('active');
            if (heart[i].classList.contains('fa-regular')) {
                heart[i].classList.replace('fa-regular', 'fa-solid');
            }
            else if (heart[i].classList.contains('fa-solid')) {
                heart[i].classList.replace('fa-solid', 'fa-regular');
            }

        })
        
    }
}

activarFavorito();