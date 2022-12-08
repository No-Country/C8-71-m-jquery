const inputs = document.querySelectorAll('.inicioSesion__form--turista input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', () => {
        inputs[i].parentNode.children[0].classList.add('active')
    })
    
}
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', () => {
        inputs[i].parentNode.children[0].classList.add('active')
    })
    
}