# Concatenando Arrays

## Usando o spread

Podemos usar o spread `...` para concatenar arrays

```js
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];
const numbers = [...numbers1, ...numbers2, ...numbers3];

console.log(numbers); /// saída: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
```

## Usando o método concat

Podemos usar o método `concat()` para concatenar os arrays:

```js
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers = numbers1.concat(numbers2);

console.log(numbers); // saída: [ 1, 2, 3, 4, 5, 6 ];
```

Também podemos passar mais arrays como argumento, basta separar elas com vírgula:

```js
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];
const numbers = numbers1.concat(numbers2, numbers3, [10, 11, 12]);

console.log(numbers); // saída: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
```
