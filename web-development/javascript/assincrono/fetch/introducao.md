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

Perceba que usando o `XMLHttpRequest` deu um código muito maior e também mais complexo, isso porque só fizemos uma requisição bem simples usando `GET`. O `Fetch` foi criado para simplificar isso, deixando a requisição `HTTP` mais simples, como foi possível ver no Exemplo de requisição usando `Fetch API`.

Agora vamos ver como o método `fetch` funciona:

## Entendendo o método `fetch`

O método `fetch()` está disponível no escopo global, ele é responsável por iniciar o processo de requisição `HTTP` para buscar recursos sem a necessidade de reiniciar a página, retornando uma promessa que é cumprida assim que a resposta estiver disponível.

***Nota:O parâmetros do `fetch()` são idênticos aos do construtor `Request()`***