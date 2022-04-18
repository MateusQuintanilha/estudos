# Object.values()

O método `Object.values()` retorna um array com o valor de cada propriedade enumerável de um determinado objeto, na mesma ordem dos objetos providos através do loop `for...in`.

Sintaxe:

```js
Object.values(obj)
```

## Parâmetro

* `obj` - O objeto cujo o valor de cada propriedade será retornada em um array `[valor]`.

## Exemplo

Vamos criar um objeto pessoa com nome e sobrenome e vamos usar o método `Object.values()` para imprimir os dados no console.

```js
const pessoa = {
    nome: 'Theresa',
    sobrenome: 'Valdez'
}

console.log(Object.values(pessoa)); // saída: [ 'Theresa', 'Valdez' ]
```

**Caso queira retornar as chaves e os valores use o método `Object.entries`**
**Caso queira retornar só as chaves use o método `Object.keys`**
