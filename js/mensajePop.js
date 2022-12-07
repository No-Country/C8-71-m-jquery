export function mensajePop(mensaje, tipo) {
  Toastify({
    text: mensaje,
    duration: 3500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    // gravity: "top", // `top` or `bottom`
    offset: {
      x: '90rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: '90rem', // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    // position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: tipo === "valido" ? "#006564" : "OrangeRed",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
