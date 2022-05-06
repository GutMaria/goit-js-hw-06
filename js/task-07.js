const inputRange = document.querySelector('input');
console.log(inputRange);

const text = document.querySelector('#text');
const textContent = text.textContent;
console.log(textContent);

text.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener('input', (event) => {   
    text.style.fontSize = `${inputRange.value}px`;
})