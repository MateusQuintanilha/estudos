const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active')
};

// localStorage
const nameDataBase = 'db_client';
const getLocalStorage = () => JSON.parse(localStorage.getItem(nameDataBase)) ?? [];
const setLocalStorage = (contentDB) => localStorage.setItem(nameDataBase, JSON.stringify(contentDB));

// Events
document.getElementById('new-client')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

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