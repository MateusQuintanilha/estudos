# Promises

`Promise` é uma função construtora de promessas. Existem dois resultado possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se  o segundo argumento for ativado.

Exemplo

```js
const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
        resolve();
    } else {
        reject();
    }
});

console.log(promessa); // saída: Promise { undefined }
```
