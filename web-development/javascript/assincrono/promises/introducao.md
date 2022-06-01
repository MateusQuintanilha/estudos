# Promises

`Promise` é uma função construtora de promessas. Existem dois resultado possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se  o segundo argumento for ativado.

## Estágios de uma Promise

Uma Promise poderá ser:

* `Pending`: Estado inicial, assim que o Objeto da promessa é iniciado
* `Fulfilled`: A promessa foi concluída com sucesso
* `Rejected`: A promessa foi rejeitada, houve um erro
* `Settled`: Seja com sucesso ou com erro, ela foi finalmente concluída

Sintaxe:

```js
new Promise((resolve, reject) => {})
```

## Criando uma Promise

```js
console.log('Pedir uber');
const corrida = false;
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
