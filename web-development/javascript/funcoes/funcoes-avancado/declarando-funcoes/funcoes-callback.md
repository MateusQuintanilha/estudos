# Função Callback

Uma função callback é uma função que é passada como argumento para outra função, que então é inicializada dentro da função externa para completar algum tipo de rotina ou ação.

Exemplo:

```js
function frutas(callback) {
    callback();
}

frutas(
    () => {
        console.log('Morango');
    }
); // saída: Morango
```

Outro Exemplo:

```js
function mensagem(name) {
    console.log('Olá '+ name);
}

function myName(qualquerNome) {
    let name = 'mateus';
    qualquerNome(name);
}

myName(mensagem); // saída: Olá mateus
```
