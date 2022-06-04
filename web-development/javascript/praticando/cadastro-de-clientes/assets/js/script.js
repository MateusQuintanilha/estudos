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
