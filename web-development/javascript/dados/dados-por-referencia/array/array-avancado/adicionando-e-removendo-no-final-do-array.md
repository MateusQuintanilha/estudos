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