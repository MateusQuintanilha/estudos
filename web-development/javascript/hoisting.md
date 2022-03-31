
# Hoisting ou Hasteamento

Quando executamos uma parte do código, o motor JavaScript cria o Contexto de Execução Global, que possui duas fases:

* Fase de Criação
* Fase de Execução

Durante a Fase de Criação, o motor JavaScript move todas as declarações de variáveis e de funções para o topo do código. Esse recurso é conhecido como hoisting JavaScript.

## Hasteamento de Variáveis

Hasteamento/Hoisting de variáveis significa que o motor do JavaScript, move as declarações das variáveis para o topo do arquivo.

### Utilizando a palavra reservada ***var***

```js
console.log(quantidadeDeUvas); // saída: undefined
var quantidadeDeUvas = 10;
```

A primeira linha do código não causa erro poque a declaração da variável foi movida para o topo do arquivo antes de começar a fase de execução.

Tecnicamente o código se parece dessa forma em sua fase de execução:

```js
var quantidadeDeUvas;

console.log(quantidadeDeUvas); // saída: undefined
quantidadeDeUvas = 10;
```

Isso também acontece quando utilizamos um escopo em bloco

```js
console.log(quantidadeDeUvas); // saída: undefined
{
  var quantidadeDeUvas = 10;
}
```

a palavra reservada ***var*** só respeita o escopo de função.

```js
console.log(quantidadeDeUvas); // saída: ReferenceError: quantidadeDeUvas is not defined

function teste() {
  var quantidadeDeUvas = 10;
}
```

### Utilizando a palavra reservada ***let***

```js
console.log(quantidadeDeUvas); // saída: ReferenceError: Cannot access 'quantidadeDeUvas' before initialization
let quantidadeDeUvas = 10;
```

O javaScript emite o seguinte erro:

```js
ReferenceError: Cannot access 'quantidadeDeUvas' before initialization
```

A mensagem desse erro diz que a variável `quantidadeDeUvas` já está na memória heap, porém ela não foi inicializada.

Nos bastidores, o motor JavaScript levanta as declarações de variáveis que usam a palavra-chave let. No entanto, ele não inicializa essas variáveis. Observe que se você acessar uma variável que não existe, o JavaScript gerará um erro diferente:

```js
console.log(quantidadeDeBananas); // saída: ReferenceError: quantidadeDeBananas is not defined
let quantidadeDeUvas = 10;
```

Erro:

```js
ReferenceError: quantidadeDeBananas is not defined
```

### Utilizando a palavra reservada ***const***

## Hasteamento de Funções

Assim como nas variáveis, o motor JavaScript também eleva as declarações de funções. Ele move as declarações para o topo do script.

```js
let meuDinheiro = 20;
let minhasDividas = 10;

let meuPatrimonio = calculo(meuDinheiro, minhasDividas);
console.log(meuPatrimonio); // saída: 10

function calculo(a, b) {
  return a - b;
}
```

<!-- https://ricardo-reis.medium.com/hoisting-javascript-aa2642bd715e
 -->
