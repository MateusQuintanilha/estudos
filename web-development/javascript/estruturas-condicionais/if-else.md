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
