// Book
function Book() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const language = document.getElementById('language').value;

    return {title, author, language};
}
