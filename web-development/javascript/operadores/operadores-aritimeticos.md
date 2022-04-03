# Operadores Aritméticos

Os operadores aritméticos são utilizados para fazer cálculos simples.

## `+` Adição/soma

O operador de adição `+` retorna o valor do primeiro número, somado ao segundo.

Exemplos:

```js
let calculo01 = 2 + 5; // saída: 7
let calculo02 = 4 + 6; // saída: 10
let calculo03 = 2 + 18; // saída: 20
```

## `-` Subtração

O operador de subtração `-` retorna o valor do primeiro número menos o segundo.

Exemplos:

```js
let calculo01 = 10 - 2; // saída: 8
let calculo02 = 10 - 15; // saída: -5
let calculo03 = 18 - 2; // saída: 16
```

## `*` Multiplicação

O operador de multiplicação `*` retorna o valor do primeiro número vezes o segundo.

Exemplos:

```js
let calculo01 = 3 * 3; // saída: 9
let calculo02 = 3 * 5; // saída: 15
let calculo03 = 10 * 10; // saída: 100
```

## `/` Divisão

O operador de divisão `/` retorna o valor do primeiro número dividido pelo segundo.

Exemplos:

```js
let calculo01 = 10 / 2; // saída: 5
let calculo02 = 30 / 6; // saída: 5
let calculo03 = 21 / 2; // saída: 10.5
```

## `**` Expoente

O operador de exponenciação `**` retorna o valor do primeiro número, elevado ao segundo.

Exemplos:

```js
let calculo01 = 4 ** 4; // saída: 16
let calculo02 = 5 ** 2; // saída: 25
let calculo03 = 10 ** 4; // saída: 10000
```

## `%` Módulo

O operador de módulo `%` retorna o resto da divisão de dois números.

Exemplos:

```js
let calculo01 = 72 % 3; // saída: 0
let calculo02 = 15 % 2; // saída: 1
let calculo03 = 10 % 4; // saída: 2
```

Caso não tenha entendido, vamos a outro exemplo:

Temos 29 maçãs para dividir para 2 pessoas, quantas maçãs cada pessoa irá ter e quantas irão sobrar?
cada pessoa irá receber 14 maçãs e irá sobrar uma maçã.

```js
let modulo = 29 % 2; // saída: 1
```

## A ordem Importa

OS começam com multiplicação e divisão, depois vão para soma e subtração

```js
let calculo = 20 + 10 * 2; // saída: 40
```

nesse caso o calculo não será 20 + 10 e depois multiplicado por 2,mas sim 10 * 2 + 20

Para priorizar uma parte do calculo utilizamos parenteses.

```js
let calculo = (20 + 10) * 2; // saída: 60
```

Agora irá calcular 20 + 10 e depois irá multiplicar por 2
