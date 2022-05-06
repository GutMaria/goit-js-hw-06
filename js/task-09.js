function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
let backgroundText = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  let randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;

  backgroundText.textContent = randomColor;
}
