# BigInt

Apesar de extenso o tipo number é limitado, sendo capaz de representar apenas os valores que estão entre `-(2^53 -1)` e `2^53 -1`. Passando disso é preciso fazer uso de valores no formato de ponto flutuante que se aproximem do número desejado, algo que não é recomendado. Para resolver esse problema o tipo de dado `BigInt` foi criado. Com ele é possível representar inteiros de precisão não exata. Para fazer uso dele você pode adicionar um `n` ao final do número inteiro ou chamar a função `BigInt()`.

Exemplo:

```js
let bigNumber = 999999999999999999n;
```

Exemplo usando a função bigInt:

```js
let bigNumber = BigInt(999999999999999999n);
```

***Número do tipo Number e BigInt não podem ser usados na mesma expressão pois ambos são de tipos diferentes.***
