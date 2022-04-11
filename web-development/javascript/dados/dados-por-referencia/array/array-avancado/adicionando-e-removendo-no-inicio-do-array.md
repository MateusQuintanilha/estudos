# Adicionando e removendo elementos no início de um array

## Adicionando elementos no início de um array

Utilizamos o método `unshift()` para adicionar um ou mais elementos ao início de um array da seguinte forma:

```js
nomeDoArray.unshift(valor);
```

> **valor** é o elemento que desejamos adicionar  no inicio do array, se caso for passar mais de um elemento, separe eles com uma vírgula `(,)`.

Para este exemplo iremos utilizar um array com modelos de carros.

```js
let carros = ['Gol', 'Opala', 'Uno'];
carros.unshift('Monza', 'Chevette');

console.log(carros); // saída: ['Monza', 'Chevette', 'Gol', 'Opala', 'Uno']
```

Como podemos ver na saída, os valores `'Monza'` e `'Chevette'` foram adicionados ao início do array.

se atribuirmos uma variável a essa declaração também irá retornar a quantidade de elementos no array.

```js
let carros = ['Gol', 'Opala', 'Uno'];
let resultado = carros.unshift('Monza', 'Chevette');

console.log(carros); // saída: ['Monza', 'Chevette', 'Gol', 'Opala', 'Uno']
console.log(resultado) // saída: 5
```
