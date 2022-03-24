const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');

for(i = 0; i < elements.length; i++) {
    const {tag, texto} = elements[i];
    const elemento = document.createElement(tag);
    elemento.innerText = texto;
    container.appendChild(elemento)
}
