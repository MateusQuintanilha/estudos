## Transformando number em string

```js
let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2); // saída: 12.5   // converte apenas nessa linha o conteúdo em number para string
console.log(typeof num1); // saída: number
```

Para alterar o valor na variável é preciso reatribuir o valor modificado a variável

```js
let num1 = 1;
let num2 = 2.5;

num1 = num1.toString()

console.log(num1 + num2); // saída: 12.5
console.log(typeof num1); // saída: string
```

## Restringindo a quantidade de casas decimais

```js
let numero = 10.5442451;

console.log(num1.toFixed(2)); // saída: 10.54
```

## Saber se um valor é inteiro

Quando recebemos valores de fonte externa como um banco de dados ou uma api as vezes precisamos saber se é um valor inteiro ou não, para isso podemos usar o `Number.isInteger(variável)`.

```js
let num1 = 10;
let num2 = 5.6;
console.log(Number.isInteger(num1)); // saída: true
console.log(Number.isInteger(num2)); // saída: false
```

## Verificando se um valor é um NaN

```js
let temp = 10 * 'olá';

console.log(Number.isNaN(temp)); // saída: true
```

## Problemas de precisão

Vamos fazer a soma de 0.7 + 0.1, o resultado esperado é 0.8 certo?

Vamos fazer o calculo para ver:

```js
let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2) // saída: 0.7999999999999999
```
E o resultado foi : 0.7999999999999999

Agora vamos somar até chegar a 1

```js
let num1 = 0.7;
let num2 = 0.1;

num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1

console.log(num1) // saída: 0.9999999999999999
```
Teve o mesmo problema de precisão, para resolver isso devemos utilizar parseInt, parseFloat ou Number junto com o toFixed.

```js
let num1 = 0.7;
let num2 = 0.1;

num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1

console.log(Number(num1.toFixed(2))) // saída: 1
```

ou podemos fazer isso através de um calculo matemático, pois esse problema de imprecisão ocorre ao fazer cálculos com pontos flutuantes, se transformar-mos os pontos flutuantes em números inteiros e ao final do calculo os converter novamente para ponto flutuante esse problema não ocorre.

```js
let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1
console.log(num1) // saída: 1
```

## Raiz Quadrada

Podemos pegar o valor da raiz quadrada utilizando cálculos dessa forma:

```js
let num1 = 9;
let raiz = num1 ** (1/2)

console.log(raiz) // saída: 3
```
ou dessa maneira:

```js
let num1 = 9;
let raiz = num1 ** 0.5

console.log(raiz) // saída: 3
```

## Cálculos utilizando o valor 0

Podemos fazer cálculos dividindo por 0 mas irá retornar o valor Infinity

```js
let num1 = 9;
let calculo = num1 / 0

console.log(calculo) // saída: Infinity
```
