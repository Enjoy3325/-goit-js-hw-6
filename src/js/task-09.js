
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  myBody: document.querySelector('body'),
  spanColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
}
refs.btnChangeColor.addEventListener('click', onChacgeColorClick);

function onChacgeColorClick() {

    let colorChange = getRandomHexColor();
  refs.myBody.style.backgroundColor = colorChange;
  refs.spanColor.textContent = colorChange;
  refs.btnChangeColor.style.background = getRandomHexColor();
  console.log(refs.myBody);
};













