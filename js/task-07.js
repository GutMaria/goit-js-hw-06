const inputRange = document.querySelector('input');
console.log(inputRange);

const text = document.querySelector('#text');
const textContent = text.textContent;
console.log(textContent);



inputRange.addEventListener('input', (event) => {
    let valueOfInput = inputRange.value;
    
    text.style.fontSize = `${valueOfInput}px`;
})