let numero = document.getElementById('numero');
let somar = document.getElementById('somar');
let subtrair = document.getElementById('subtrair');

somar.addEventListener('click', soma);
subtrair.addEventListener('click', subtrairValor);

function soma() {
    let novoValor = parseInt(numero.textContent) + 1;
    numero.textContent = novoValor;  
}

function subtrairValor() {
    let novoValor = parseInt(numero.textContent) - 1;
    numero.textContent = novoValor;
}