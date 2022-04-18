# Object.entries()

O método `Object.entries()` retorna um array com a propriedade de um objeto separado em `[chave, valor]` que são enumeráveis, na mesma ordem dos objetos providos através do loop `for...in`.

Sintaxe:

```js
Object.entries(obj)
```

## Parâmetro

* `obj` - O objeto cujo as propriedades serão retornadas em pares de `[chave, valor]`.

## Exemplo

Vamos criar um objeto pessoa com nome e sobrenome e vamos usar o método `Object.entries()` para imprimir os dados no console.

```js
const pessoa = {
    nome: 'Theresa',
    sobrenome: 'Valdez'
}

console.log(Object.entries(pessoa)); // saída: [ [ 'nome', 'Theresa' ], [ 'sobrenome', 'Valdez' ] ]
```

**Caso queira retornar só as chaves use o método `Object.keys`**
**Caso queira retornar só os valores use o método `Object.values`**
