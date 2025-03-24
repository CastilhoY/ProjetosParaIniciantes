let numeroAleatorio = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const mensagem = document.getElementById("mensagem");

mensagem.textContent = "Adivinhe um número de 1 a 100";

document.getElementById("enviar").addEventListener("click", verificarNumero);

function verificarNumero() {
    const input = parseInt(document.getElementById("numero").value); 

    if (input > numeroAleatorio) {
        mensagem.textContent = "O número secreto é menor";
    }

    if (input < numeroAleatorio) {
        mensagem.textContent = "O número secreto é maior";
    }

    if (input === numeroAleatorio) {
        mensagem.textContent = "Parabéns, você acertou!";
    }

    document.getElementById("numero").value = "";
};

document.getElementById("numero").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarNumero();
    }
});


document.getElementById("mudar").addEventListener("click", mudarNumero);

function mudarNumero(){
    numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    mensagem.textContent = "Novo número gerado";
    document.getElementById("numero").value = "";
}