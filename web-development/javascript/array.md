
# Array

Um array é uma lista ordenada de valores que contém um índice numérico e um elemento, que pode ser de qualquer tipo primitivo, objeto, uma função ou até mesmo outro array.

## Sintaxe

Podemos criar um array utilizando **a declaração direta ou a declaração literal**

Veja a seguir a sintaxe para cada uma das formas de criar um array:

**Declaração Direta**

```js
let arrayDireta = new Array();
```

**Declaração Literal**

```js
let arrayLiteral = [];
```

Criamos os arrays vazio, agora vamos criar os mesmos arrays mas com elementos dentro, quando for inserir mais de um elemento é necessário separa-los e para fazer isso utilizamos a vírgula `,`.

**Declaração Direta**

```js
let arrayDireta = new Array(elemento01, elemento02, elemento03);
```

**Declaração Literal**

```js
let arrayLiteral = [elemento01, elemento02, elemento03];
```

## Utilizando um array

**Como vimos, existem formas diferentes para se declarar um array, a mais recomenda é a declaração do tipo literal, uma vez que essa forma é mais prática, tem maior legibilidade e velocidade de execução**

Então a partir de agora irei utilizar apenas a forma literal.

## Acessando elementos de um array

Podemos acessar elementos de um array utilizando o índice, os elementos são indexados com base em zero. Em outras palavras, o primeiro elemento de um array terá o índice `(0)`, o segundo elemento terá o índice `(1)` e assim por diante.

Para acessar um elemento de um array iremos utilizar o nome do array seguido de um par de colchetes `[]`, dentro desses colchetes iremos adicionar o número do índice desejado.

Vamos criar um array como o nome frutas e adicionar três elementos para utilizar como exemplo

```js
// índice       0        1        2
let frutas = ['Maçã', 'Banana', 'Uva'];
```

Para acessar o elemento com a maçã iremos utilizar o índice `(0)`.

```js
frutas[0];

console.log(frutas[0]); // saída: Maçã
```

Para acessar o elemento com a banana iremos utilizar o índice `(1)`.

```js
frutas[1];

console.log(frutas[1]); // saída: Banana
```

E para acessar o elemento com a uva iremos utilizar o índice `(2)`.

```js
frutas[2];

console.log(frutas[2]); // saída: Uva
```

Caso tente utilizar um índice que não tenha um valor, o índice irá retornar `undefined`.

```js
frutas[3];

console.log(frutas[3]); // saída: undefined
```

