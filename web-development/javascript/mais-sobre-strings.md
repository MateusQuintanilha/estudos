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
