import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { mensajePop } from './mensajePop.js';
import "./popUpSesion.js";
import "./logout.js";

const loggedInLinks = document.querySelectorAll(".loggedIn");
const loggedOutLinks = document.querySelectorAll(".loggedOut");
const imgPerfil = document.querySelector("#imageProfile");
const btnAgregar = document.querySelector("#agregarAlojamiento");
const mensajeCuenta = document.querySelector("#mensajeCuenta");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    loggedInLinks.forEach((link) => link.classList.add("active"));
    loggedOutLinks.forEach((link) => link.classList.remove("active"));
    if (window.location.href.slice(window.location.href.lastIndexOf("/") + 1) === "index.html") {
      btnAgregar.addEventListener('click', () => {
        window.location.href = "./html/categorias.html";
      })
      
    }
    
    if (mensajeCuenta) {
      mensajeCuenta.classList.remove("active");
    }
    if (user.photoURL) {
      imgPerfil.setAttribute("src", user.photoURL);
    } else {
      imgPerfil.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/206/206881.png"
      );
    }
  } else {
    loggedOutLinks.forEach((link) => link.classList.add("active"));
    loggedInLinks.forEach((link) => link.classList.remove("active"));
    btnAgregar.addEventListener('click', () => {
      mensajePop('Inicia Sesión para que puedas agregar tu alojamiento', 'error');
    })
    if ((window.location.href.slice(window.location.href.lastIndexOf("/") + 1) !==
      "index.html") && 
      (window.location.href.slice(window.location.href.lastIndexOf("/") + 1) !==
      "pantalla_cards.html")) {
      window.location.href = "../index.html";
    }
    if (mensajeCuenta) {
      mensajeCuenta.classList.add("active");
    }
    // imgPerfil.setAttribute('src', './recursos/profile/profile.png');
    console.log(imgPerfil);
  }
});
