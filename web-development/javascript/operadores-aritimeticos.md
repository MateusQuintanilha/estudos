# Operadores Aritméticos

Os operadores aritméticos são utilizados para fazer cálculos simples.

## `+`	Adição/soma

```js
let adicao = 100 + 100; // saída: 200
```

## `-`	Subtração

```js
let subtracao = 150 - 50; // saída: 100
```

## `*`	Multiplicação

```js
let multiplicacao = 100 * 10; // saída: 1000
```

## `/`	Divisão

```js
let divisao = 200 / 4; // saída: 50
```

## `**` Expoente

O primeiro valor sera multiplicado por ele mesmo por x vezes, no exemplo a seguir o valor 10 será multiplicado por ele mesmo 4 vezes, dando um resultado de 10.000

```js
let expoente = 10 ** 4; // saída: 10000
```

## `%`	Módulo

Irá retornar o resto da divisão, ex: temos 29 maçãs para dividir para 2 pessoas, quantas maçãs cada pessoa irá ter e quantas irão sobrar?
cada pessoa irá receber 14 maçãs e irá sobrar uma maçã.

```js
let modulo = 29 % 2; // saída: 1
```

## A ordem Importa

OS começam com multiplicação e divisão, depois vão para soma e subtração

```js
let calculo = 20 + 10 * 2; // saída: 40
```
nesse caso o calculo não será 20 + 10 e depois multiplica por 2,mas sim 10 * 2 + 20

Para priorizar uma parte do calculo utilizamos parenteses.

```js
let calculo = (20 + 10) * 2; // saída: 60
```
Agora irá calcular 20 + 10 e depois irá multiplicar por 2
