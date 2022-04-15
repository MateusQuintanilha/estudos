# Atribuição via desestruturação (Objetos)

## Introdução a atribuição via desestruturação em objeto

```js
const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Fernandes',
    idade: 48,
    endereco: {
        rua: 'Otijuuru',
        numero: 1861
    }
};

let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let rua = pessoa.endereco.rua;
let numero = pessoa.endereco.numero;

console.log(nome, sobrenome, idade, rua, numero); // saída: Fernando Fernandes 48 Otijuuru 1861
```

```js
const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Fernandes',
    idade: 48,
    endereco: {
        rua: 'Otijuuru',
        numero: 1861
    }
};

const {nome: fristName, sobrenome: lastName, endereco: {rua, numero}} = pessoa;

console.log(fristName, lastName, rua, numero); // saída: Fernando Fernandes Otijuuru 1861

```

Ou

```js
const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Fernandes',
    idade: 48,
    endereco: {
        rua: 'Otijuuru',
        numero: 1861
    }
};

const {nome, sobrenome, endereco: {rua, numero}} = pessoa;

console.log(nome, sobrenome, rua, numero); // saída: Fernando Fernandes Otijuuru 1861

```
