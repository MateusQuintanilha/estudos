# Symbol

`Symbol` (Símbolo) é um tipo de dado primitivo que armazena um valor único. Seu propósito é servir como um identificador único.

Pense neles como as suas digitais ou o DNA, podemos ter irmãos gêmeos idênticos mas as suas digitais e DNA são diferentes ou seja, mesmo sendo parecidos cada um deles é único.

## Como usar o Symbol

Para declarar um `Symbol` basta usar a função `Symbol()`.

Sintaxe:

```js
const meuSimbolo = Symbol();
```

Também podemos passar para a função um parâmetro do tipo string com uma descrição do `Symbol`. Isso serve apenas para identificar o `Symbol`, não muda nada em seu conteúdo ou em sua criação.

```js
const meuSimbolo = Symbol('meu simbolo');
```

Como dito antes, mesmo se criarmos dois Symbols parecidos, eles não serão iguais para testar isso podemos criar dois symbols e compara-los:

```js
console.log(Symbol() === Symbol()); // saída: false
```

Agora vamos a um dos exemplos de uso.