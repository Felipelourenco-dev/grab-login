


// Função que verifica se o email é valido e adiciona uma ação caso não seja //

function validarEmail() {

var email = document.querySelector('#email')
var error = document.querySelector('.error')

if(!email.checkValidity()) {

    email.classList.add('invalido')
    error.innerHTML = 'Por favor, insira um email válido'
}
}

// Função para quando o input estiver ativo retirar a ação anterior

function redefinirMsg() {
    var error = document.querySelector('.error');

    if(error.innerHTML == "Por favor, insira um email válido"){
       
        email.classList.remove('invalido')
        error.innerHTML = " ";
    }
}

