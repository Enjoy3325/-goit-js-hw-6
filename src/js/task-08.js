const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {
    e.preventDefault();
    const data = {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
    };
    console.log(e.target.elements.email.value);
    
    if (data.email === '' || data.password === '') {
    alert("Please fill in all the fields!")
    } else {
        form.reset();
    }
    console.log(form);
}