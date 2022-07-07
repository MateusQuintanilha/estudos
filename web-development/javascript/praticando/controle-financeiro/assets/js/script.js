function transaction() {
    const description = document.getElementById('register-description').value;
    const value = document.getElementById('register-value').value;
    const type = verifyCheckedRadio();

    return { description, value, type }
}

function verifyCheckedRadio() {
    const radios = document.getElementsByName('group-type');
    for(var i = 0; i < radios.length; i++) {
            if(radios[i].checked) {
                return radios[i].value;
            }
    }
}

function imageTransaction(type) {
    if(type === 'entry') return `<img src="assets/img/icons/icon-entrada.svg" alt="">`
    if(type === 'out') return `<img src="assets/img/icons/icon-saida.svg" alt="">`
}

function createTableRow(transaction) {
    const tBody = document.getElementById('table-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <tr>
        <td>${transaction.description}</td>
        <td class="deposit">R$ ${transaction.value}</td>
        <td>${imageTransaction(transaction.type)}</td>
        <td>Excluir</td>
    </tr>
    `;
    tBody.appendChild(tr);
}

function updateTable() {
    const newTransaction = transaction();
    createTableRow(newTransaction);
}

const clearFields = () => document.getElementById('form-register').reset();
const isValidFields = () => document.getElementById('form-register').reportValidity();

// Events
document.getElementById('btn-addMoney').addEventListener('click', event => {
    event.preventDefault();
    if(!isValidFields()) return;
    updateTable();
    clearFields();
})