# Promise.resolve(valor)

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
    });
    
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
    .catch(error => console.log(error));
```
