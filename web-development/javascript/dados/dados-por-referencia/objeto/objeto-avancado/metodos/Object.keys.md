# Object.keys()

O método `Object.keys()` retorna um array com a chave de cada propriedade enumerável de um determinado objeto, na mesma ordem dos objetos providos através do loop `for...in`.

Sintaxe:

```js
Object.keys(obj)
```

## Parâmetro

* `obj` - O objeto cujo as chaves de cada propriedades serão retornadas em um array `[chave]`.

## Exemplo

Vamos criar um objeto pessoa com nome e sobrenome e vamos usar o método `Object.keys()` para imprimir os dados no console.

```js
const pessoa = {
    nome: 'Theresa',
    sobrenome: 'Valdez'
}

console.log(Object.keys(pessoa)); // saída: [ 'nome', 'sobrenome' ]
```

**Caso queira retornar as chaves e os valores use o método `Object.entries`**
**Caso queira retornar só os valores use o método `Object.values`**
