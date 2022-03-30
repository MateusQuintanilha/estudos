# Arrow Functions

Arrow function é uma forma diferente de declarar uma função, ela não utiliza a palavra function ao invés disso adicionamos um igual seguido do sinal de maior após os parentes `() =>`, a junção do igual e do sinal de maior se parece com uma seta/flecha e dai que veio o nome de arrow function.

Exemplo:

```js
const raizQuadrada = (parametro) => {
  return parametro * parametro;
}
```

Quando uma arrow function possui só uma linha de código, podemos retirar os parenteses e a palavra return que irá funcionar da mesma forma, como no exemplo a seguir:

```js
const raizQuadrada = (parametro) => parametro * parametro;
```
