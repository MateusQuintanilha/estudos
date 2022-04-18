# Object.assign()

O método `Object.assign()` é usado para copiar os valores de um ou mias objetos e passar para outro objeto.

Sintaxe:

```js
Object.assign(destino, origem);
```

## Parâmetros

* `destino` - O objeto que irá receber os valores enumeráveis do objeto de origem.
* `origem` - O objeto que será copiado para o objeto de destino.

## Exemplo

Vamos criar um objeto pessoa que irá conter nome e sobrenome:

```js
const pessoa = {
    nome: 'Theresa',
    sobrenome: 'Valdez'
}
```

Agora vamos criar uma variável com o nome de copiaPessoa que irá receber os dados do objeto pessoa.

Podemos passar o objeto de destino para o método `Object.assign()` de duas formas.

A primeira forma é criar uma variável que contenha uma objeto e passar o nome da variável como o objeto de destino:

```js
const copiandoPessoa = {};
Object.assign(copiandoPessoa, pessoa);

console.log(copiandoPessoa); // saída: { nome: 'Theresa', sobrenome: 'Valdez' }
```

A segunda forma é atribuir o método `Object.assign()` a uma variável vazia e passar um objeto vazio como o objeto de destino:

```js
const copiandoPessoa = Object.assign({}, pessoa);

console.log(copiandoPessoa); // saída: { nome: 'Theresa', sobrenome: 'Valdez' }
```

## Mesclando objetos

Podemos passar vários objetos como parâmetros no método `Object.assign()`, mas tome cuidado pois o primeiro objeto irá receber todos os dados dos demais:

Nesse caso o método irá retornar a mesclagem dos objetos para a variável mesclandoObjetos e também irá retornar essa mesclagem para o objeto `a`.

```js
const a = {a: 10};
const b = {b: 20};
const c = {c: 30};

const mesclandoObjetos = Object.assign(a, b, c);
console.log(a); // saída: { a: 10, b: 20, c: 30 }
console.log(mesclandoObjetos); // saída: { a: 10, b: 20, c: 30 }
```

Caso não queira que o objeto `a` seja alterado, coloque um objeto vazio como o primeiro parâmetro:

```js
const a = {a: 10};
const b = {b: 20};
const c = {c: 30};

const mesclandoObjetos = Object.assign({}, a, b, c);
console.log(a); // saída: { a: 10 }
console.log(mesclandoObjetos); // saída: { a: 10, b: 20, c: 30 }
```
