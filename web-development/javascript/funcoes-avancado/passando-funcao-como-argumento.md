# Passando uma função como argumento de outra função

Podemos passar uma função como argumento para outra função, como podemos ver no exemplo abaixo:

```js
let soma = function(valorA, valorB) {
  return valorA + valorB;
};

let mediaNotas = function (notaA, notaB, fn) {
  return fn(notaA, notaB) / 2;
};

const resultado = mediaNotas(10, 7.5, soma);

console.log(resultado);
```
