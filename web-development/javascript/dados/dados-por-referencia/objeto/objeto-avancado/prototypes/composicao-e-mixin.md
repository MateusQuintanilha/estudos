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