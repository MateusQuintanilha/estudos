# Funções

Uma função é um bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma pode retornar outro valor como por exemplo um resultado de um calculo matemático.

## Declarando uma Função

Para criar uma função iremos utilizar a palavra reservada `function`  em seguida iremos dar um nome para essa função, após darmos um nome a função iremos abrir e fechar parenteses `()`, dentro desses parenteses iremos adicionar os parâmetros, que serão responsáveis por inserir dados para alimentar essa função, podemos passar mais de um parâmetro e para separar esses parâmetros utilizamos uma virgula `,`, em seguida iremos abrir e fechar chaves `{}`, dentro das chaves iremos adicionar o conteúdo dessa função.

Caso precise que a função retorne um valor iremos utilizar a palavra reservada `return` e em seguida adicionamos o conteúdo que deseja que seja retornado.

A sintaxe é a seguinte:

```js
function NomeDaFunction(parameter) {
 Conteúdo da função
}
```

Para chamar/executar uma função precisamos utilizar o nome da função seguido de um par de parenteses `()` e se essa função precisar de argumentos, passe os argumentos dentro dos parenteses.

```js
NomeDaFunction(argumentos);
```

## Parâmetros e Argumentos

Ao ***criar uma função***. podemos definir  ***parâmetros***.  
Ao ***executar uma função***, podemos passar ***argumentos***.

Ao criar uma função definimos os parâmetros, no exemplo abaixo definimos os parâmetros peso e altura.

```js
function imc(peso, altura) {
 const imc = peso / (altura ** 2);
 return imc;
}

imc(94, 1.73) // 31.40
```

Ao executar a função estamos passando argumentos dentro desses parâmetros
Para simplificar vamos fazer uma analogia:

Ao criar um função podemos definir parâmetros, imagine os parâmetros como se fossem ruas. Ao executar essa função iremos passar os argumentos, imagine que esses argumentos são carros. São coisas diferentes, o carro não é a rua, o carro utiliza a rua para passar e o mesmo vale para os parâmetros e os argumentos.

```js
function areaQuadrado(lado) {
 return lado * lado;
};
areaQuadrado(4); // 16
areaQuadrado(10); // 100
areaQuadrado(5); // 25
```

## Adicionando valores padrões aos parâmetros em uma função

Podemos adicionar valores padrões aos parâmetros em uma função caso não seja informado um valor em sua execução. Para isso iremos atribuir os valores nos parâmetros da função

Exemplo de função com parâmetros sem um valor padrão:

```js
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma()); // saída: NaN
```

Tentamos fazer a soma de dois parâmetros sem valores, e tudo que não é atribuído um valor no javascript por padrão terá o valor undefined e como a suma de undefined com undefined não resultará em um valor valido, a função retorna NaN.

Agora vamos atribuir valores padrões para os parâmetros:

```js
function soma(x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}
console.log(soma()); // saída: 0
```

Atribuímos o valor de 0 para os dois parâmetros da função soma e a soma de 0 com 0 resultará em 0.

## Criando uma função anonima

```js
const raiz = function (numero) {
    return numero ** 0.5;
};

console.log(raiz(9)); // saída: 3
```

## Criando uma arrow function

```js
const raiz = (numero) => {
    return numero ** 0.5;
};

console.log(raiz(16)); // saída: 4
```

Quando temos apenas uma linha de conteúdo em uma arrow function podemos eliminar os colchetes e a palavra return

```js
const raiz = (numero) => numero ** 0.5;

console.log(raiz(16)); // saída: 4
```

E quando temos apenas um parâmetro também podemos eliminar os parênteses:

```js
const raiz = numero => numero ** 0.5;

console.log(raiz(16)); // saída: 4
```
