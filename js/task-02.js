const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients');

const createList = (array) => {
  array.map((name) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = name;
    itemEl.classList = 'item';
    ulEl.append(itemEl);//мабуть це не одноразове додавання елементыв?! не знаю як по іншому зробити
  })
};

createList(ingredients); 

// ulEl.insertAdjacentHTML('afterbegin', createList(ingredients));   
// так не виходить навіть якщо після array.map() зробити .join('')