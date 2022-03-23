# do-while

A instrução `do while` possui quase o mesmo funcionamento que o `while`, a diferença é que com o uso dele, mesmo tendo a condição como (false) teremos os comandos executado uma vez.

Sintaxe:

```js
do {
 // Conteúdo e iteração
} while(condicao)
```

Como podemos ver, no (do while) primeiro adicionamos o conteúdo e depois adicionamos a condição, então o conteúdo será executado uma vez para depois fazer a confirmação se a condição é (true) ou (false), caso a condição seja (false) a repetição do loop será finalizada  mas caso seja (true) o loop continuará a ser executado.

Agora vamos ver uma comparação do (while) e do (do while), vamos criar uma variável com o nome de contador e vamos atribuir a ela um valor de 1 em seguida vamos adicionar a condição contador menor que zero, que nesse caso será false pois colocamos o valor 1 no contador.

O while não irá retornar nada

```js
let contador = 1

while(contador <= 0) {
 console.log(contador)
} // Saída: 
```

Já o Do while irá retornar 1

```js
let contador = 1;

do {
 console.log(contador)
} while(contador <= 0) // saída: 1
```

Como podemos ver, o (while) parou antes de executar o código, já o (do while) executou o código uma vez.
