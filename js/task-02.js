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
  return array.map((name) => {
    
    const itemEl = document.createElement('li');
    itemEl.textContent = name;
    itemEl.classList = 'item';
    return itemEl;
  })
};

ulEl.append(...createList(ingredients));