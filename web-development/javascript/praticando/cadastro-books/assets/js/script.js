// Book
function Book() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const language = document.getElementById('language').value;

    return {title, author, language};
}

// localStorage
const nameDB = 'book_db';
const getLocalStorage = () => JSON.parse(localStorage.getItem(nameDB)) ?? [];
const setLocalStorage = (bookDB) => localStorage.setItem(nameDB, JSON.stringify(bookDB));

// CRUD
const createRegisterBook = (book) => {
    const bookDB = getLocalStorage();
    bookDB.push(book);
    setLocalStorage(bookDB);
}

const readRegisterBook = () => JSON.parse(localStorage.getItem(nameDB));

const updateRegisterBook = (index, book) => {
    const bookDB = getLocalStorage();
    bookDB[index] = book;
    setLocalStorage(bookDB);
}

const deleteRegisterBook = (index) => {
    const bookDB = getLocalStorage();
    bookDB.splice(index, 1);
    setLocalStorage(bookDB);
}

// Actions
const createTableRow = (book, index, tbody) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.language}</td>
        <td>
            <button type="button" id="edit-${index}">Editar</button>
            <button type="button" id="delete-${index}">Deletar</button>
        </td>
    `;
    tbody.appendChild(tr);
};

const updateTable = () => {
    const tbody = document.getElementById('book-tbody');
    tbody.innerHTML = '';

    const bookDB = getLocalStorage();
    bookDB.forEach((book, index) => createTableRow(book,index, tbody));
};

const clearFields = () => document.getElementById('book-register').reset();

const saveBook = () => {
    const isValidFields = document.getElementById('book-register').reportValidity();
    if (!isValidFields) return;
    createRegisterBook(Book());
    clearFields();
    updateTable();
};

const editField = (event) => {
    const element = event.target;
    if(element.type !== 'button') return;

    const [action, index] = element.id.split('-');
    if(action === 'edit') console.log('editar');
    if(action === 'delete') {
        const bookDB = getLocalStorage();
        const response = confirm(`Você realmente deseja excluir o livro: ${bookDB[index].title}?`);
        if(!response) return;
        deleteRegisterBook(index);
        updateTable();
    }
};
