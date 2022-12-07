const input = document.querySelector('textarea');
const counter = document.querySelector('span');

counter.style.color = 'red';

textarea addEventListener('textarea', e => {
    if (input.value.length < 1000) {
        counter.innerText = input.value.length;
    } else {
        counter.innerText = 'Max';
        input.value = input.value.substring(0, 1000)
    }
})

