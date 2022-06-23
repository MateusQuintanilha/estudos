# Promise.all(lista)

O método `Promise.all` recebe um iterável (como um array) de promessas e, um a vez que todas as promessas tenham sido resolvidas, retorna um novo array com os valores da resolução das promessas na ordem em que foi passada. Mas caso uma dessas promessas falhar, o `Promise.all` fará um "curto circuito", de modo que rejeitará todas as outras promessas.

## Promise.all com todas as promessas resolvidas

Vamos criar um array com 3 promessas resolvidas que irão retornar os números de 1 a 3, em seguida vamos passar esse array para o método `Promise.all` e usar o then para pegar os valores resolvidos e catch para pegar os Erros.

```js
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
];

Promise.all(promises)
    .then((list) => {
        console.log('Result:');
        console.log(list);
    })
    .catch((error) => {
        console.log('Error:');
        console.log(error);
    });

// Saída: Result: [ 1, 2, 3 ]
```

## Promise.all com uma das promessas rejeitada

Vamos usar o mesmo exemplo anterior mas vamos alterar a segunda promessa do array de `resolve` para `reject` e vamos passar a seguinte frase: "Eu vou falhar e arruinar tudo."

```js
const promises = [
    Promise.resolve(1),
    Promise.reject('Eu vou falhar e arruinar tudo.'),
    Promise.resolve(3),
];

Promise.all(promises)
    .then((list) => {
        console.log('Result:');
        console.log(list);
    })
    .catch((error) => {
        console.log('Error:');
        console.log(error);
    });

// Saída: Error: Eu vou falhar e arruinar tudo.
```
