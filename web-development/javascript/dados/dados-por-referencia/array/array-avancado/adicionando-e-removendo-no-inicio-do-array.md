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

## Removendo o primeiro elemento de um array

Para remover o primeiro item de um array iremos utilizar o método `shift()`. Além de excluir o elemento, ele retorna o item excluído, caso o valor seja atribuído a uma variável ou constante.

Vamos criar um array com o nome de legumes que irá conter alguns nomes de legumes.

```js
let legumes = ['Abóbora', 'Beterraba', 'Chuchu', 'Inhame'];
legumes.shift();

console.log(legumes); // saída: [ 'Beterraba', 'Chuchu', 'Inhame' ]
```

Como podemos ver, o primeiro elemento que  contém a 'Abóbora' foi removido, agora vamos atribuir o `legumes.shift();` a uma variável com o nome de `itemExcluido` que irá receber o elemento excluído.

```js
let legumes = ['Abóbora', 'Beterraba', 'Chuchu', 'Inhame'];
let itemExcluido = legumes.shift();

console.log(legumes); // saída: [ 'Beterraba', 'Chuchu', 'Inhame' ]
console.log(itemExcluido); // saída: 'Abóbora'
```
