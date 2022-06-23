# Promise.race(lista)

O método `Promise.race` recebe um iterável (como um array) de promessas e retorna a primeira delas que for resolvida ou rejeitada com o valor ou razão daquela promessa.

```js
// Função que retorna um valor aleatório que por padrão vai de 1000 a 5000
function rand(min = 1, max = 5) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Função que retorna uma promise com um atraso de execução que pode variar de 1s a 5s.
function promessaComTempo(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg != 'number') reject(msg);
            resolve(msg);
        }, rand());
    });  
}

const promises = [
    promessaComTempo(1),
    promessaComTempo('Eu vou falhar e arruinar tudo.'),
    promessaComTempo(3)
];

Promise.race(promises)
    .then((list) => {
        console.log('Result:');
        console.log(list);
    })
    .catch((error) => {
        console.log('Error:');
        console.log(error);
    });
```
