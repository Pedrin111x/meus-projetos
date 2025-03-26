document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    // Armazenar o email e a senha no localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    document.getElementById('registerMessage').innerText = 'Cadastro realizado com sucesso! Você pode fazer login agora.';
});
