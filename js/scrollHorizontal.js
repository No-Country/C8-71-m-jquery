const contenedorSlider = document.querySelector('.turisticos_marco');

contenedorSlider.addEventListener('wheel', (e) => {
    e.preventDefault();
    contenedorSlider.scrollLeft += e.deltaY;
})