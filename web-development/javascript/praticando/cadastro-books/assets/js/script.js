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