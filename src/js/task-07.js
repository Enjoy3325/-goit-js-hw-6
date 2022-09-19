const inputControl = document.querySelector('#font-size-control');
const spatText = document.querySelector('#text');
inputControl.addEventListener('input', onSliderControl);
function onSliderControl(e) {
    spatText.style.fontSize = e.target.value + 'px';
    console.log(e.target.value);
}