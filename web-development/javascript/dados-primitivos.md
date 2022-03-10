# Dados Primitivos

Os tipos de dados primitivos incluem strings, números, booleans e alguns tipos especiais como null, undefined e Symbol.

## String

O tipo de dados string é uma cadeia de zero ou mais caracteres Unicode (letras, números, sinais de pontuação e símbolos) usados para representar texto. Os caracteres devem estar entre aspas simples, aspas duplas ou crases. Iremos ver exemplo dessas 3 formas e suas diferenças.

### Aspas Simples

Usamos aspas simples `' '` quando precisarmos utilizar aspas duplas no texto, pois se utilizarmos o mesmo tipo de aspas dentro do texto gerará conflito.

```js
let lasanha = 'bora "comer muita lasanha"'; 

console.log(lasanha);// saída: bora "comer muita lasanha"
```

### Aspas Duplas

Usamos aspas duplas `" "` quando precisar utilizar aspas simples no texto.

```js
let time = "It's time"; 

console.log(time);// saída: It's time
```

### concatenando conteúdos

Podemos juntar duas strings em uma, também podemos fazer isso com string e number mas os dados do tipo number serão convertidos para string. Para concatenar iremos utilizar o símbolo de mais ( + ) para juntar os conteúdos.

```js
let nome = "Mateus";
let idade = 26;
const concatenando = 'Meu nome é ' + nome + ' e tenho ' + idade + ' anos';

console.log(concatenando) // saída: Meu nome é Mateus e tenho 26 anos
```

### Crases

Usamos crases ` `` ` para envolver o conteúdo, com as crases podemos usar aspas simples e duplas no texto.

```js
let sorvete = `"Gosto" muito de 'sorvete'`;

console.log(sorvete); // saída: "Gosto" muito de 'sorvete'
```

E com as crases podemos utilizar uma nova forma de concatenar o conteúdo, essa nova forma é chamada de Template Literals.

### Template Literals

Não precisamos mais utilizar o sinal de mais para concatenar um conteúdo, agora podemos utilizar o simbolo de cifrão seguido da abertura e fechamento de chaves `${}`.

Vamos utilizar o mesmo exemplo que foi usado na explicação sobre concatenação:

```js
let nome = "Mateus";
let idade = 26;
const templateLiterals = `Meu nome é ${nome} e tenho ${idade} anos`;

console.log(templateLiterals)// saída: Meu nome é Mateus e tenho 26 anos
```

Podemos usar vários tipos de dados no template literals como boolean, funções e também podemos fazer cálculos, mas veremos exemplos disso quando chegarmos na parte de explicação sobre cada um deles.

---

## number

Números regulares em JavaScript são armazenados no formato de 64 bits IEEE-754-2008, também conhecido como “números de pontos flutuantes de precisão dupla”. Esses são os números que estamos usando na maioria das vezes.

Ao contrário de muitas linguagens, JavaScript não faz distinção entre valores inteiros e valores em ponto flutuante. Todos os números em JavaScript são representados como valores em ponto flutuante.

### Números inteiros

Exemplos de números inteiros positivo e negativo

```js
let numeroInteiroPositivo = 33;
let numeroInteiroNegativo = -33;
```

Agora imagine que precisamos escrever 1 bilhão, podemos escrever dessa maneira:

```js
let bilhao = 1000000000;
```

Mas também podemos usar o underline `_` como separador:

```js
let bilhao_ = 1_000_000_000;
```

### Números de Ponto Flutuante/Float (números decimais)

Diferente do nosso sistema numérico que utiliza a vírgula `,` para separar as casas decimais no JavaScript é utilizado o ponto `.`

```js
let numeroFloatPositivo = 33.33;
let numeroFloatNegativo = -33.33;
```

Caso o número a esquerda do ponto seja 0 podemos apenas adicionar um ponto e digitar as casas decimais:

```js
let numeroFloatPositivo = .33;
let numeroFloatNegativo = -.33;
```

### Exponenciação

Podemos encurtar um número anexando a letra `e` a ele e especificando a contagem de zeros

vamos simplificar 1 bilhão.

```js
let bilhao = 1000000000;
```
vamos colocar o número 1 adicionar a letra `e` e adicionar o número 9, pois 1 bilhão é 1 x 10⁹ ou 1 x 10 multiplicado por 10 nove vezes.

Podemos escrever tanto em minúsculo como em maiúsculo:
```js
let bilhaoe = 1e9;
let bilhaoE = 1E9;
```

Também podemos fazer com números quebrados como por exemplo 1.3 bilhões:
vamos utilizar o 1.3 seguido da letra `e` e iremos adicionar o número 9, pois 1.3 bilhões é a mesma coisa que 1.3 x 10⁹ ou 1.3 x 10 multiplicado por 10 nove vezes. 

```js
let bilhaoe = 1.3e9;
let bilhaoE = 1.3E9;
```

### Hexadecimais

Os números hexadecimais são amplamente utilizados para representar cores, codificar caracteres e muitas outras coisas. Então, naturalmente, existe uma maneira mais curta de escrevê-los.

Todo valor hexadecimal deverá ser iniciado com `0x` seguido do valor em hexadecimal e Podemos escrever tanto em minúsculo como em maiúsculo:

os valores podem ir de (0 - 9) e de (A - F) a letra ( A ) representa o número 11 e a letra ( F ) representa o número 15, então o valor pode ir de 0 a 15, 0 sendo o menor valor e F o maior.

```js
let hexa = 0xff; // 255 em hexadecimal
let hexa = 0xFF; //255 em hexadecimal
```

### Binário

Todo valor binário deverá ser iniciado com `0b`.

```js
let binario = 0b11111111; // 255 em binário
```

### Octal

Todo valor octal deverá ser iniciado com `0o`.

```js
let octal = 0o377; // 255 em octal
```

### NaN

É um valor numérico especial, é uma abreviação de Not a Number, que significa que o número é inválido.

Por exemplo, a divisão de uma string por um número, vai retornar NaN
como no exemplo a seguir:

```js
console.log("sorvete" / 2); // saída: NaN
```

### Infinity

É um valor numérico especial, que representa o valor infinito positivo.

```js
let infinitoPositivo = Infinity; // saída: Infinity
```

Também temos a sua contraparte que representa o valor infinito negativo.

```js
let infinitoPositivo = -Infinity; // saída: -Infinity
```

---

## Boolean

O tipo de dado boolean é utilizado para  classificar coisas ou fenômenos com 2 valores, verdadeiro ou falso.

Exemplo:

O número 5 é maior que o número 8? Resposta: FALSO  
O número 3 é maior que o número 2? Resposta: VERDADEIRO

Perceba que todas essas perguntas só possuem duas respostas possíveis: Verdadeiro ou Falso.

```js
let verdadeiro = true; // saída: true
let falso = false; // saída: false
```

---

## undefined

O tipo undefined é um tipo primitivo que possui um valor especial undefined.

Por padrão, quando uma variável é declarada, mas não inicializada, é atribuído a ela o valor undefined.

```js
let declarando; // saída: undefined
let valorIndefinido = undefined; // saída: undefined
```

---

## null

O tipo null é um tipo primitivo que possui o valor null. O JavaScript define que null é um ponteiro de objeto vazio.

```js
let typeNull = null; // saída: null
```

É uma boa prática atribuir null a uma variável que irá guardar um objeto no futuro.

## Symbol

Veremos sobre Symbol no futuro, já que é um método mais avançado.
