# Funções Literais

São funções comuns, sua sintaxe é parecida com a de várias outras linguagens:

Sintaxe:

```js
function nomeDaFuncao() {
    // Conteúdo da função
}
```

Funções Literais sofrem hoisting ou seja, a engine do JavaScript irá elevar a declaração da função para o topo do escopo, então podemos chamar a função após declarar a função como podemos ver no exemplo a seguir:

```js
function falaOi() {
    console.log('Oi');
}

falaOi(); // saída: Oi
```

Como também podemos chamar a função antes de sua declaração:

```js
falaOi(); // saída: Oi

function falaOi() {
    console.log('Oi');
}
```

* Apenas esse tipo de declaração sofre hoisting.
