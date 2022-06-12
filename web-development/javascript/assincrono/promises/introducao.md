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


#### Promise.all com todas as promessas resolvidas

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

#### Promise.all com uma das promessas rejeitada

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

### Promise.allSettled(lista)

O método `Promise.allSettled` assim como o `Promise.all`, também recebe um iterável (como um array) de promessas e espera que todas sejam resolvidas. A principal diferença é que irá retornar um array de objetos, descrevendo o resultado de cada uma das promessas. Esse objeto possui duas propriedades:

* `Status`: Indica o resultado da promessa e pode assumir dois valores:
  * `fulfilled`: no caso de promessa ser resolvida.
  * `reject`: no caso da promessa ser rejeitada.
* `value`: O valor do resultado da promessa.

Portando, o método `Promise.allSettled` irá retornar o resultado das promessas somente após todas as promessas passadas terem sido resolvidas ou rejeitadas. Diferente do método `Promise.all` que se houver uma promessa rejeitada irá gerar um "curto circuito", o método `Promise.allSettled` irá retornar a resolução de todas as promessas  junto com a informação se ela foi resolvida ou rejeitada.

#### Exemplo do método Promise.allSettled

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

### Promise.race(lista)

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
    }
    );
    
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

### Promise.reject(motivo)

O método `Promise.reject` retorna a rejeição de uma promessa e o seu motivo para ser rejeitada.

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
            if(typeof msg === 'number') reject(msg);
            resolve(msg);
        }, rand());
    }
    );
    
}

function baixarPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve(new Error('Página em cache'));
    } else {
        return promessaComTempo('Download da página finalizado');
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    . catch(error => console.log(error));
```

### Promise.resolve(valor)

O método `Promise.resolve` retorna uma promessa resolvida com o valor passado.

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
            if(typeof msg === 'number') reject(msg);
            resolve(msg);
        }, rand());
    }
    );
    
}

function baixarPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return promessaComTempo('Download da página finalizado');
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    . catch(error => console.log(error));
```
