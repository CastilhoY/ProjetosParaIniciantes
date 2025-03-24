let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        addTarefa(); // Chama a função para adicionar a tarefa
    }
});

function addTarefa() {

    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="itemIcone">
                <span id="icone_${contador}"class="material-icons"> radio_button_unchecked </span>
            </div>
            <div onclick="marcarTarefa(${contador})" class="itemNome">
                ${valorInput}
            </div>
            <div class="itemBotao">
                <button onclick="deletar(${contador})" class="delete"><span class="material-icons">delete</span> Deletar </button>
            </div>
        </div>`;
           
        main.innerHTML += novoItem; 
        input.value = "";
        input.focus();
    }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var icone = document.getElementById('icone_' + id); 

    if (!item.classList.contains('clicado')) { 
        item.classList.add('clicado');

        icone.textContent = 'check_circle'; 

        item.parentNode.appendChild(item); 
    } else {
        item.classList.remove('clicado');

        icone.textContent = 'radio_button_unchecked'; 
    }
}
 