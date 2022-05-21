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