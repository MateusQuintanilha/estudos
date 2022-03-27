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

    for (const tarefa of tarefas) {
        const tarefaCompleta = tarefa.querySelector('.tarefa-texto');
        const textoTarefa = tarefaCompleta.innerText;
        listaDeTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}