# Filtrando os elementos de um array

Podemos usar o método `filter()` para filtrar os elementos de um array. Esse método faz a leitura dos elementos do array em busca de um valor de referência passado por meio de uma função callback, se a função retornar `true` o elemento será mantido e caso retorne `false` o elemento será pulado e ao final o método `filter()` criará um novo array com os valores que foram mantidos.

Sintaxe:

```js
array.filter(callback, thisContext);

function callback(valorAtual, indexAtual, arrayPercorrida) {
    
}
```

## Parâmetros do método filter()

O método `filter()` possui dois parâmetros:

```js
array.filter(callback, thisContext);
```

* `callback` é obrigatório, é uma função que será executada para cada elemento no array original.
* `thisContext` é opcional, ele é um método iterativo no qual podemos passar valores que poderão ser referenciados usando a palavra reservada `this` dentro da função de callback.

## Parâmetros da função de callback

A função callback possui 3 parâmetros:

```js
function callback(valorAtual, indexAtual, arrayPercorrido) {}
```

* `valorAtual` é obrigatório e representa o elemento que está sendo percorrido no momento pela função de callback.
* `indexAtual` é opcional e representa o índice do elemento que está sendo percorrido no momento pela função de callback.
* `arrayPercorrido` é opcional e representa o próprio array que está sendo percorrido.

**É importante lembrar que o método `filter()` não modifica o array existente, ele irá criar um novo array. Então no final teremos um array do mesmo tamanho ou menor que o array original**

## Exemplos de usos do método `filter()`

### 1º Exemplo

Vamos criar um array com 10 valores aleatórios que será usado como base para o exemplos:

```js
const valores = [5, 10, 7, 32, 65, 75, 234, 742, 34, 6];
```

Em seguida vamos usar o método `filter()` que irá retornar somente os valores maiores que 10:

#### Usando uma função literal

```js
function callbackFilter(valor) {
    return valor > 10;
}
const valoresFiltrados =  valores.filter(callbackFilter);

console.log(valoresFiltrados); // saída: [ 32, 65, 75, 234, 742, 34 ]
```

#### Usando uma função anônima

```js
const valoresFiltrados =  valores.filter(function(valor) {
    return valor > 10
});

console.log(valoresFiltrados); // saída: [ 32, 65, 75, 234, 742, 34 ]
```

#### Usando uma arrow function

```js
const valoresFiltrados =  valores.filter((valor) => {
    return valor > 10
});

console.log(valoresFiltrados); // saída: [ 32, 65, 75, 234, 742, 34 ]
```

#### Simplificando a arrow function

Como estamos usando apenas um parâmetro na arrow function podemos retirar os parênteses:

```js
const valoresFiltrados =  valores.filter(valor => {
    return valor > 10
});

console.log(valoresFiltrados); // saída: [ 32, 65, 75, 234, 742, 34 ]
```

E como só possuímos uma linha de código dentro da arrow function podemos retirar as chaves e a palavra return:

```js
const valoresFiltrados =  valores.filter(valor => valor > 10);

console.log(valoresFiltrados); // saída: [ 32, 65, 75, 234, 742, 34 ]
```

### 2º Exemplo

A partir desse exemplo estarei usando uma arrow function como callback o mais simplificada possível

Vamos criar um array que irá conter objetos, nesse objeto vamos ter nome, idade, email.

```js
const pessoas = [
    {nome: 'Earl Briggs', idade: 28, email: 'briggs@email.com'},
    {nome: 'Marvin Weber', idade: 23, email: 'weber@email.com'},
    {nome: 'Kyle Walsh', idade: 52, email: 'walsh@outroemail.com'},
    {nome: 'Claudia Jensen', idade: 34, email: 'jensen@email.com'},
    {nome: 'Adam Turner', idade: 47, email: 'turner@outroemail.com'},
    {nome: 'Corey Higgins', idade: 51, email: 'higgins@email.com'},
];
```

#### Filtrando as pessoas que possuem o nome com mais de 12 caracteres

```js
const pessoasComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length < 12;
});

console.log(pessoasComNomeGrande);

/*  saída:
    [
        { nome: 'Earl Briggs', idade: 28, email: 'briggs@email.com' },
        { nome: 'Kyle Walsh', idade: 52, email: 'walsh@outroemail.com' },
        { nome: 'Adam Turner', idade: 47, email: 'turner@outroemail.com' }
    ]
*/
```

#### Filtrando as pessoas que possuem o nome com menos de 12 caracteres

```js
const pessoasComNomePequeno = pessoas.filter((obj) => {
    return obj.nome.length > 12;
});

console.log(pessoasComNomePequeno);

/*  saída:
    [
        { nome: 'Claudia Jensen', idade: 34, email: 'jensen@email.com' },
        { nome: 'Corey Higgins', idade: 51, email: 'higgins@email.com' }
    ]
*/
```

#### Filtrando as pessoas que possuem menos de trinta anos

```js
const pessoasComMenosDeTrintaAnos = pessoas.filter((obj) => {
    return obj.idade < 30;
});
console.log(pessoasComMenosDeTrintaAnos);

/*  saída:
    [
        { nome: 'Earl Briggs', idade: 28, email: 'briggs@email.com' },
        { nome: 'Marvin Weber', idade: 23, email: 'weber@email.com' }
    ]
*/
```

#### Filtrando as pessoas que possuem o email com @email

```js
const pessoasComEmail = pessoas.filter((obj) => {
    if(obj.email.indexOf('@email') > 0) return obj
});

console.log(pessoasComEmail)

/*  saída:
    [
        { nome: 'Earl Briggs', idade: 28, email: 'briggs@email.com' },
        { nome: 'Marvin Weber', idade: 23, email: 'weber@email.com' },
        { nome: 'Claudia Jensen', idade: 34, email: 'jensen@email.com' },
        { nome: 'Corey Higgins', idade: 51, email: 'higgins@email.com' }
    ]
*/
```