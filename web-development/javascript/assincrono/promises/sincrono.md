# Promise Síncrono

```js
// Função que gerá um valor aleatório  entre 1000 e 4000
function rand(min = 1000, max = 4000) {
    return Math.floor(Math.random() * (max - min) + min);
}

function criaPromessa(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg === 'number') reject(msg);
            resolve(msg);
        }, rand());
    });  
}

criaPromessa('Promessa 01')
    .then( resposta => {
        console.log(resposta);
        return criaPromessa('Promessa 02');
    })
    .then( resposta => {
        console.log(resposta);
        return criaPromessa('Promessa 03');
    })
    .then( resposta => {
        console.log(resposta);
        return criaPromessa('Promessa 04');
    })
    .then( resposta => {
        console.log(resposta);
        return criaPromessa('Promessa 05');
    })
    .then( resposta => {
        console.log(resposta);
        return criaPromessa('Promessa 06');
    })
    .then( resposta => {
        console.log(resposta);
        return criaPromessa('Promessa 07');
    })
    .then( resposta => {
        console.log(resposta); 
    })
    .catch();

/* Saída:
    Promessa 01
    Promessa 02
    Promessa 03
    Promessa 04
    Promessa 05
    Promessa 06
    Promessa 07
*/
```
