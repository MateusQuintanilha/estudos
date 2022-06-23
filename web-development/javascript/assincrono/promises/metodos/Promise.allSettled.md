# Promise.allSettled(lista)

O método `Promise.allSettled` assim como o `Promise.all`, também recebe um iterável (como um array) de promessas e espera que todas sejam resolvidas. A principal diferença é que irá retornar um array de objetos, descrevendo o resultado de cada uma das promessas. Esse objeto possui duas propriedades:

* `Status`: Indica o resultado da promessa e pode assumir dois valores:
  * `fulfilled`(atendida): no caso de promessa ser resolvida.
  * `reject`(rejeitada): no caso da promessa ser rejeitada.
* `value`: O valor do resultado da promessa.

Portando, o método `Promise.allSettled` irá retornar o resultado das promessas somente após todas as promessas passadas terem sido resolvidas ou rejeitadas. Diferente do método `Promise.all` que se houver uma promessa rejeitada irá gerar um "curto circuito", o método `Promise.allSettled` irá retornar a resolução de todas as promessas  junto com a informação se ela foi resolvida ou rejeitada.

## Exemplo do método Promise.allSettled

```js
const promises = [
    Promise.resolve(1),
    Promise.reject('Eu vou falhar e arruinar tudo.'),
    Promise.resolve(3),
];

Promise.allSettled(promises)
    .then((list) => {
        console.log('Result:');
        console.log(list);
    })
    .catch((error) => {
        console.log('Error:');
        console.log(error);
    });

/* Saída: Result:
        [
            { status: 'fulfilled', value: 1 },
            { status: 'rejected', reason: 'Eu vou falhar e arruinar tudo.' },
            { status: 'fulfilled', value: 3 }
        ]
*/
```
