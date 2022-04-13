# Mapeando o array

O método `map()` é usado para fazer a leitura dos elementos do array em busca de um valor de referência passado por meio de uma função callback, essa função de callback poderá retornar qualquer valor e ao final o método `map()` criará um novo array, mas cuidado pois esse método também poderá modificar o array que está sendo percorrido.

Sintaxe:

```js
array.map(callback, thisContext);

function callback(valorAtual, indexAtual, arrayPercorrida) {
    
}
```

## Parâmetros do método map()

O método `map()` possui dois parâmetros:

```js
array.map(callback, thisContext);
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

**É importante lembrar que o método `map()` poderá modifica o array percorrido e também retorna um novo array**
