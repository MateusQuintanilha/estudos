# Reduzindo o array

Como o nome sugere, o método `reduce()` busca reduzir um array. ele percorrerá por cada elemento desse array com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo somar todos os elementos do array.

Sintaxe:

```js
array.reduce(callback, valorInicial);

function callback(acumulador, valorAtual, indexAtual, array){

}
```

## Parâmetros do método reduce

O método `reduce()` possui dois parâmetros:

* `callback` é obrigatório, é uma função que será executada para cada elemento no array original.
* `valorInicial` é opcional, é o valor inicial do acumulador. Em um cenário no qual desejamos somar os itens de um vetor, por exemplo, esse argumento representa o valor inicial da soma, que apesar de ser zero na maioria dos casos, pode variar de acordo com a situação.

## Parâmetros da função de callback

A função callback possui 4 parâmetros:

```js
function callback(acumulador, valorAtual, indexAtual, array){}
```

* `acumulador` é obrigatório, esse parâmetro irá server como acumulador, caso tenha passado algum valor no parâmetro `valorInicial` no método `reduce()` o acumulador usará esse valor como valor inicial, caso não tenha passado algum valor para ser usado como valor inicial o acumulador irá pegar o valor do primeiro elemento da lista.
* `valorAtual` é obrigatório e representa o elemento que está sendo percorrido no momento pela função de callback.
* `indexAtual` é opcional e representa o índice do elemento que está sendo percorrido no momento pela função de callback.
* `arrayPercorrido` é opcional e representa o próprio array que está sendo percorrido.

**É importante lembrar que caso o valor inicial não seja passado, o acumulador iniciará com o valor do primeiro elemento da lista.**

## Exemplos de usos do método `reduce()`

### 1º Exemplo

Vamos criar um array com 10 valores aleatórios que será usado como base para os exemplos:

```js
const valores = [5, 10, 7, 32, 65, 75, 234, 742, 34, 6];
```

Em seguida vamos usar o método `recude()` para somar todos os números:

#### Usando uma função literal

```js
const total = valores.reduce(callback, 0);

function callback(acumulador, valorAtual) {
    return acumulador += valorAtual
}

console.log(total); // saída: 1210
```

#### Usando uma função anônima

```js
const total = valores.reduce(function(acumulador, valorAtual) {
    return acumulador += valorAtual
}, 0);

console.log(total); // saída: 1210
```

#### Usando uma arrow function

```js
const total = valores.reduce((acumulador, valorAtual) => {
    return acumulador += valorAtual
}, 0);

console.log(total); // saída: 1210
```

#### Simplificando a arrow function

Como estamos usando dois parâmetros na arrow function não podemos retirar os parênteses mas como só possuímos uma linha de código dentro da arrow function podemos retirar as chaves e a palavra return:

```js
const total = valores.reduce((acumulador, valorAtual) => acumulador += valorAtual, 0);

console.log(total); // saída: 1210
```
