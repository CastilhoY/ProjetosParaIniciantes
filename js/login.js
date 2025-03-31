let nomeInput = document.getElementById('nome');
let emailInput = document.getElementById('email');
let senhaInput = document.getElementById('senha');
let telefoneInput = document.getElementById('telefone');
let estadoInput = document.getElementById('estado');
let cidadeInput = document.getElementById('cidade');

function criarMsgErro() {
    let mensagem = document.createElement('p');
    mensagem.classList.add('mensagem-erro');
    mensagem.style.color = 'red';
    return mensagem;
}

nomeInput.addEventListener('input', validarNome);
emailInput.addEventListener('input', validarEmail);
senhaInput.addEventListener('input', validarSenha);
telefoneInput.addEventListener('input', validarTelefone);
cidadeInput.addEventListener('input', validarCidade);
estadoInput.addEventListener('input', validarEstado);

function validarNome() {
    let mensagemErro = criarMsgErro();
    if (nomeInput.value.length < 3) {
        nomeInput.classList.add('erro');
        mensagemErro.innerText = 'Nome tem que ter pelo menos 3 caracteres';
        if (!nomeInput.parentNode.querySelector('p')) {
            nomeInput.parentNode.appendChild(mensagemErro);
        }
    } else {
        nomeInput.classList.remove('erro');
        let erro = nomeInput.parentNode.querySelector('p');
        if (erro) {
            erro.remove();
        }
    }
}

function validarEmail() {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let mensagemErro = emailInput.parentNode.querySelector('.mensagem-erro');

    if (!mensagemErro) {
        mensagemErro = criarMsgErro();
        mensagemErro.classList.add('mensagem-erro'); 
    }

    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('erro');
        mensagemErro.innerText = 'Email inválido';

        if (!emailInput.parentNode.contains(mensagemErro)) {
            emailInput.parentNode.appendChild(mensagemErro);
        }
    } else {
        emailInput.classList.remove('erro');

        if (mensagemErro.parentNode) {
            mensagemErro.remove();
        }
    }
}

function validarSenha() {
    let mensagemErro = criarMsgErro(); 
    let senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // Verifica se a senha atende ao padrão da regex
    if (!senhaRegex.test(senhaInput.value)) {
        senhaInput.classList.add('erro');
        mensagemErro.classList.add('mensagem-erro'); 
        mensagemErro.innerText = 'Mínimo de caracteres = 8, deve conter número, pontuação e letras';
        
        if (!senhaInput.parentNode.querySelector('.mensagem-erro')) {
            senhaInput.parentNode.appendChild(mensagemErro);
        }
    } else {
        senhaInput.classList.remove('erro');
        
        let erro = senhaInput.parentNode.querySelector('.mensagem-erro');
        if (erro) {
            erro.remove();
        }
    }
}

function validarTelefone(){
    let mensagemErro = criarMsgErro();
    let telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/

    if(!telefoneRegex.test(telefoneInput.value)){
        telefoneInput.classList.add('erro');
        mensagemErro.classList.add('mensagem-erro');
        mensagemErro.innerText = 'Telefone inválido';

        if(!telefoneInput.parentNode.querySelector('.mensagem-erro')){
            telefoneInput.parentNode.appendChild(mensagemErro);
        }
    } else {
        telefoneInput.classList.remove('erro');

        let erro = telefoneInput.parentNode.querySelector('.mensagem-erro');
        if(erro){
            erro.remove();
        }
    }
}

function validarCidade(){
    let mensagemErro = cidadeInput.parentNode.querySelector('.mensagem-erro');

    if (!mensagemErro) {
        mensagemErro = criarMsgErro();
        mensagemErro.classList.add('mensagem-erro'); 
    }

    if (cidadeInput.value === '') {  // Corrigido o operador de comparação
        cidadeInput.classList.add('erro');
        mensagemErro.innerText = 'Campo vazio';

        if (!cidadeInput.parentNode.contains(mensagemErro)) {
            cidadeInput.parentNode.appendChild(mensagemErro);
        }
    } else {
        cidadeInput.classList.remove('erro');

        if (mensagemErro.parentNode) {
            mensagemErro.remove();
        }
    }
}

function validarEstado(){
    let mensagemErro = estadoInput.parentNode.querySelector('.mensagem-erro');

    if (!mensagemErro) {
        mensagemErro = criarMsgErro();
        mensagemErro.classList.add('mensagem-erro'); 
    }

    if (estadoInput.value === '') {  // Corrigido o operador de comparação
        estadoInput.classList.add('erro');
        mensagemErro.innerText = 'Campo vazio';

        if (!estadoInput.parentNode.contains(mensagemErro)) {
            estadoInput.parentNode.appendChild(mensagemErro);
        }
    } else {
        estadoInput.classList.remove('erro');

        if (mensagemErro.parentNode) {
            mensagemErro.remove();
        }
    }
}