# if

A estrutura condicional (if) permite ao JavaScript executar um trecho de código somente se uma determinada condição for verdadeira.

Sintaxe:

```js
if(condicao) {
// Código que será executado se caso a condição for verdadeira
}
```

como podemos ver, para utilizar o (if) iremos iniciar com a palavra reservada, dentro dos parenteses iremos adicionar a condição e dentro das chaves o conteúdo que será executado ou exibido caso essa condição for verdadeira.

Vamos transformar aquele exemplo do sorvete em um (if), vamos criar duas variáveis, uma com o meuDinheiro que irá representar a quantidade de dinheiro que possuo e outra variável com o precoDoSorvete que irá conter o preço do sorvete, em seguida iremos utilizar a palavra reservada (if) e dentro dos parentes iremos adicionar a condição que nesse exemplo será meuDinheiro é maior ou igual a precoDoSorvete e dentro das chaves iremos adicionar o conteúdo que será executado caso a condição seja verdadeira.

```js
let meuDinheiro = 5;
let precoDoSorvete = 4.50;
if(meuDinheiro >= precoDoSorvete) {
 console.log('Possui o valor para comprar o sorvete');
}
```

Mas repare uma uma coisa, caso a condição for verdadeira irá aparecer a mensagem 'Tem dinheiro', mas caso se caso a condição for falsa não irá aparecer nada, mas podemos adicionar um conteúdo para ser executado/mostrado caso a condição seja falsa e para isso iremos utilizar a palavra chave (else).

## else

Existem casos em que precisamos executar uma condição caso ela seja verdadeira e também quando ela for falsa, para executar um conteúdo caso seja falso iremos utilizar a palavra reservada else em seguida iremos adiciona o conteúdo que será executado caso a condição seja falsa dentro das chaves.

```js
let dinheiro = 2;
let precoSorvete = 4.50;
if(dinheiro >= precoSorvete) {
 console.log('Possui o valor para comprar o sorvete');
} else {
 console.log('Não possui o valor para comprar o sorvete');
}
```

Agora temos uma mensagem para a condição verdadeira e outra para a condição falsa.
Também podemos adicionar mais condições se caso a condição anterior for falsa, para isso iremos utilizar o (else if)

## else if

Podemos utilizar o (else if) para criar outra condição se caso a condição anterior for falsa, mas ela só será executada se caso a condição anterior for falsa e também terá que ser adicionada antes do (else).

```js
let dinheiro = 2;
let precoSorvete = 4.50;
let cupomDesconto = 2.50;
if(dinheiro >= precoSorvete) {
 console.log('Possui o valor para comprar o sorvete');
} else if (dinheiro >= (precoSorvete - cupomDesconto)) {
 console.log('Utilizando o cupom você consegue comprar o sorvete');
} else {
 console.log('Não possui o valor para comprar o sorvete');
}
```

Adicionamos uma variável com o nome cupomDesconto, iremos utilizar essa variável como um cupom de desconto e iremos criar um (else if) onde iremos calcular se a variável dinheiro é maior ou igual precoSorvete menos cupomDesconto.
se a variável dinheiro for maior será exibido a mensagem 'Utilizando o cupom você consegue comprar o sorvete', caso a condição também for falsa ele irá pular para o proximo (else if) e irá finalizar no ultimo (else).

## Condições Verdadeiras

O if irá parar a execução de verificação das condições no momento em que achar uma condição verdadeira, mesmo se existir mais condições verdadeiras abaixo, então tome cuidado, pois ele irá parar a verificação no momento em que encontrar a primeira condição verdadeira.

Vamos criar um if que possua duas condições verdadeiras:

```js
const numero = 9;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 3');
} else if (numero >= 4 && numero <= 7) {
    console.log('O número está entre 4 e 7');
} else if (numero >= 8 && numero <= 10) {
    console.log('O número está entre 8 e 10');
} else if (numero === 9) {
    console.log('O número o 9');
} else {
    console.log('O número não está entre 0 e 10');
}
```

Nesse if temos duas condições verdadeira, a que verifica se o número está entre 8 e 10 e a que verifica se o número é o 9. Quando executamos esse if ele só irá mostrar que a primeira condição é verdadeira, ou seja, só irá mostrar que o número está entre 8 e 10, mas não irá mostrar a próxima condição que verifica se o número é o 9.

