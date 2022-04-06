# Expressão de Função Imediatamente Invocada (IIFE)

uma IIFE (Immediately Invoked Function Expression) ou em português Expressão de Função Imediatamente Invocada, é uma função definida como uma expressão e é executada imediatamente após a sua criação.

Sintaxe:

```js
(function(){
    // Conteúdo da função
})
(); // Inicialização da função
```

Também podemos usar arrow function:

```js
(() => {
    // Conteúdo da função
})
(); // Inicialização da função
```

Podem ser usadas para não gerar conflitos com outras variáveis ou poluir o escopo global do browser, então todo o conteúdo dentro de um arquivo podem ser colocados dentro de uma função IIFE.
