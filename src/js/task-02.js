const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulListIngredients = document.querySelector('#ingredients');
const li = ingredients.map(el => {
  const itemIngredient = document.createElement('li');
  itemIngredient.classList.add('.item')
  itemIngredient.textContent = el;
  return itemIngredient;
})

ulListIngredients.append(...li)
console.log(ingredients);


