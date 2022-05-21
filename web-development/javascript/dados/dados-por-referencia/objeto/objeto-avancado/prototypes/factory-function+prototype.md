# Usando prototype com factory function

Agora vamos ver como usar prototype na factory function, vamos criar uma factory function chama de criaPessoa e vamos passar 2 parâmetros: nome e sobrenome, anteriormente vimos como criar uma factory function da maneira a seguir:

```js
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

const pessoa1 = criaPessoa('Chapolin', 'Colorado');
console.log(pessoa1); // saída: { nome: 'Chapolin', sobrenome: 'Colorado' }
```

## Adicionando métodos no objeto que será retornado pela factory function

Agora como criamos os métodos no prototype? se criarmos os métodos dentro do objeto, eles estarão dentro de todos os objetos criados pela factory function e não no prototype:

```js
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            console.log(`${this.nome} ${this.sobrenome}`);
        },
        falar() {
            console.log(`${this.nome} está falando`)
        }
    }
}

const pessoa1 = criaPessoa('Chapolin', 'Colorado');
console.log(pessoa1); /* saída:
{
  nome: 'Chapolin',
  sobrenome: 'Colorado',
  nomeCompleto: [Function: nomeCompleto],
  falar: [Function: falar]
}
*/
```

Mas não é isso que a gente quer, queremos que os métodos sejam adicionados no prototype da factory function.

## Adicionando métodos no prototype do objeto que será retornado pela factory function

Para conseguirmos adicionar os métodos dentro do prototype precisamos criar um objeto separado para ser o prototype em seguida criar o objeto da factory function que irá retornar os dados usando esse objeto criado com os métodos como prototype.

Vamos remover o conteúdo do return e criar o objeto que irá conter os métodos, vamos chama-lo de pessoaPrototype:

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
}
```

### Usando o método `Object.create()`

Agora podemos usar o método `Object.create()` para criar o objeto que será retornado pela factory function usando o objeto `pessoaPrototype` como prototype e como o primeiro parâmetro iremos passar o objeto `pessoaPrototype` e vamos passar um objeto contendo as propriedades nome e sobrenome, cada uma dessas propriedades terá um objeto e dentro desse objeto vamos passar a propriedade value com o nome de cada propriedade como valor:

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
```

Agora podemos invocar a factory function em seguida tentar usar os métodos:

```js
const pessoa1 = criaPessoa('Chapolin', 'Colorado');

pessoa1.nomeCompleto(); // saída: Chapolin Colorado
pessoa1.falar(); // saída: Chapolin está falando
```
