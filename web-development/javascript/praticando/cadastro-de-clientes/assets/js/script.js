const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active')
};

// localStorage
const nameDataBase = 'db_client';
const getLocalStorage = () => JSON.parse(localStorage.getItem(nameDataBase)) ?? [];
const setLocalStorage = (contentDB) => localStorage.setItem(nameDataBase, JSON.stringify(contentDB));

// CRUD - create read update delete
const createClient = (client) => {
    const clientDB = getLocalStorage();
    clientDB.push(client);
    setLocalStorage(clientDB);
}

const readClient = () => getLocalStorage();

const updateClient = (index, client) => {
    const clientDB = getLocalStorage();
    clientDB[index] = client;
    setLocalStorage(clientDB);
}

const deleteClient = (index) => {
    const clientDB = getLocalStorage();
    clientDB.splice(index, 1);
    setLocalStorage(clientDB);
};

// Form Client
const isValidFields = () => document.getElementById('client-form').reportValidity();

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = "");
};

const saveClient = () => {
    if (!isValidFields()) return;
    const client = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        city: document.getElementById('city').value
    }
    createClient(client);
    updateTable();
    clearFields();
};

const createRow = (client, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.tel}</td>
        <td>${client.city}</td>
        <td>
            <button type="button" class="edit" id="edit-${index}">Editar</button>
            <button type="button" button class="del" id="delete-${index}">Excluir</button>
        </td>
    `;
    document.querySelector('#table-client>tbody').appendChild(newRow);
};

const clearTable = () => {
    const rows = document.querySelectorAll('#table-client>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
};

const updateTable = () => {
    const clientDB = readClient();
    clearTable();
    clientDB.forEach(createRow);
}

const fillFields = (client) => {
    document.getElementById('name'). value = client.name;
    document.getElementById('email'). value = client.email;
    document.getElementById('tel'). value = client.tel;
    document.getElementById('city'). value = client.city;
};

const editClient = (index) => {
    const client = readClient()[index];
    fillFields(client);
    openModal();
};

updateTable();

// Events
document.getElementById('new-client')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('save')
    .addEventListener('click', saveClient);

document.getElementById('cancel')
    .addEventListener('click', clearFields);