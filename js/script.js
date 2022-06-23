document.querySelector('#show').addEventListener('click', function () {

    let showPass = document.querySelector('#pass');
    if (showPass && showPass.getAttribute('type') === 'password') {
        showPass.setAttribute('type', 'text');
    } else {
        showPass.setAttribute('type', 'password')
    }

});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    let formData = {
        name: name,
        email: email,
        password: pass
    };

    localStorage.setItem('formData', JSON.stringify(formData));
});