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