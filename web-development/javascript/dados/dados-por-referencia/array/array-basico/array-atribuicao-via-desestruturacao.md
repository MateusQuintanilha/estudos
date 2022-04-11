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

## Pegando o resto dos elementos usando o Rest (...)

Podemos pegar o restante dos elementos que seriam descartados e criar um novo array usando o rest (repouso) que é representado por 3 pontos (...), observe o exemplo a seguir:

```js
let valores = [100, 150, 200, 250, 300];

let [valorA, valorB, ...valoresRestantes] = valores;

console.log(valorA, valorB, valoresRestantes); // saída: 100 150 [ 200, 250, 300 ]
```

As variáveis `valorA` e `valorB` recebem os dois primeiros elementos do array. Já a variável após os 3 pontos (...) que nesse caso é a variável `valoresRestantes` recebe um array com todos os elementos restantes.

## Pulando alguns valores

Caso queira ignorar algum elemento basta adicionar um espaço vazio no nome e adicionar o próximo nome em seguida.

Vamos ignorar os valores 150 e 250.

```js
let valores = [100, 150, 200, 250, 300];

let [valorA, , valorC, , valorE] = valores;

console.log(valorA, valorC, valorE); // saída: 100 200 300
```

Como podemos ver, nos elementos que adicionamos o espaço em branco foi pulado.
