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