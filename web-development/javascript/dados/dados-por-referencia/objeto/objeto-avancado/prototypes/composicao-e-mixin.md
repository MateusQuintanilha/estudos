# Reutilizando códigos usando Composição e Mixin

Vamos usar o código a seguir como exemplo:

```js
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        nomeCompleto() {
            console.log(`${this.nome} ${this.sobrenome}`);
        },
        falar() {
            console.log(`${this.nome} está falando`)
        }
    };

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const pessoa1 = criaPessoa('Chapolin', 'Colorado');
```

## Separando o prototype da função construtora

Podemos separar o prototype da função construtora, com isso podemos utilizar ele em outras funções:

```js
    const pessoaPrototype = {
        nomeCompleto() {
            console.log(`${this.nome} ${this.sobrenome}`);
        },
        falar() {
            console.log(`${this.nome} está falando`)
        }
    };

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const pessoa1 = criaPessoa('Chapolin', 'Colorado');
```

## Separando os métodos individualmente em um objeto

Para ficar ainda melhor, podemos separar os métodos individualmente e criar um objeto para cada método, assim podemos adicionar apenas um método em outro local caso seja necessário:

```js
const nomeCompleto = {
    nomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
};

const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
};

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
```
Agora que separamos os métodos em objetos individuais precisamos adiciona-los no objeto `pessoaPrototype` e podemos fazer isso de duas formas: