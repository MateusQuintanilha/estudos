# Promises

uma `Promise` é um objeto que representa o sucesso ou a falha de uma operação assíncrona

Sintaxe:

```js
new Promise((resolve: Function, reject: Function) => {})
```

* `resolve`: Função para retornar o resultado bem sucedido de uma promise.
* `reject`: Função para retornar a falha de uma promise.

## Criando uma Promise

```js
console.log('Pedir Uber');

const corrida = false; // 

const promessa = new Promise((resolve, reject) => {
    if(corrida) return resolve('Carro chegou');
    return reject('Pedido negado!');
});

console.log('Aguardando')

promessa
.then( result => console.log(result))
.catch( error => console.log(error))
.finally( () => console.log('Finalizado'));
```

## Estágios em que uma Promise poderá estar

Uma Promise poderá ser:

* `Pending`(pendente): Estado inicial, assim que o Objeto da promessa é iniciado
* `Fulfilled`(atendida): A promessa foi concluída com sucesso
* `Rejected`(rejeitada): A promessa foi rejeitada, houve um erro
* `Settled`(resolvida): Seja com sucesso ou com erro, ela foi finalmente concluída
