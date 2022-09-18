const inputName = document.querySelector('#name-input');
const spanNameOutput = document.querySelector('#name-output');

inputName.addEventListener('input', onInputName);
function onInputName(e) {
    if (e.target.value !== "") {
          return spanNameOutput.textContent  = e.target.value;
        
       
    } else {
       return spanNameOutput.textContent = 'Anonymous';
    }
}
console.log(e.target.value);