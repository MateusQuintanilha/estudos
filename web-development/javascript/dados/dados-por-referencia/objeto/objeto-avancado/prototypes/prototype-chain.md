# Encadeamento de Protótipos (Prototype Chain)

Como vimos anteriormente, cada objeto faz referência a um protótipo, que sempre será outro objeto até que o último objeto em sua cadeia retorne `null`. Essa sequência de um protótipo dentro de outro é chamado de Prototype Chain.

Vamos ver alguns exemplos dessa cadeia de protótipos:

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
    // listaDeFrutas.__proto__ --> Array.prototype --> Object.prototype --> null
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

Cada cadeia de protótipos que vemos possuem seus próprios métodos, e utilizamos esses métodos a muito tempo como por exemplo os métodos push, shift, slice, length entre outros. Podemos usar os métodos nativos que estão na cadeia de protótipos ou adicionar novos métodos nela, essa forma de acessar métodos da cadeia de protótipos chamamos de herança.