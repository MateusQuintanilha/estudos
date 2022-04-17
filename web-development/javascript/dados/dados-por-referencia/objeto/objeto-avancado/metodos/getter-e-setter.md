# Getter e Setter

No JavaScript existem dois tipo de propriedades de objetos:

* Propriedades de dados: são as propriedades em si (chave:valor).
  * um exemplo de propriedade de dados:

    ```js
    const pessoa = {
        nome: 'Cameron',
        sobrenome: 'Moore',
        peso: 78,
     };
    ```

* Propriedades de acessador: São métodos que obtêm ou definem o valor de um objeto. Para isso, usamos essas duas palavras-chave:
  * `get` - Para definir um método getter para obter o valor da propriedade.
  * `set` - Para definir um método setter para definir o valor da propriedade.

---

## Getter

O método getter é usado para receber/mostrar o valor de uma propriedade de um objeto.

Sintaxe:

```js
get
```

É necessário associar o método `get` a uma função e ao fazer essa associação a função não irá mais aceitar argumentos passados em sua invocação, o método `get` irá mascarar a função como uma propriedade então não será possível invocar a função usando parênteses, ela será acessada como qualquer outra propriedade do objeto.

Exemplo

```js
const pessoa = {
    nome: 'Cameron',
    sobrenome: 'Moore',
    peso: 78,
    nomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
};
```

Agora vamos invocar o método `nomeCompleto`:

```js
pessoa.nomeCompleto(); // saída: Cameron Moore
```

Agora vamos associar o método `get` ao método `nomeCompleto`, para fazer isso só precisamos adicionar a palavra-chave `get` na frente do método `nomeCompleto`:

```js
const pessoa = {
    nome: 'Cameron',
    sobrenome: 'Moore',
    peso: 78,
    get nomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
};
```

Agora ao tentar invocar o método `nomeCompleto` usando os parênteses como uma função irá gerar um erro:

```js
pessoa.nomeCompleto(); // saída: TypeError: pessoa.nomeCompleto is not a function
```

Pois o método `get` mascarou/transformou o método `nomeCompleto` em uma propriedade, então precisamos usar o método `nomeCompleto` como qualquer outra propriedade, então iremos chamar ela sem os parênteses:

```js
pessoa.nomeCompleto; // saída: Cameron Moore
```