# Adicionando e Removendo elementos em uma posição específica de um Array

## Adicionando um elemento em uma posição específica de um array

Também podemos utilizar o método `splice()`  para adicionar um ou mais elementos em um array passando três ou mais argumentos.

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
motos.splice(2,0, 'Hayabusa', 'Falcon');

console.log(motos); // saída: [ 'CG 160', 'Biz 125', 'Hayabusa', 'Falcon', 'Ténéré 700' ]
```

Também podemos remover elementos ao mesmo tempo em que adicionamos, pois ele primeiro remove os elementos desejados e depois adiciona os novos.

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
let itensExcluidos = motos.splice(1,1, 'Hayabusa', 'Falcon');

console.log(motos); // saída: [ 'CG 160', 'Hayabusa', 'Falcon', 'Ténéré 700' ]
console.log(itensExcluidos); // saída: [ 'Biz 125' ]
```