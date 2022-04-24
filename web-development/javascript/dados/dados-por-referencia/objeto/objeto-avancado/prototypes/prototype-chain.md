# Encadeamento de Protótipos (Prototype Chain)

Um objeto possui um prototype e esse prototype também pode ter um prototype, e assim por diante, até que o último prototype dessa sequência seja `null`. Essa sequência de um protótipo dentro de outro é chamado de Prototype Chain.

Um objeto pode utilizar qualquer propriedade ou método que existir nesse encadeamento de protótipos.

Vamos ver alguns exemplos desse Encadeamento de protótipos:

## Encadeamento de protótipos de um Objeto

Vamos criar um objeto com o nome de `pessoa`:

```js
    const pessoa = {
        nome: 'Landon',
        sobrenome: 'Paul'
    };
```

A cadeia de protótipos desse objeto será assim:

```js
    // pessoa.__proto__ --> Object.prototype --> null
```

## Encadeamento de protótipos de um Array

Vamos criar um array com o nome de `listaDeFrutas`:

```js
    const listaDeFrutas = ['Maçã', 'Morango', 'Uva'];
```

A cadeia de protótipos desse array será assim:

```js
    // pessoa.__proto__ --> Array.prototype --> Object.prototype --> null
```

## Encadeamento de protótipos de uma Função

Vamos criar uma função com o nome de `soma`:

```js
function soma() {
    return 1 + 2
}
```

A cadeia de protótipos dessa função será assim:

```js
    // soma.__proto__ --> function.prototype --> Object.prototype --> null
```
