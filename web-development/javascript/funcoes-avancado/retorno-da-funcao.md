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

