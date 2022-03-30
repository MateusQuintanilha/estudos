# Funções de Expressão (Function Expression)

As funções são objetos de primeira classe (First-class objects), ou seja, uma função pode ser tratada como um dado. Então podemos usar uma função como valor de uma variável.

Para fazer isso vamos criar uma variável e atribuir uma função a ela, normalmente criamos uma função anonima (uma função sem nome), mas também podemos dar um nome a ela.

Exemplo:

```js
const soma = function(valorA, valorB) {
  return valorA + valorB;
};
```
