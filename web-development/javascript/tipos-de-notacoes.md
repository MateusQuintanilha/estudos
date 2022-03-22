# Tipos de Notações

Podemos acessar as propriedades de um objeto usando duas notações:

* Notação por ponto ( . )
* Notação por colchetes ( [] )

## Notação por ponto

No exemplo a seguir usaremos a notação de ponto ( . ) para acessar a propriedade nome do objeto pessoa:

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

console.log(pessoa.nome);
```

Para obter a propriedade de um objeto aninhado, utiliza-se o nome do objeto seguido pelo nome da propriedade do objeto aninhado e por fim o nome da propriedade desejada.

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

console.log(pessoa.endereco.rua);
```

## Notação por colchetes

O exemplo a seguir usaremos a notação por colchetes ( [] ), ao invés de utilizar o ponto, usaremos os colchetes, dentro dos colchetes iremos inserir o nome da propriedade que desejamos utilizar.

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

console.log(pessoa['sobrenome']);
```

Para obter as propriedades que estão dentro de uma array utilize colchetes ( [] ) e dentro adicione o número da posição desejada, lembrando que a contagem é iniciada com o valor 0.

```js
const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Fernandes',
    idade: 27,
    interesses: ['Games', 'Filmes'],
    endereco: {
        rua: 'Otijuuru',
        numero: 1861
    }
};

console.log(pessoa.interesses[0]);// saída: Games
console.log(pessoa.interesses[1]);// saída: Filmes
```

Se você referenciar uma propriedade que não existe, você vai obter um valor `undefined`

```js
const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Fernandes',
    idade: 27,
    interesses: ['Games', 'Filmes'],
    endereco: {
        rua: 'Otijuuru',
        numero: 1861
    }
};

console.log(pessoa.nomeCompleto);
```
