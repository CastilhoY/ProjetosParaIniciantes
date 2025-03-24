const luzVermelha = document.getElementById("ver");
const luzAmarela = document.getElementById("amar");
const luzVerde = document.getElementById("verd");

let estado = 0;
let intervalo = 2000; // Tempo padrão de 2 segundos

function mudarSemaforo() {
  // Apaga todas as luzes antes de acender a correta
  luzVermelha.style.color = "black";
  luzAmarela.style.color = "black";
  luzVerde.style.color = "black";

  // Acende a luz correspondente ao estado
  if (estado === 0) {
    luzVermelha.style.color = "red";
    intervalo = 3000; // Vermelho por 2 segundos
  } else if (estado === 1) {
    luzVerde.style.color = "green";
    intervalo = 3000; // Verde por 2 segundos
  } else {
    luzAmarela.style.color = "yellow";
    intervalo = 1000; // Amarelo por 1 segundo
  }

  // Atualiza o estado para a próxima cor
  estado = (estado + 1) % 3;

  // Reinicia o setTimeout com o novo tempo
  setTimeout(mudarSemaforo, intervalo);
}

// Inicia o semáforo
mudarSemaforo();