# for

O `for` cria uma estrutura de repetição que será repetida até que a condição especificada seja falsa. O (for) aceita três parâmetros (valor de inicialização, condição e iteração) , esses três parâmetros são separados por ponto e vírgula (;).

Para criar um laço for iremos utilizar a palavra reservada (for) seguida de um par de parenteses e um par de chaves, dentro dos parenteses iremos passar os parâmetros e dentro das chaves iremos inserir o conteúdo que será executado até que a condição seja falsa.

Sintaxe:

```js
for (inicializacao; condicao; iteracao) {
 conteúdo que será executado
}

```

* inicializacao:
  * Iremos criar um variável, geralmente com o nome de (i) e atribuímos um valor, normalmente é 0 mas irá depender do objetivo desse (for), como veremos em exemplos.
* condicao:
  * Iremos adicionar a condição que irá verificar se o loop é verdadeiro ou falso.
* iteracao:
  * Iremos adicionar a condição que irá mudar o valor da inicialização a cada execução do loop, normalmente utilizamos os operadores unários de incremento e decremento.

Exemplo: Vamos criar um for que irá imprimir no console o valor de 0 a 10.

```js
for (let i = 0; i <= 10; i++) {
 console.log(i)
} // saída: 0 1 2 3 4 5 6 7 8 9 10
```

* `let i =0`: é a inicializacao, criamos uma variável de nome (i) e com atribuímos um valor de (0), esse valor irá mudar a cada loop pela iteração.
* `i <= 10`: é a condicao, enquanto i for menor ou igual a 10 o for será executado.
* `i++`: é a iteracao, nesse caso a cada loop a variável (i) terá um incremento de 1 em seu valor.

Também podemos fazer a contagem de 10 a 0.

```js
for (let i = 10; i >= 0; i--) {
 console.log(i)
} // saída: 10 9 8 7 6 5 4 3 2 1 0
```

Também podemos iteração com valores diferentes de 1 em 1, para isso iremos usar o += valor, vamos fazer pular de 2 em 2:

```js
for (let i = 0; i <= 10; i += 2) {
     console.log(i)
    } // saída: 0 2 4 6 8 10
```

Também podemos iniciar com valores diferentes de 0, vamos iniciar com o valor 1:

```js
for (let i = 1; i <= 10; i += 2) {
     console.log(i)
    } // saída: 1 3 5 7 9
```

Neste caso atribuímos um valor de 10 para a inicialização, na condição invertemos, agora o loop será executando enquanto (i) for menor ou igual a (0) e trocamos a condição da iteração que antes era de incremento e agora passou a ser de decremento, agora a cada loop o valor da inicialização será diminuído por (1).

Agora vamos fazer um (for) que irá percorrer uma array e imprimir no console o conteúdo de cada posição dessa array.

Vamos criar uma array com nomes de animais em seguida vamos criar um (for), na inicialização iremos atribuir o valor (0), pois queremos que ele inicie na primeira posição do array em seguida iremos adicionar a condição, e a condição será, enquanto i for menor que animais.length(o length é utilizado para informar o total de posições de um array) em seguida iremos adicionar a iteração que será de incremento. E como conteúdo iremos adicionar o console.log e iremos adicionar dentro o `animais[i]`, pois a variável i está representando a posição desse array, então a cada loop percorrido irá imprimir uma posição diferente do array.

```js
let animais = ['Gato', 'Cachorro', 'Cavalo', 'Porco', 'Galinha', 'Pato']
for(let i= 0; i < animais.length; i++) {
 console.log(animais[i])
}// saída: Gato Cachorro Cavalo Porco Galinha Pato
```

## Checando de um valor é par ou impar

Podemos chegar se um valor é par ou impar usando o operador de resto da divisão.

```js
for (let i = 0; i <= 5; i++) {
     const par = i % 2 === 0;
        console.log(i); // saída: 0 true, 1 false, 2 true, 3 false, 4 true, 5 false
    } 
```

### Imprimindo valores par

```js
for (let i = 0; i <= 10; i++) {
     const par = i % 2 === 0;
    
    if(par) console.log(i); // saída: 0 2 4 6 8 10
    } 
```

### Imprimindo valores impar

```js
for (let i = 0; i <= 10; i++) {
     const impar = i % 2 === 1;
    
    if(impar) console.log(i); // saída: 1 3 5 7 9
    } 
```
