document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email == 'rahmanmoshiur253@gmail.com' && password == '1234') {
        window.location.href = 'bank.html';
    } else {
        document.getElementById('error').innerText = 'pasword or email incorrect';
    }

})