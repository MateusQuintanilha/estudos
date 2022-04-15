# new

O operador `new` é usado para invocar uma função construtora, ele possui algumas funções, vamos ver uma lista a seguir:

* Possui a função de criar um novo objeto ligado ao `prototype` da função.
* Atribui o `this` no contexto da invocação da função, ou seja, o valor contido nos argumentos da invocação serão usados no `this`.
* Retorna os dados do `this` de dentro da função para o novo objeto criado.

Vamos aos Exemplos:

Vamos criar uma função vazia com o nome de `User` e vamos executar essa função de duas formas, da primeira forma vamos executar sem o uso da palavra `new` e na segunda vamos fazer o uso dela, em seguida vamos imprimir os dados no console.

```js
function User() {

}

const user1 = User();
const user2 = new User();

console.log(user1); // saída: undefined
console.log(user2); // saída: User {}
```

Na primeira invocação a função retornou `undefined` pois não possui nem um dado sendo retornado usando a palavra `return`.

Na segunda invocação a palavra `new` foi usada, o `new` criou um objeto e retornou esse objeto para o local de invocação e fazendo referência a função construtora, por causa disso que podemos ver o nome da função antes do objeto.

Então ao usar a palavra `new` o javascript cria um objeto e também retorna esse objeto, é como se ele fizesse isso por baixo dos panos:

```js
function User() {
    // Cria o objeto
    let objeto = {};

    // Retorna o objeto
    return objeto;
}
```

O operador `new` também altera o contexto da função em relação ao `this`, ao usar o operador `new` o `this` irá fazer referência ao objeto do local da invocação da função em que o `new` foi utilizado, ou seja, ele irá pegar os argumentos do local da invocação, irá passar para dentro da função e em seguida irá retornar esses dados para o objeto que foi instanciado.

Vamos criar os parâmetros nome e sobrenome na função e vamos inserir nome e sobrenome nos argumentos das duas invocações.

```js
function User(nome, sobrenome) {
    
}

const user1 = User('Rodrigo', 'Rodrigues');
const user2 = new User('Fernando', 'Fernandes');

console.log(user1); // saída: undefined
console.log(user2); // saída: User {}
```

Ao executar podemos ver que nada mudou, vamos tentar retornar o parâmetro nome usando a palavra return.

```js
function User(nome, sobrenome) {
    return nome;
}

const user1 = User('Rodrigo', 'Rodrigues');
const user2 = new User('Fernando', 'Fernandes');

console.log(user1); // saída: Rodrigo
console.log(user2); // saída: User {}
```

Ao usar a palavra `return` a invocação de função funcionou mas a invocação usando o `new` não, pois o `new` precisa do `this` para fazer referência ao novo objeto que foi criado.

```js
function User(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const user1 = User('Rodrigo', 'Rodrigues');
const user2 = new User('Fernando', 'Fernandes');

console.log(user1); // saída: undefined
console.log(user2); // saída: User { nome: 'Fernando', sobrenome: 'Fernandes' }
```
