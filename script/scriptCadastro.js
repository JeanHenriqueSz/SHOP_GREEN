document.addEventListener("DOMContentLoaded", function () {
    let usernameInput = document.getElementById("username");
    let usernameLabel = document.querySelector('label[for="username"]');
    let usernameHelper = document.getElementById("username-helper");

    usernameInput.addEventListener("focus", function () {
        usernameLabel.classList.add("required-popup");
    });

    usernameInput.addEventListener("blur", function () {
        usernameLabel.classList.remove("required-popup");
    });

    usernameInput.addEventListener("input", function (e) {
        let valor = e.target.value;
        if (valor.length < 3) {
            usernameInput.classList.add("error");
            usernameHelper.classList.add("visible");
            usernameHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres";
            usernameInput.classList.remove("correct");
        } else {
            usernameInput.classList.remove("error");
            usernameInput.classList.add("correct");
            usernameHelper.classList.remove("visible");
        }
    });

    let passwordInput = document.getElementById("password");
    let passwordLabel = document.querySelector('label[for="password"]');
    let passwordHelper = document.getElementById("password-helper");

    passwordInput.addEventListener("focus", function () {
        passwordLabel.classList.add("required-popup");
    });

    passwordInput.addEventListener("blur", function () {
        passwordLabel.classList.remove("required-popup");
    });

    passwordInput.addEventListener("input", function (e) {
        let valor = e.target.value;
        if (valor.length < 6) {
            passwordInput.classList.add("error");
            passwordHelper.classList.add("visible");
            passwordHelper.innerText = "A senha deve ter no mínimo 6 caracteres!";
            passwordInput.classList.remove("correct");
        } else {
            passwordInput.classList.remove("error");
            passwordHelper.classList.remove("visible");
            passwordInput.classList.add("correct");
        }
    });

    let emailInput = document.getElementById("email");
    let emailLabel = document.querySelector('label[for="email"]');
    let emailHelper = document.getElementById("email-helper");

    emailInput.addEventListener("focus", function () {
        emailLabel.classList.add("required-popup");
    });

    emailInput.addEventListener("blur", function () {
        emailLabel.classList.remove("required-popup");
    });

    emailInput.addEventListener("input", function (e) {
        let valor = e.target.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(valor)) {
            emailInput.classList.add("error");
            emailHelper.classList.add("visible");
            emailHelper.innerText = 'Por favor, insira um email válido.';
            emailInput.classList.remove("correct");
        } else {
            emailInput.classList.remove("error");
            emailInput.classList.add("correct");
            emailHelper.classList.remove("visible");
        }
    });

    let form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        let valid = true;

        if (usernameInput.value.length < 3) {
            valid = false;
            usernameInput.classList.add("error");
            usernameHelper.classList.add("visible");
            usernameHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres";
        }

        if (passwordInput.value.length < 6) {
            valid = false;
            passwordInput.classList.add("error");
            passwordHelper.classList.add("visible");
            passwordHelper.innerText = "A senha deve ter no mínimo 6 caracteres!";
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            valid = false;
            emailInput.classList.add("error");
            emailHelper.classList.add("visible");
            emailHelper.innerText = 'Por favor, insira um email válido.';
        }

        if (!valid) {
            e.preventDefault();
            alert("Por favor, preencha os campos obrigatórios corretamente.");
        } else {
            alert("Formulário enviado com sucesso!");
            form.reset();
            usernameInput.classList.remove("correct");
            passwordInput.classList.remove("correct");
            emailInput.classList.remove("correct");
        }
    });
});

