document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar ou realizar outra ação
    } else {
        document.getElementById('message').innerText = 'Email ou senha inválidos.';
    }
});
