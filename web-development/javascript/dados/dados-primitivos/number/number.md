# Number

Números regulares em JavaScript são armazenados no formato de 64 bits IEEE-754-2008, também conhecido como “números de pontos flutuantes de precisão dupla”. Esses são os números que estamos usando na maioria das vezes.

Ao contrário de muitas linguagens, JavaScript não faz distinção entre valores inteiros e valores em ponto flutuante. Todos os números em JavaScript são representados como valores em ponto flutuante.

## Números inteiros

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

## Números de Ponto Flutuante/Float (números decimais)

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

## Exponenciação

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

## Hexadecimais

Os números hexadecimais são amplamente utilizados para representar cores, codificar caracteres e muitas outras coisas. Então, naturalmente, existe uma maneira mais curta de escrevê-los.

Todo valor hexadecimal deverá ser iniciado com `0x` seguido do valor em hexadecimal e Podemos escrever tanto em minúsculo como em maiúsculo:

os valores podem ir de (0 - 9) e de (A - F) a letra ( A ) representa o número 11 e a letra ( F ) representa o número 15, então o valor pode ir de 0 a 15, 0 sendo o menor valor e F o maior.

```js
let hexa = 0xff; // 255 em hexadecimal
let hexa = 0xFF; //255 em hexadecimal
```

## Binário

Todo valor binário deverá ser iniciado com `0b`.

```js
let binario = 0b11111111; // 255 em binário
```

## Octal

Todo valor octal deverá ser iniciado com `0o`.

```js
let octal = 0o377; // 255 em octal
```

## NaN

É um valor numérico especial, é uma abreviação de Not a Number, que significa que o número é inválido.

Por exemplo, a divisão de uma string por um número, vai retornar NaN
como no exemplo a seguir:

```js
console.log("sorvete" / 2); // saída: NaN
```

## Infinity

É um valor numérico especial, que representa o valor infinito positivo.

```js
let infinitoPositivo = Infinity; // saída: Infinity
```

Também temos a sua contraparte que representa o valor infinito negativo.

```js
let infinitoPositivo = -Infinity; // saída: -Infinity
```
