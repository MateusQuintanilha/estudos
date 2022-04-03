# Escopo Global e Escopo Local

## Escopo Global

Como o seu próprio nome diz, o escopo global engloba toda a aplicação, então todo conteúdo inserido no escopo global poderá ser acessada em qualquer lugar do código. Então tenha cuidado ao declarar variáveis globais, pois dependendo da forma que for utilizada poderá gerar conflitos que não desejamos.

O escopo global é tudo que está fora de qualquer outro escopo, ou para ser mais preciso, todos os outros escopos são criados dentro do escopo global.

```js
let variavelGlobal = 'Estou no Escopo Global';

function funcao() {
    let variavelLocal = 'Estou no Escopo Local';
}
```

## Escopo Local

Todo conteúdo inserido dentro de um escopo local só será visível dentro do seu escopo, vamos pegar o exemplo usado acima e vamos criar `console.log` dentro da função e fora, tentando acessar as duas variáveis.

```js
let variavelGlobal = 'Variável declara no escopo global';

function funcao() {
    let variavelLocal = 'Variável declara no escopo local';

    console.log(variavelGlobal); // saída: Variável declara no escopo global
    console.log(variavelLocal); // saída: Variável declara no escopo local
}
funcao();

console.log(variavelGlobal); // saída: Variável declara no escopo global
console.log(variavelLocal); // saída: ReferenceError: variavelLocal is not defined
```

Como podemos ver, os `console.log` dentro da função conseguiu exibir os dados das duas variáveis, já os `console.log` no escopo global conseguiu exibir o conteúdo da variável que foi declarada no escopo global mas não conseguiu exibir o conteúdo da variável que está dentro do escopo da função.
