# Herança Prototipada (Prototypal Inheritance)

O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente).

Em OOP (Programação Orientada a Objeto) temos algo parecido, aqui a herança refere-se a habilidade de um objeto acessar propriedades de outro objeto. Estes objetos que herdam essas informações de outros objetos e podem utilizá-las da forma que quiserem. No JavaScript essa herança funciona através dos protótipos, então chamamos esse tipo de herança como herança prototípica (ou prototypal inheritance).

Já vimos um pouco sobre herança através da cadeia de protótipos e como os membros são herdados subindo em uma cadeia. Mas agora vamos explorar um pouco mais a fundo.

# Criando um construtor de produtos

Vamos criar uma função construtora genérica que será usada de base para criar vários produtos diferentes para uma loja. Mas antes de começar, precisamos ver quais produtos essa loja irá ter, para não complicar muito vamos pegar três produtos: Camiseta, Mochila, Caneca.

Todos eles possuem nome, preço e cor. Vamos usar essas duas propriedades para começar.

## Criando a função construtora Produto

```js
function Produto(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
}
```

Também vamos criar um método que servirá para dar desconto para o produto

```js
Produto.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100));
};
```