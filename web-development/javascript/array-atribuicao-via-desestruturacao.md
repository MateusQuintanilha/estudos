# Atribuição via desestruturação (Arrays)

## Introdução a atribuição via desestruturação em array

Imagine que possuímos um array com alguns números e precisamos separar cada valor desse array em uma variável. Podemos obter cada valor individual dessa forma:

```js
let valores = [100, 150, 200, 250, 300];

let valorA = valores[0];
let valorB = valores[1];
let valorC = valores[2];
let valorD = valores[3];
let valorE = valores[4];

console.log(valorA, valorB, valorC, valorD, valorE); // saída: 100 150 200 250 300
```

Mas essa forma tem um 'problema', ele é muito comprido e possui muito código repetido, podemos fazer a atribuição via desestruturação para encurtar esse código da seguinte forma:

```js
let valores = [100, 150, 200, 250, 300];

let [valorA, valorB, valorC, valorD, valorE] = valores;

console.log(valorA, valorB, valorC, valorD, valorE); // saída: 100 150 200 250 300
```

Adicionamos colchetes nos nomes como se fosse um array (mas nesse caso o array não é criado) e adicionamos os nomes que queremos dar a cada elemento em cada posição do index do array que contem os valores.

### O que acontece caso a atribuição via desestruturação possua mais elementos que nomes?

Se o array possuir mais elementos que nomes, os elementos que não possuírem nomes serão descartados:

```js
let valores = [100, 150, 200, 250, 300];

let [valorA, valorB] = valores;

console.log(valorA, valorB); // saída: 100 150
```

### O que acontece caso a atribuição via desestruturação possua mais nomes que elementos?

Caso tente adicionar mais nomes que  elementos possuídos no array atribuído os nomes restantes retornarão `undefined`, como podemos ver no exemplo abaixo:

```js
let valores = [100, 150, 200];

let [valorA, valorB, valorC, valorD, valorE] = valores;

console.log(valorA, valorB, valorC, valorD, valorE); // saída: 100 150 200 undefined undefined
```

### Adicionando valores padrões nos nomes das variáveis

Podemos adicionar valores padrões no momento em que adicionamos os nomes das variáveis, só precisamos atribuir o valor desejado a cada nome de variável, como podemos ver abaixo:

```js
let valores = [100, 150, 200];

let [valorA = 10, valorB = 15, valorC = 20, valorD = 25, valorE = 30, valorF = 35] = valores;

console.log(valorA, valorB, valorC, valorD, valorE, valorF); // saída: 100 150 200 25 30 35
```
