const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementClick);
function onDecrementClick() {
    counterValue -= 1;
    value.textContent = counterValue
};
incrementBtn.addEventListener('click', onIncrementClick);
function onIncrementClick() {
    counterValue += 1;
    value.textContent = counterValue
};
console.log(value);