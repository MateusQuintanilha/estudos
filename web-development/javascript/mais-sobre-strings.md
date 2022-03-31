# Trabalhando com Strings

## `\`

Podemos usar uma barra invertida no conteúdo da string para fazer algumas alterações no conteúdo.

```js
let umaString = 'Um "texto"';
console.log(umaString); // saída: Um "texto"
```

```js
let umaString = 'Um \\texto';
console.log(umaString); // saída: Um \texto
```

---

## As Strings são indexadas

As strings são indexadas, e podemos acessar esse índice.

```js
//    índice     01234567
let umaString = 'Um texto';
```

Então podemos ver apena um índice, vamos acessar a letra que está no índice 5, para fazer isso iremos adicionar um par de colchetes com o índice desejado dentro após o nome da variável que contem a string.

```js
//    Index      01234567
let umaString = 'Um texto';

console.log(umaString[5]); // saída: x
```

Outra forma de fazer isso é usando o método charAt();

```js
//    Index      01234567
let umaString = 'Um texto';

console.log(umaString.charAt(6)); // saída: t
```

outro método é o charCodeAt(), ele irá pegar o código da letra

```js
//    Index      01234567
let umaString = 'Um texto';

console.log(umaString.charCodeAt(6)); // saída: 116
```

Também podemos pesquisar por uma palavra para saber em qual índice ela se inicia.

```js
//    Index      01234567
let umaString = 'Um texto';

console.log(umaString.indexOf('texto')); // saída: 3
```

Também podemos começar a pesquisa do final do índice para o inicio.

```js
//    Index      01234567
let umaString = 'Um texto';

console.log(umaString.lastIndexOf('texto')); // saída: 3
```

---

## Concatenando Strings

Podemos concatenar uma string de três formas diferentes.

```js
let umaString = 'Um texto';

console.log(umaString.concat(' em um lindo dia.'));
// saída: Um texto em um lindo dia

console.log(umaString + ' em um lindo dia.');
// saída: Um texto em um lindo dia

console.log(`${umaString} em um lindo dia.`);
// saída: Um texto em um lindo dia
```

## Procurando dentro da string

### Retorna todas as letra minúsculas

```js
let umaString = "Um texto";

console.log(umaString.match(/[a-z]/g)); 
// saída: [ 'm', 't', 'e', 'x', 't', 'o' ]
```

### Retorna todas as letras maiúsculas

```js
let umaString = "Um texto";

console.log(umaString.match(/[A-Z]/g)); 
// saída: [ 'U' ]
```

### Retorna todas as letras

```js
let umaString = "Um texto";

console.log(umaString.match(/[A-z]/g)); 
// saída: [ 'U', 'm', 't','e', 'x', 't','o']
```

## Retornar o índice do conteúdo

```js
let umaString = "Um texto";

console.log(umaString.search(/x/)); // saída: 5
```

## Substitui uma palavra por outro conteúdo

```js
let umaString = "Um texto";

console.log(umaString.replace('Um', 'Outro')); // saída: Outro texto
```

também podemos usar expressão regular (utilize o g para repetir para todo o texto).

```js
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.replace(/r/g, '#')); 
// saída: O #ato #oeu a #oupa do #ei de #oma.
```

## Retorna o tamanho do índice

```js
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.length); // saída: 35
```

## Pega parte de um conteúdo através do índice

```js
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.slice(2, 6)); // saída: rato
```

## divide uma string em arrays através de um caractere

```js
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.split(' ')); 
// saída: [ 'O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma.' ]

```

Nesse caso dividimos a string pelo espaço.

## Deixa toda a string em maiúscula

```js
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.toLocaleUpperCase()); 
// saída: O RATO ROEU A ROUPA DO REI DE ROMA.
```

## Deixa toda a string em minúscula

```js
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.toLocaleLowerCase()); 
// saída: o rato roeu a roupa do rei de roma.
```
