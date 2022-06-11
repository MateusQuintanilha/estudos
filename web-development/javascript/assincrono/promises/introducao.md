# Promises

`Promise` é uma função construtora de promessas. Existem dois resultado possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se  o segundo argumento for ativado.

Sintaxe:

```js
new Promise((resolve: Function, reject: Function) => {})
```

* `resolve`: Função para retornar o resultado da promise.
* `reject`: Função para retornar o erro da promise.

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

* `Pending`: Estado inicial, assim que o Objeto da promessa é iniciado
* `Fulfilled`: A promessa foi concluída com sucesso
* `Rejected`: A promessa foi rejeitada, houve um erro
* `Settled`: Seja com sucesso ou com erro, ela foi finalmente concluída

## Métodos

### Promise.all(lista)

O método `Promise.all` recebe um iterável (como um array) de promessas e, um a vez que todas as promessas tenham sido resolvidas, retorna um novo array com os valores da resolução das promessas na ordem em que foi passada. Mas caso uma dessas promessas falhar, o `Promise.all` fará um "curto circuito", de modo que rejeitará todas as outras promessas.
