const slider = document.querySelector(".banner__slider");
const imagenes = document.querySelectorAll(".banner__slider .slide");
const bottom_slider = document.querySelectorAll('.bottom__slider button');
var primerSlide = null;
var isSlideSelected = false ;

const moverSlide = () => {
  if (!isSlideSelected) {
    slider.style.transition = "all 1s ease";
    slider.style.marginLeft = "-100%";

    setTimeout(() => {
      primerSlide = slider.firstElementChild;
      slider.appendChild(primerSlide);
      slider.style.transition = "unset";
      slider.style.marginLeft = "0%";
    }, 1000);
  }
};

const animaSlider = () => {
  setInterval(moverSlide, 3000);
};

const slideSelect = () => {
  for (let i = 0; i < bottom_slider.length; i++) {
    bottom_slider[i].addEventListener('click', () => {
      for (let i = 0; i < bottom_slider.length; i++) {
        bottom_slider[i].classList.remove('active');
      }
      bottom_slider[i].classList.add('active');
      slider.insertBefore(imagenes[i], slider.children[0]);
      slider.style.transition = "unset";
      slider.style.marginLeft = "0%"; 
      isSlideSelected = true;



      setTimeout(() => {
        isSlideSelected = false;       
      }, 2000);
    })
    
  }
};

animaSlider();
slideSelect();
