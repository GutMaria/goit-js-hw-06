const textInput = document.querySelector('#name-input');
const greetingName = document.querySelector('#name-output');



textInput.addEventListener('input', (event) => {
    greetingName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        greetingName.textContent = 'Anonymous'
    }
});



