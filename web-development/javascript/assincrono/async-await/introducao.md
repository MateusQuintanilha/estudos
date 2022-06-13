# Async/Await

As palavras-chave `async` e `await` facilitam o fluxo de escrita e leitura de um código assíncrono, permitindo a escrita de um código assíncrono que se parece com um síncrono.

## Async

podemos usar a palavra-chave `async` antes do nome da função para criar uma função Assíncrona.

Sintaxe:

```js
async function myFunction() {
    return 1;
}
```

Uma função async sempre retorna uma promessa. Outros valores são agrupados em uma promessa resolvida automaticamente.

Por exemplo, esta função retorna uma promessa resolvida com o resultado de 1; vamos testar:

```js
async function myFunction() {
    return 1;
}

myFunction().then(console.log); // saída: 1
```

Também podemos retornar uma promessa explicitamente, que seria assim:

```js
async function myFunction() {
    return Promise.resolve(1);
}

myFunction().then(console.log); // saída: 1
```

Portanto, `async` garante que a função retorne uma promessa. Mas não é só isso. Há outra palavra-chave que veremos a seguir.

