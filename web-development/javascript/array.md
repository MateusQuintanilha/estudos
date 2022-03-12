
# Array

Um array é uma lista ordenada de valores que contém um índice numérico e um elemento, que pode ser de qualquer tipo primitivo, objeto, uma função ou até mesmo outro array.

## Sintaxe

Podemos criar um array utilizando **a declaração direta ou a declaração literal**

Veja a seguir a sintaxe para cada uma das formas de criar um array:

**Declaração Direta**

```js
let arrayDireta = new Array();
```

**Declaração Literal**

```js
let arrayLiteral = [];
```

Criamos os arrays vazio, agora vamos criar os mesmos arrays mas com elementos dentro, quando for inserir mais de um elemento é necessário separa-los e para fazer isso utilizamos a vírgula `,`.

**Declaração Direta**

```js
let arrayDireta = new Array(elemento01, elemento02, elemento03);
```

**Declaração Literal**

```js
let arrayLiteral = [elemento01, elemento02, elemento03];
```

## Utilizando um array

**Como vimos, existem formas diferentes para se declarar um array, a mais recomenda é a declaração do tipo literal, uma vez que essa forma é mais prática, tem maior legibilidade e velocidade de execução**

Então a partir de agora irei utilizar apenas a forma literal.

## Acessando elementos de um array

Podemos acessar elementos de um array utilizando o índice, os elementos são indexados com base em zero. Em outras palavras, o primeiro elemento de um array terá o índice `(0)`, o segundo elemento terá o índice `(1)` e assim por diante.

Para acessar um elemento de um array iremos utilizar o nome do array seguido de um par de colchetes `[]`, dentro desses colchetes iremos adicionar o número do índice desejado.

Vamos criar um array como o nome frutas e adicionar três elementos para utilizar como exemplo

```js
// índice       0        1        2
let frutas = ['Maçã', 'Banana', 'Uva'];
```

Para acessar o elemento com a maçã iremos utilizar o índice `(0)`.

```js
frutas[0];

console.log(frutas[0]); // saída: Maçã
```

Para acessar o elemento com a banana iremos utilizar o índice `(1)`.

```js
frutas[1];

console.log(frutas[1]); // saída: Banana
```

E para acessar o elemento com a uva iremos utilizar o índice `(2)`.

```js
frutas[2];

console.log(frutas[2]); // saída: Uva
```

Caso tente utilizar um índice que não tenha um valor, o índice irá retornar `undefined`.

```js
frutas[3];

console.log(frutas[3]); // saída: undefined
```

## Adicionando e alterando elementos em um array

para adicionar ou alterar um valor de um elemento em um array iremos utilizar o nome do array com a índice e atribuir um valor no índice desejado.

Vamos utilizar o array do exemplo anterior como exemplo:

```js
let frutas = ['Maçã', 'Banana', 'Uva'];
```

Vamos trocar o valor `'Maçã'` por `'Caju'`, para fazer isso precisamos acessar o índice 0 e atribuir o valor `'Caju'`.

```js
let frutas = ['Maçã', 'Banana', 'Uva'];
frutas[0] = 'Caju';

console.log(frutas); // saída: [ 'Caju', 'Banana', 'Uva' ]
```

## Removendo o primeiro elemento de um array

Para remover o primeiro item de um array iremos utilizar o método `shift()`. Além de excluir o elemento, ele retorna o item excluído, caso o valor seja atribuído a uma variável ou constante.

Vamos criar um array com o nome de legumes que irá conter alguns nomes de legumes.

```js
let legumes = ['Abóbora', 'Beterraba', 'Chuchu', 'Inhame'];
legumes.shift();

console.log(legumes); // saída: [ 'Beterraba', 'Chuchu', 'Inhame' ]
```

Como podemos ver, o primeiro elemento que  contém a 'Abóbora' foi removido, agora vamos atribuir o `legumes.shift();` a uma variável com o nome de `itemExcluido` que irá receber o elemento excluído.

```js
let legumes = ['Abóbora', 'Beterraba', 'Chuchu', 'Inhame'];
let itemExcluido = legumes.shift();

console.log(legumes); // saída: [ 'Beterraba', 'Chuchu', 'Inhame' ]
console.log(itemExcluido); // saída: 'Abóbora'
```

## Removendo o ultimo elemento de um array

Também podemos remover o último elemento de um array. Para isso, utilizamos o método `pop()`. Além de excluir o elemento, ele retorna o item excluído, caso o valor seja atribuído a uma variável ou constante.

Vamos continuar utilizando o array do exemplo anterior como exemplo

```js
let legumes = ['Abóbora', 'Beterraba', 'Chuchu', 'Inhame'];
legumes.pop();

console.log(legumes); // saída: [ 'Abóbora', 'Beterraba', 'Chuchu' ]
```

Como podemos ver, o último elemento foi excluído, além disso, o método retorna o elemento excluído, caos o valor seja atribuído a uam variável ou constante.

```js
let itemExcluido = legumes.pop();

console.log(legumes); // saída: [ 'Abóbora', 'Beterraba', 'Chuchu' ]
console.log(itemExcluido); // saída: 'Inhame'
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

## Adicionando elementos no início de um array

Utilizamos o método `unshift()` para adicionar um ou mais elementos ao início de um array da seguinte forma:

```js
nomeDoArray.unshift(valor);
```
> **valor** é o elemento que desejamos adicionar  no inicio do array, se caso for passar mais de um elemento, separe eles com uma vírgula `(,)`.


Para este exemplo iremos utilizar um array com modelos de carros.

```js
let carros = ['Gol', 'Opala', 'Uno'];
carros.unshift('Monza', 'Chevette');

console.log(carros); // saída: ['Monza', 'Chevette', 'Gol', 'Opala', 'Uno']
```

Como podemos ver na saída, os valores `'Monza'` e `'Chevette'` foram adicionados ao início do array.

se atribuirmos uma variável a essa declaração também irá retornar a quantidade de elementos no array.

```js
let carros = ['Gol', 'Opala', 'Uno'];
let resultado = carros.unshift('Monza', 'Chevette');

console.log(carros); // saída: ['Monza', 'Chevette', 'Gol', 'Opala', 'Uno']
console.log(resultado) // saída: 5
```

## Adicionando elementos no final de um array

Utilizamos o método `push()` para adicionar um ou mais elementos ao final de um array.

```js
nomeDoArray.push(valor);
```
> **valor** é o elemento que desejamos adicionar  no inicio do array, se caso for passar mais de um elemento, separe eles com uma vírgula `(,)`.

Nesse exemplo iremos utilizar o array sorvetes para armazenar os nomes de alguns tipos de sorvetes.

```js
let sorvetes = ['Morango', 'Chocolate', 'Limão'];
sorvetes.push('Frutas Vermelhas', 'Ninho Trufado');

console.log(sorvetes); // saída: ['Morango', 'Chocolate', 'Limão', 'Flocos', 'Ninho']
```
Como podemos ver na saída, os valores `'Flocos'` e `'Ninho'` foram adicionados ao final do array.

## Fatiando um Array

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];
const pegandoAlunos = alunos.slice(0, 3);

console.log(pegandoAlunos); // saída: [ 'Luiz', 'Maria', 'João' ]
console.log(alunos); // saída: [ 'Luiz', 'Maria', 'João', 'Luíza', 'Eduardo' ]
```

Podemos pegar os dados dos índices de um array sem alterar o array em si.

## Verificando se estamos trabalhando com um array

Podemos verificar se estamos trabalhando com um array usando o instanceof Array, irá retornar false ou true.

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];

console.log(alunos instanceof Array) // saída: true
```

## Iterando arrays

Podemos utilizar diferentes formas de **iterar** os elementos de um array. Uma das formas mai utilizadas é a estrutura de repetição **for**, podemos utilizar a propriedade **length()** que possui a função de informar a quantidade de elementos existentes em um array, para controlar o momento de interrupção do loop.

Vamos utilizar um array games com alguns nomes de jogos como exemplo:

```js
let games = ['GTA', 'Need For Speed', 'Call Of Duty'];

for (let i = 0; i < games.length; i++) {
  console.log(`O item ${i} é o jogo ${games[i]}`);
}
/*  saída:
* O item 0 é o jogo GTA
* O item 1 é o jogo Need For Speed
* O item 2 é o jogo Call Of Duty
 */
```
