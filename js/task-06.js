const textInput = document.querySelector('#validation-input');

const defaultLength = Number(textInput.getAttribute('data-length'));


textInput.addEventListener('blur', (event) => {
    
    let lengthOfCurrentTargetValue = Number(textInput.value.trim().length);
    
    if (lengthOfCurrentTargetValue === defaultLength) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else  {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid')
    }
})
