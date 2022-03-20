# Switch Case

As instruções (if else) fazem o trabalho muito bem, mas elas também possuem desvantagens. Elas são boas principalmente para casos em que você tem as condições complexas ( por exemplo, vários operadores lógicos). Mas nos casos em que você deseja definir uma variável para uma determinada opção de valor ou imprimir uma determinada instrução dependendo de uma condição, a sintaxe pode ser um pouco incômoda, especialmente se você tiver um grande número de opções.

Para isso temos a Switch, ela toma uma única expressão/valor como uma entrada e, em seguida, examinam várias opções até encontrar uma que corresponda a esse valor e, em seguida executa o código correspondente que o acompanha e também podemos adicionar para executar algo quando não temos essa opção definida.

Sintaxe:

```js
switch (condição) {
case "condição1":
conteúdo da condição1
   break;
case "condição2":
conteúdo da condição2
   break;
default:
   conteúdo quando não for nem umas das condições descritas anteriormente
}

```

Aqui nós temos:
1. A palavra-chave (switch), seguido por um par de parênteses.
1. Dentro do par de parênteses (()) irá a condição ou expressão.
1. Em seguida abrimos e fechamos as chaves
1. Dentro das chaves iremos adicionar a palavra reservada (case)
1. Após a palavra (case) iremos adicionar a primeira condição seguido de dois pontos (:)
1. Após os dois pontos (:) iremos adicionar o conteúdo caso essa condição seja atendida.
1. Em seguida adicionamos a palavra reservada (break) seguida ponto e vírgula (;) para encerrar essa condição.

Podemos ter várias condições como veremos no exemplo a seguir:

```js
let tipofruta = "Laranja";
switch (tipofruta) {
 case "Laranja":
   console.log("O quilo da laranja está R$0,59");
   break;
 case "Maçã":
   console.log("O quilo da maçã está R$0,32");
   break;
 case "Banana":
   console.log("O quilo da banana está R$0,48>");
   break;
 case "Cereja":
   console.log("O quilo da cereja está R$3,00");
   break;
 case "Manga":
   console.log("O quilo da manga está R$0,56");
   break;
 case "Mamão":
   console.log("O quilo do mamão está R$2,23");
   break;
 default:
   console.log("Desculpe, não temos " + tipofruta);
}
```
