const slider = document.querySelector(".banner__slider");
const imagenes = document.querySelectorAll(".banner__slider .slide");
const bottom_slider = document.querySelectorAll('.bottom__slider button');
var primerSlide = null;

const moverSlide = () => {
  slider.style.transition = "all 1s ease";
  slider.style.marginLeft = "-100%";

  setTimeout(() => {
    primerSlide = slider.firstElementChild;
    slider.appendChild(primerSlide);
    slider.style.transition = "unset";
    slider.style.marginLeft = "0%";
  }, 1000);
};

const animaSlider = () => {
  setInterval(moverSlide, 3000);
};

const slideSelect = () => {
  for (let i = 0; i < bottom_slider.length; i++) {
    bottom_slider[i].addEventListener('click', () => {
      
    })
    
  }
};

animaSlider();

// (function () {
//     //Objeto con las propiedades del efecto slider
//     var propSlider = {
//         slider: document.getElementById('slider'),
//         primerSlide:null
//     }

//     //Objeto con los metodos del efecto slider
//     var metSlider = {

//         inicio: function () {
//             setInterval(metSlider.moverSlide, 3000);
//         },

//         moverSlide: function () {
//             propSlider.slider.style.transition = 'all 1s ease';
//             propSlider.slider.style.marginLeft = '-100%';

//             setTimeout(() => {
//                 propSlider.primerSlide = propSlider.slider.firstElementChild;
//                 propSlider.slider.appendChild(propSlider.primerSlide);
//                 propSlider.slider.style.transition = 'unset';
//                 propSlider.slider.style.marginLeft = '0%';
//             }, 1000);
//         }
//     }

//     metSlider.inicio();
// }())
