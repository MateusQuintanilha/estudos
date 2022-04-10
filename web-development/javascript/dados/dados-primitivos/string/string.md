# String

O tipo de dados string é uma cadeia de zero ou mais caracteres Unicode (letras, números, sinais de pontuação e símbolos) usados para representar texto. Os caracteres devem estar entre aspas simples, aspas duplas ou crases. Iremos ver exemplo dessas 3 formas e suas diferenças.

## Aspas Simples

Usamos aspas simples `' '` quando precisarmos utilizar aspas duplas no texto, pois se utilizarmos o mesmo tipo de aspas dentro do texto gerará conflito.

```js
let lasanha = 'bora "comer muita lasanha"'; 

console.log(lasanha);// saída: bora "comer muita lasanha"
```

## Aspas Duplas

Usamos aspas duplas `" "` quando precisar utilizar aspas simples no texto.

```js
let time = "It's time"; 

console.log(time);// saída: It's time
```

## concatenando conteúdos

Podemos juntar duas strings em uma, também podemos fazer isso com string e number mas os dados do tipo number serão convertidos para string. Para concatenar iremos utilizar o símbolo de mais ( + ) para juntar os conteúdos.

```js
let nome = "Mateus";
let idade = 26;
const concatenando = 'Meu nome é ' + nome + ' e tenho ' + idade + ' anos';

console.log(concatenando) // saída: Meu nome é Mateus e tenho 26 anos
```

## Crases

Usamos crases ` `` ` para envolver o conteúdo, com as crases podemos usar aspas simples e duplas no texto.

```js
let sorvete = `"Gosto" muito de 'sorvete'`;

console.log(sorvete); // saída: "Gosto" muito de 'sorvete'
```

E com as crases podemos utilizar uma nova forma de concatenar o conteúdo, essa nova forma é chamada de Template Literals.

## Template Literals

Não precisamos mais utilizar o sinal de mais para concatenar um conteúdo, agora podemos utilizar o simbolo de cifrão seguido da abertura e fechamento de chaves `${}`.

Vamos utilizar o mesmo exemplo que foi usado na explicação sobre concatenação:

```js
let nome = "Mateus";
let idade = 26;
const templateLiterals = `Meu nome é ${nome} e tenho ${idade} anos`;

console.log(templateLiterals)// saída: Meu nome é Mateus e tenho 26 anos
```

Podemos usar vários tipos de dados no template literals como boolean, funções e também podemos fazer cálculos, mas veremos exemplos disso quando chegarmos na parte de explicação sobre cada um deles.
