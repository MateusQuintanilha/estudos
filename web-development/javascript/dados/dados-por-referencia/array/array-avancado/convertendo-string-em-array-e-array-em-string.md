# Convertendo string em array e array em string

## Convertendo String em Array

Podemos usar o método `split()` para converter uma string em um array, para isso precisamos de algo em comum entre os valores que desejamos converter em array, esse ponto em comum será passado como um argumento.

sintaxe:

```js
nomeDaString.split();
```

Vamos criar uma variável com uma string que contém um nome:

```js
const nome = 'Ralph Stevenson Patton';
```

Qual o ponto em comum entre os nomes que podemos usar para criar o array? Podemos usar os espaços. Vamos criar uma nova variável que irá conter o array:

```js
const nome = 'Ralph Stevenson Patton';
const nomeSeparado = nome.split(' ');

console.log(nomeSeparado); // saída: [ 'Ralph', 'Stevenson', 'Patton' ]
```

## Converter um Array em String

Podemos usar o método `join()` para converter um array em uma string, iremos precisar de um ponto em comum para separar os elementos, normalmente iremos usar o espaço:

```js
const nomeSeparado = [ 'Ralph', 'Stevenson', 'Patton' ];
const nome = nomeSeparado.join(' ');

console.log(nome); // saída: Ralph Stevenson Patton
```
