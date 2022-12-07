const signInForm = document.querySelector('#inicioSesion__form');

signInForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = signInForm['user_login'].value;
    const password = signInForm['password_login'].value;
    
    console.log(email, password);
})

