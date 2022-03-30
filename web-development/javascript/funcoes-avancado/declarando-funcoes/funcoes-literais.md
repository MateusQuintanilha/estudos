# Funções Literais

São funções comuns, sua sintaxe é parecida com a de várias outras linguagens:

Sintaxe:

```js
function nomeDaFuncao(parametro01, parametro02) {
    return parametro01 + parametro02;
}
```

Funções Literais sofrem hoisting ou seja, a engine do JavaScript irá elevar a declaração da função para o topo do escopo, então podemos chamar a função após declarar a função como podemos ver no exemplo a seguir:

```js
function soma(valorA, valorB) {
    return valorA + valorB;
}

soma(10, 5); // saída: 15
```

Como também podemos chamar a função antes de sua declaração:

```js
soma(10, 5); // saída: 15

function soma(valorA, valorB) {
    return valorA + valorB;
}
```

* Apenas esse tipo de declaração sofre hoisting.
