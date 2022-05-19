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

## Especificando os produtos

Agora vamos criar uma função construtora para camiseta

```js
function Camiseta(name, price, color, type) {
}
```

### Chamando a função construtora Produtos dentro da função construtora Camiseta

Agora precisamos fazer com que a função construtora Produto seja executada dentro da função construtora Camiseta para fazer o encadeamento. Podemos usar o método  `call()` fazer isso.

Para usar o método `call()` iremos usar o nome da função que desejamos chamar em seguida iremos usar a notação por ponto e o método `call`.

Dentro do método `call()` precisamos passar o argumento this em seguida os argumentos necessários para a função que está sendo executada.

```js
function Camiseta(name, price, color, type) {
    Produto.call(this, name, price, color);
}
```

### atribuindo a função construtora Produto como prototype da função construtora Camiseta

mas ainda não fizemos a ligação do prototype, para fazer isso precisamos atribuir um novo objeto vazio para o prototype da função construtora Camiseta, para fazer isso podemos usar o método `Object.create()`:

```js
Camiseta.prototype = Object.create(Produto.prototype);
```

mas isso irá gerar um problema, todos as instâncias criadas a partir de Camiseta serão atribuídas a função construtora Produto.

Vamos criar uma instância de Camiseta para visualizar esse problema:

```js
const camiseta = new Camiseta('Camiseta Form', 50, 'Preta', 'Regata');
```

Ao imprimir no console o construtor de camiseta será Produto:

```js
console.log(camiseta); // saída: Produto { name: 'Camiseta Form', price: 50, color: 'Preta' }
```
