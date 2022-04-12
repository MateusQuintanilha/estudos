# Fatiando o Array

Podemos pegar os dados dos índices de um array sem alterar o array em si.

Para pegar os elementos do array iremos usar o método `slice()` e precisamos passar dois valores como argumento, o primeiro é o valor onde será o início do índice do valor/valores que serão pegos do array e o segundo valor é um valor após o índice que desejamos que seja o ultimo a ser pego.

Sintaxe:

```js
nomeDoArray.slice(valorInicial, valorFinal);

```

Vamos criar um array com alguns nomes para usar como exemplo:

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];
```

Agora vamos criar uma variável que irá receber o novo array com os alunos que serão selecionados pelo `slice()`.

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];
const pegarAlunos = alunos.slice();
```

## Pegando o valor do primeiro índice

Vamos tentar pegar apenas o primeiro aluno:

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];
const pegarAlunos = alunos.slice(0, 0);

console.log(pegarAlunos); // saída: []
```

Se tentarmos colocar o índice 0 como valor inicial e 0 como valor final, o slice irá retornar um array vazio, lembre-se você precisa passar como valor final um índice a mais após o item desejado, então se queremos pegar apenas o primeiro valor precisamos passar como valor inicial 0 e como valor final 1:

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];
const pegarAlunos = alunos.slice(0, 1);

console.log(pegarAlunos); // saída: [ 'Luiz' ]
```

## Pegando os valores dos índices 1 ao 2

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];
const pegarAlunos = alunos.slice(1, 3);

console.log(pegarAlunos); // saída: [ 'Maria', 'João' ]
```

## Usando valores negativos

Podemos usar valores negativos, Vamos pegar todos os valores menos o primeiro e o ultimo:

```js
const alunos = ['Luiz', 'Maria', 'João', 'Luíza', 'Eduardo'];
const pegarAlunos = alunos.slice(1, -1);

console.log(pegarAlunos); // saída: [ 'Maria', 'João', 'Luíza' ]
```
