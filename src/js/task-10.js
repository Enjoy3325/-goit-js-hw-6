// queries from HTML to DOM JS
const refs = {
  inputNumber: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  newBox: document.querySelector('#boxes'),
}
// Variables
  let amount = 0;
  let basicSize = 20;


// Listeners
refs.inputNumber.addEventListener('input', onInputNumber);
refs.createBtn.addEventListener('click', () =>  createBoxes(amount));
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onInputNumber(e) {
  console.log(e.currentTarget.value);
  amount = Number(e.currentTarget.value);
}

//  Button Create collor box 
function createBoxes(amount) {
  const divBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
  basicSize += 10;
  
    
    const divBox = document.createElement('div');
    divBox.style.width = `${basicSize}px`;
    divBox.style.height = `${basicSize}px`;
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    divBoxes.push(divBox);
  
    //  console.log(divBoxes);
  
  }
  console.log(amount);
    console.log(divBoxes);
  refs.newBox.append(...divBoxes);
}

//  Button Destroy box
function destroyBoxes() {
  refs.newBox.innerHTML = '';
}
// Randomaizer color the formula
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





