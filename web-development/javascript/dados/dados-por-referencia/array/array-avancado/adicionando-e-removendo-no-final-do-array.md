# Adicionando e Removendo elementos no final de um array

## Adicionando elementos no final de um array

Utilizamos o método `push()` para adicionar um ou mais elementos ao final de um array.

```js
nomeDoArray.push(valor);
```

> **valor** é o elemento que desejamos adicionar  no inicio do array, se caso for passar mais de um elemento, separe eles com uma vírgula `(,)`.

Nesse exemplo iremos utilizar o array sorvetes para armazenar os nomes de alguns tipos de sorvetes.

```js
let sorvetes = ['Morango', 'Chocolate', 'Limão'];
sorvetes.push('Frutas Vermelhas', 'Ninho Trufado');

console.log(sorvetes); // saída: ['Morango', 'Chocolate', 'Limão', 'Flocos', 'Ninho']
```

Como podemos ver na saída, os valores `'Flocos'` e `'Ninho'` foram adicionados ao final do array.

## Removendo o ultimo elemento de um array

Também podemos remover o último elemento de um array. Para isso, utilizamos o método `pop()`. Além de excluir o elemento, ele retorna o item excluído, caso o valor seja atribuído a uma variável ou constante.

Vamos continuar utilizando o array do exemplo anterior como exemplo

```js
let legumes = ['Abóbora', 'Beterraba', 'Chuchu', 'Inhame'];
legumes.pop();

console.log(legumes); // saída: [ 'Abóbora', 'Beterraba', 'Chuchu' ]
```

Como podemos ver, o último elemento foi excluído, além disso, o método retorna o elemento excluído, caos o valor seja atribuído a uam variável ou constante.

```js
let itemExcluido = legumes.pop();

console.log(legumes); // saída: [ 'Abóbora', 'Beterraba', 'Chuchu' ]
console.log(itemExcluido); // saída: 'Inhame'
```
