const cards = document.querySelectorAll('.hospedajes__card');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {

        window.location.href = "./html/pantalla_cards.html";
    });

}
