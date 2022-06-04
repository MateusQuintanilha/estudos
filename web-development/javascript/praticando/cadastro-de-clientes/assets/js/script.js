const modal = document.getElementById('modal');

document.getElementById('new-client')
    .addEventListener('click', () => modal.classList.add('active'));

document.getElementById('modalClose')
    .addEventListener('click', () => modal.classList.remove('active'));