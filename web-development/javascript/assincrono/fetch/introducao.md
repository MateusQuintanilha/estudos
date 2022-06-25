# Fetch API

A fetch API é uma interface para a execução de requisições `HTTP` através de `promises`. Anteriormente as requisições `HTTP` eram feitas através do `XMLHttpRequest`. Vamos fazer a comparação da mesma requisição sendo feita em ambas as APIs:

Exemplo de requisição usando `XMLHttpRequest`:

```js
const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

request.addEventListener('load', () => {
    const response = JSON.parse(request.responseText);
    console.log(response.id);
})

request.onerror = function () {
    console.log('erro ao executar a requisição')
}
request.send();

// saída: 1
```

Exemplo de requisição usando `Fetch API`:

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(post => console.log(post.id))
.catch(() => console.log('erro ao executar a requisição'));

// saída: 1
```