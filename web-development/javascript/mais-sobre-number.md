## converter números do tipo string para tipo number

### parseInt()

Converte o número em string para o tipo number e retorna o valor do tipo numérico. Mas não converte valores de ponto flutuante.

```js
const num1 = parseInt('5');

console.log(typeof num1, num1) // saída: number 5
```

Se tentarmos converte um número de ponto flutuante essa função só irá retornar o número inteiro:

```js
const num1 = parseInt('7.5');

console.log(typeof num1, num1) // saída: number 7
```

### parseFloat()

Converte o número em string para o tipo number e retorna o valor do tipo numérico incluindo os decimais

```js
const num1 = parseFloat('5.5');

console.log(typeof num1, num1) // saída: number 5.5
```

### Number()
Converte o número em string para o tipo number, não tem distinção do tipo do número.

```js
const num1 = Number('5.5');

console.log(typeof num1, num1) // saída: number 5.5
```

```js
const num1 = Number('5');

console.log(typeof num1, num1) // saída: number 5
```
