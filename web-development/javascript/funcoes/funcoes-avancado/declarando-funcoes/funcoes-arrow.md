# Arrow Functions

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função. A palavra `function` não é utilizada, no lugar dela é adicionado os símbolos de igual e maior após os parenteses `() =>`, como podemos ver nos exemplos a seguir:

Exemplo de algumas funções:

```js
// Função literal
function literal() {

}

// Função de expressão (function expression)
const expression = function() {

};

// Arrow Function
const arrow = () => {
    
};
```

Exemplo pratico de arrow function:

```js
const raizQuadrada = (parametro) => {
  return parametro * parametro;
}
```

Quando o conteúdo de uma arrow function possuir só uma linha de código, podemos retirar os parenteses e a palavra return que irá funcionar da mesma forma, como no exemplo a seguir:

```js
const raizQuadrada = (parametro) => parametro * parametro;
```

## Diferenças de uma arrow function para uma function expression

A arrow function não tem o seu próprio `this`, `arguments`, `super` ou `new.target`.
