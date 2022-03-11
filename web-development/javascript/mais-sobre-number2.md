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
