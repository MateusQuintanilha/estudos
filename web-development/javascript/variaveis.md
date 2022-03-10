
# Variáveis

Utilizamos variáveis com um nome simbólico para armazenar e identificar  dados. Esse nome simbólico é chamado de identificador vimos sobre ele na introdução ao JavaScript.

## Declaração de Variáveis

Podemos declarar uma variável de quatro formas:

### Identificador

Podemos declarar uma variável apenas utilizando o identificador mas isso não é recomendável, pois ela não respeita os escopos.

Sintaxe:

```js
nomeDaVariavel;
```

Não é possível só declarar uma variável utilizando o seu identificador. O JavaScript irá interpretar que a declaração está tentando acessar uma variável existente, e como ela não existe, irá gerar um código de erro:

```js
ReferenceError: minhaVariavel is not defined
```

Pra conseguir criar uma variável utilizando o identificador será preciso atribuir um valor no momento da declaração:

```js
minhaVariavel = 1;
```

### var

Podemos declarar uma variável utilizando a palavra reservada ***var***, mas cuidado ao utilizar, porque ela sofre de [Hoisting](./hoisting.md).

Sintaxe:

```js
var nomeDaVariavel;
```

### let

Podemos declarar uma variável utilizando a palavra reservada ***let***, esse é um métodos recomendados para a criação de variáveis pois ela não sofre hoisting e respeita todos os escopos.

```js
let nomeDaVariavel;
```

### const

Podemos declarar uma variável utilizando a palavra reservada ***const***, mas ela tem uma peculiaridade, depois que alguma informação for gravada, ela só irá permitir a leitura das informações e não permitirá qualquer alteração, caso tente alterar alguma informação, será gerado um erro.

```js
const nomeDaVariavel;
```

### Declarando várias variáveis com apenas uma palavra reservada

podemos declarar varias variáveis com a mesma palavra reservada, mas precisamos separar as variáveis com uma vírgula ( ***,*** ).

Sintaxe:

```js
let nomeDaVariavel01, nomeDaVariavel02, nomeDaVariavel03;
```

## Atribuição

Na computação o termo atribuição refere-se a definir ou redefinir o valor armazenado no local de armazenamento indicado pelo nome da variável.

Utilizamos o operador de atribuição básico ***igual*** ( ***=*** )  para atribuir o valor do operando à ***direita*** ao operando à ***esquerda***.

Exemplo:
```js
x = y; // estamos atribuindo o valor de y a x
```

### Atribuindo um valor na declaração de uma variável

podemos atribuir um valor a uma variável no momento de sua declaração

Sintaxe:

```js
let nomeDaVariavel = dadosQueSeraoAtribuidos;
```

### Atribuindo um valor em uma variável existente

Podemos atribuir um valor a uma variável já declarada, caso essa variável já possua um valor esse valor será sobrescrito.

Sintaxe:

```js
let nomeDaVariavel = 1;

nomeDaVariavel = 2;
```

Vamos utilizar o comando `console.log()` para imprimir o conteúdo passado entre parênteses no console.

Resultado:

```js
console.log(nomeDaVariavel) // saída: 2
```

Se tentarmos atribuir um valor a uma variável constante gerará um erro.

```js
const testandoConst = 1;
testandoConst = 2;
```

Resultado:

```js
console.log(testandoConst); // saída: TypeError: Assignment to constant variable.
```

### declarando e atribuindo várias variáveis utilizando apenas uma palavra reservada

Também podemos declarar várias variáveis e atribuir um valor a cada uma delas apenas utilizando uma palavra reservada.

```js
let identificador01 = 1, identificador02 = 3, identificador03 = 6;
```
