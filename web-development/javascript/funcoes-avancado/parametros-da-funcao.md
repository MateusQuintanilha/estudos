# Parâmetros da função

Chamamos de parâmetros as variáveis que declaramos dentro dos parenteses na hora de declarar uma função:

Sintaxe:

```js
function nomeDaFuncao(parametro) {
}
```

Podemos declarar vários parâmetros em uma função, para separar os parâmetros usamos uma vírgula `,`.

```js
function media(valorA, valorB) {
    let media = (valorA + valorB) / 2;
    console.log(media);
}
```

Ao inicializar a função precisamos passar dois valores.

```js
media(8, 7.5); // saída: 7.75
```

Os valores que passamos na inicialização da função são chamados de argumentos e as variáveis que declaramos ao criar a função são chamados de parâmetros.

Ao ***criar uma função***. podemos definir  ***parâmetros***.  
Ao ***executar uma função***, podemos passar ***argumentos***.

Ao criar um função podemos definir parâmetros, imagine os parâmetros como se fossem ruas. Ao executar essa função iremos passar os argumentos, imagine que esses argumentos são carros. São coisas diferentes, o carro não é a rua, o carro utiliza a rua para passar e o mesmo vale para os argumentos.

## arguments

funções definidas com a palavra reservada `function` possui uma variável especial chamada `arguments` que sustenta todos os argumentos enviados na inicialização da função mesmo que a função não possua parâmetros definidos.

Vamos ver um exemplo a seguir:

```js
function testandoArguments() {
    console.log(arguments)
}
testandoArguments('Que loucura', 10, 15); // saída: [Arguments] { '0': 'Que loucura', '1': 10, '2': 15 }
```

como podemos ver, a variável especial `arguments` cria um objeto e adiciona um índice parecido com um array para cada argumento passado na inicialização da função.

Essa variável especial irá funcionar mesmo se adicionarmos parâmetros como podemos ver no exemplo abaixo:

```js
function testandoArguments(a, b, c) {
    console.log(arguments); // saída: [Arguments] { '0': 'Que loucura', '1': 10, '2': 15 }
    console.log(a, b, c); // saída: Que loucura 10 15
}
testandoArguments('Que loucura', 10, 15); 
```

Mas lembrando, essa variável especial só funciona quando usamos a palavra reservada `function` ao criar uma função.

## Parâmetros e Argumentos

Podemos passar mais argumentos que o número de parâmetros existentes, mas os valores excedentes serão ignorados como podemos ver no exemplo a seguir:

```js
function testando(valorA, valorB, valorC) {
    console.log(valorA, valorB, valorC);
}
testando(10, 8, 5, 1); // saída: 10 8 5
```

Mas o mesmo não ocorre caso tente passar menos argumentos que a quantidade de parâmetros declarados na função. Por padrão todos os parâmetros possuem como valor o `undefined` então caso passe um valor menor de argumentos, os restantes serão `undefined`.

```js
function testando(valorA, valorB, valorC) {
    console.log(valorA, valorB, valorC);
}
testando(10, 8); // saída: 10 8 undefined
```

Vamos criar uma função que some dois valores, mas vamos passar só um valor em sua inicialização:

```js
function testando(valorA, valorB) {
    console.log(valorA + valorB);
}
testando(10); // saída: NaN
```

Como um parâmetro não recebeu um argumento em sua iniciação, ele continuou com o seu valor padrão `undefined` e a função tentou somar o valor `10` com o `undefined` e resultou no valor `NaN`.

Para evitar esse tipo de erro podemos adicionar valores padrões para os parâmetros e vamos ver como a seguir.

## Adicionando valor padrão ao parâmetro

Podemos adicionar valores padrões para parâmetros em uma variável no momento em que declaramos uma função, para fazer isso só precisamos atribuir um valor usando o simbolo de igual `=` ao parâmetro desejado:

```js
function soma(x = 0, y = 0) {
    console.log(x + y);
}
soma(); // saída: 0
```

Agora vamos criar uma função de soma com três valores:

```js
function soma(x = 0, y = 3, z = 0) {
    console.log(x + y + z);
}
```

Quero passar o valor x e o valor z, mas quero que o valor y seja o valor padrão, como podemos fazer isso?

Podemos passar o valor `undefined` no argumento que será responsável por passar o valor para o parâmetro y, como isso o valor a ser calculado será o seu valor padrão:

```js
function soma(x = 0, y = 3, z = 0) {
    console.log(x + y + z);
}
soma(5, undefined, 2); // saída: 10
```

O ideal seria refazer a sua lógica, pois esse tipo de código não é legal, mas é uma maneira, caso precise que um argumento assuma o valor padrão do parâmetro.

## Atribuição via desestruturação usando parâmetros

Podemos fazer a atribuição via desestruturação de objeto usando os parâmetros, como podemos ver no exemplo abaixo:

```js
const person = {
    nome: 'Terry',
    sobrenome: 'Steele',
    idade: 29
}

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcao(person) // saída: Terry Steele 29
```

Também podemos fazer a atribuição via desestruturação de arrays usando os parâmetros:

```js
const frutas = ['Uva', 'Morango', 'Laranja']

function funcao([valor0, valor1, valor2]) {
    console.log(valor0, valor1, valor2);
}

funcao(frutas) // saída: Uva Morango Laranja

```

## Usando rest no parâmetro

Podemos usar o rest para pegar o restante dos argumentos, vamos criar um contador que irá somar todos os valores inseridos como argumento.

```js
function contador(...numeros) {
    let contador = 0;
    for(numero of numeros){
        contador += numero;
    }
    console.log(contador);
}
contador(0, 10, 20, 30 , 40, 50, 100); // saída: 250
```

Também podemos passar parâmetros antes do rest e os argumentos que excedem a quantidade de parâmetros irão cair no rest.

```js
function contador(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
contador('+', 0, 10, 20, 30 , 40, 50); // saída: 150
```
