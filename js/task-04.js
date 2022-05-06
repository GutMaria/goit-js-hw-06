const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

function onBtnDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

function onBtnIncrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

btnDecrementEl.addEventListener('click', onBtnDecrementClick);

btnIncrementEl.addEventListener('click', onBtnIncrementClick);


