let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

usernameInput.addEventListener("focus", function(){
    usernameLabel.classList.add("required-popup")
})

usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup")
})

usernameInput.addEventListener("input", function(e){
    let valor = e.target.value;
    if(valor.length < 3){
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres"
        usernameInput.classList.remove("correct")

    }else{
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")

    }
    
})

let passwordInput = document.getElementById("password"); 
let passwordLabel = document.querySelector('label[for="password"]');
let passwordHelper = document.getElementById("password-helper");

passwordInput.addEventListener("focus", function(){
    passwordLabel.classList.add("required-popup")
})

passwordInput.addEventListener("blur", function(){
    passwordLabel.classList.remove("required-popup")
})

passwordInput.addEventListener("input", function(e){
    let valor = e.target.value;
    if(valor.length < 6){
        passwordInput.classList.add("error")
        passwordHelper.classList.add("visible")
        passwordHelper.innerText = "A senha deve ter no mínimo 6 caracteres!"
        passwordInput.classList.remove("correct")
    } else {
        passwordInput.classList.remove("error")
        passwordHelper.classList.remove("visible")
        passwordInput.classList.add("correct")
    }
});

let form = document.querySelector('form');
// Eevento de envio ao formulário
form.addEventListener("submit", function(e) {
    form.reset(); // Isso irá limpar todos os campos do formulário
    alert("Formulário enviado com sucesso!");
});