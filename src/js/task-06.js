const validationInput = document.querySelector('#validation-input');



validationInput.addEventListener('blur', onBlurInput);
function onBlurInput(e) {
    validationInput.classList.remove('valid', 'invalid')
    if (Number(validationInput.dataset.length) === e.target.value.length ) {
        validationInput.classList.add('valid');
        alert('✅ Correctly entered!')
    } else {
        validationInput.classList.add('invalid');
        alert('❌ The input is wrong! Try again.')
    }
}

console.log(Number(validationInput.dataset.length));
// console.log(e.target.value.length);