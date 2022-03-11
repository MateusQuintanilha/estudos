# Math

esse objeto possui vários métodos matemáticas.

## Arredonda valores de ponto flutuante para cima

```js
let num1 = 9.01;
let num2 = Math.ceil(num1);

console.log(num2) // saída: 10
```

## Arredonda valores de ponto flutuante para baixo

```js
let num1 = 9.99;
let num2 = Math.floor(num1);

console.log(num2) // saída: 9
```

## Arredonda valores de ponto flutuante para o valor inteiro mais próximo

```js
let num1 = 9.4;
let num2 = Math.round(num1);

console.log(num2) // saída: 9
```

```js
let num1 = 9.5;
let num2 = Math.round(num1);

console.log(num2) // saída: 10
```

## Pega o maior valor de uma sequencia de números

```js
let num2 = Math.max(1,2,3,4,20,-50);

console.log(num2) // saída: 20
```

## Pega o menor valor de uma sequencia de números

```js
let num2 = Math.min(1,2,3,4,20,-50);

console.log(num2) // saída: -50
```

## Gera números aleatórios

```js
let rand = Math.random();

console.log(rand) // saída: valor aleatório entre 0.1 a 0.9
```

Para gerar números inteiros aleatórios é só multiplicar esse valor por 10

```js
let rand = Math.random() * 10;

console.log(rand) // saída: valor aleatório entre 1 a 9
```

Também podemos escolher a faixa onde esses números são sorteados, como por exemplo, sortear um número entre 5 a 9

```js
let rand = Math.random() * (10 - 5) + 5;

console.log(rand) // saída: valor aleatório entre 5 a 9
```

E para arrendondar podemos usar os métodos que aprendemos anteriormente

```js
let rand = Math.round(Math.random() * (10 - 5) + 5);

console.log(rand) // saída: valor aleatório entre 5 a 10
```

## Valor de PI

```js
let pi = Math.PI;

console.log(pi) // saída: 3.141592653589793
```

