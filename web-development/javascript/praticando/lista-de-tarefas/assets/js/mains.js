const inputTarefa = document.querySelector('.input-tarefa');
const btnAdicionar = document.querySelector('.btn-adicionar');
const tarefas = document.querySelector('.tarefas');

function criaTarefa(conteudoTarefa) {
    const tarefaCompleta = ˋ
    <tr class="tarefa">
        <td class="tarefa-texto">${conteudoTarefa}</td>
        <td><button class="btn-apagar">Apagar</button></td>
    </tr>
    ˋ;
    limpaInput();
    return tarefaCompleta;
}
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}
function adicionaTarefa(tarefaCompleta) {
    tarefas.innerHTML += tarefaCompleta;
}
function salvaTarefa() {
    const tarefas = document.querySelectorAll('.tarefa');
    const listaDeTarefas = [];

    for(let tarefa of tarefas) {
        const tarefaCompleta = tarefa.querySelector('.tarefa-texto');
        const textoTarefa = tarefaCompleta.innerText;
        listaDeTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}
btnAdicionar.addEventListener('click', (event) => {
    event.preventDefault();
    if (!inputTarefa.value) return;
    adicionaTarefa(criaTarefa(inputTarefa.value));
    salvaTarefa();
});
document.addEventListener('click', (event) => {
    const elemento = event.target;
    if(elemento.classList.contains('btn-apagar')) {
        elemento.parentElement.parentElement.remove();
        salvaTarefa();
    };
});
function tarefasSalvas() {
    const tarefasJSON = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefasJSON);
    for(let tarefa of listaDeTarefas) {
        adicionaTarefa(criaTarefa(tarefa));
    }
}
tarefasSalvas();