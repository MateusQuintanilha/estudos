# Operadores de comparação

Um operador de comparação compara seus operandos e retorna um valor lógico baseado em se a comparação é verdadeira. Os operandos podem ser numéricos, strings, lógicos ou objetos. Strings são comparadas com base em ordenação lexicográfica utilizando valores Unicode. Na maioria dos casos, se dois operandos não são do mesmo tipo, o JavaScript tenta convertê-los para um tipo apropriado. Isto geralmente resulta na realização de uma comparação numérica. As únicas exceções a esta regra são os operadores (===) e o (!==), que realizam comparações de igualdade e desigualdade "estritas". Estes operadores não tentam converter os operandos em tipos compatíveis antes de verificar a igualdade.

## (<)	Menor que

Retorna (true) caso o operando da esquerda seja menor que o da direita.

20 é menor que 10?

```js
20 < 10; // false
```

10 é menor que 20?

```js
10 < 20; // true
```

20 é menor que 20?

```js
20 < 20; // false
```

## (<=)	Menor que ou igual a

Retorna (true) caso o operando da esquerda seja menor ou igual ao da direita.

20 é menor ou igual a 20?

```js
20 <= 20; // true
```


## (>)	Maior que

Retorna (true) caso o operando da esquerda seja maior que o da direita.

20 é maior que 10?

```js
20 > 10; // true
```

10 é maior que 20?

```js
10 > 20; // false
```

20 é maior que 20?

```js
20 > 20; // false
```

## (>=)	Maior que ou igual a

Retorna (true) caso o operando da esquerda seja maior ou igual ao da direita.

20 é maior ou igual a 20?

```js
20 >= 20; // true
```

## (==)	Igual a

Retorna (true) caso os operandos sejam iguais, caso os valore sejam iguais mas de tipos diferentes, como String e Number também irá retornar (true).

```js
10 == 20; // false
20 == 10; // false
20 == 20; // true
20 == '20'; // true
```

## (===) Estritamente igual a

Retorna (true) caso os operandos sejam iguais também do mesmo tipo. Caso um os operandos sejam iguais mas um do tipo String e outro do tipo Number irá retornar false.

```js
10 === 20; // false
20 === 10; // false
20 === 20; // true
20 === '20'; // false
```

## (!=)	Diferente de

Retorna (true) caso os operandos não sejam iguais.

```js
10 != 20; // true
20 != 10; // true
20 != 20; // false
20 != '20'; // false
```

## (!==) Estritamente diferente

Retorna (true) caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

```js
10 !== 20; // true
20 !== 10; // true
20 !== 20; // false
20 !== '20'; // true
```
