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