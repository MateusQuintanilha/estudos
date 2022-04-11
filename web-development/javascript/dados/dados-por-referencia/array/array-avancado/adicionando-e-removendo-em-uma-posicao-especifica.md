# Adicionando e Removendo elementos em uma posição específica de um Array

## Adicionando um elemento em uma posição específica de um array

Também podemos utilizar o método `splice()`  para adicionar um ou mais elementos em um array passando três ou mais argumentos.

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
motos.splice(2,0, 'Hayabusa', 'Falcon');

console.log(motos); // saída: [ 'CG 160', 'Biz 125', 'Hayabusa', 'Falcon', 'Ténéré 700' ]
```

Também podemos remover elementos ao mesmo tempo em que adicionamos, pois ele primeiro remove os elementos desejados e depois adiciona os novos.

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
let itensExcluidos = motos.splice(1,1, 'Hayabusa', 'Falcon');

console.log(motos); // saída: [ 'CG 160', 'Hayabusa', 'Falcon', 'Ténéré 700' ]
console.log(itensExcluidos); // saída: [ 'Biz 125' ]
```

## Removendo elementos em uma posição específica de um array

Podemos remover elementos a partir de uma posição específica de um array utilizando o método `splice()`, para fazer a remoção de arrays esse método irá precisar receber dois argumentos da seguinte forma:

```js
nomeDaArray.splice(position, num);
```

> **position** determina a posição do índice inicial  
> **num** determina a quantidade de elementos que serão excluídos  

Vamos criar um array motos contendo alguns nomes de motos para utilizar como  exemplo

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
```

Vamos  remover o elemento do array que contém a `'Biz 125'`, para fazer isso iremos adicionar os argumento no método `splice()`, no primeiro argumento iremos adicionar o **índice 1** e para remover apenas um item iremos adicionar o **valor 1** para o segundo argumento.

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
motos.splice(1,1);

console.log(motos); // saída: [ 'CG 160', 'Ténéré 700' ]
```

Como podemos ver o elemento contendo a `'Biz 125'` foi removido, agora vamos remover os dois primeiros itens, vamos passar no primeiro argumento o índice 0, e para remover dois valores iremos utilizar o valor 2.

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
motos.splice(0,2);

console.log(motos); // saída: [ 'Ténéré 700' ]
```

Os dois primeiros valores foram removidos, assim como nos métodos anteriores, se atribuirmos o valor a uma variável, os itens removidos serão atribuídos à variável.

```js
let motos = ['CG 160', 'Biz 125', 'Ténéré 700'];
let itensExcluidos = motos.splice(0,2);

console.log(motos); // saída: [ 'Ténéré 700' ]
console.log(itensExcluidos); // saída: [ 'CG 160', 'Biz 125' ]
```

Os dois itens excluídos foram armazenados na variável `itensExcluidos`.

Agora vamos ver como adicionar elementos no array.
