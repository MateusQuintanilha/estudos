# Funções fábrica (Factory Functions)

Um a função fábrica é uma função que retorna um novo objeto sem usar a palavra `new`.

Vamos criar um objeto chamado `user01`:

```js
user01 = {firstName: 'Ruth', lastName: 'Sims', email: 'ruth@sims.rs', getFullName() {return this.firstName + ' ' + this.lastName;}};
```

O objeto `user01` possui 3 propriedades: `firstName`, `lastName`, `email`, e um método `getFullName()` que retorna o nome completo.

Suponha que seja necessário criar outro objeto semelhante chamado `user02`, vocÊ poderá duplicar o código da seguinte forma:

```js
user02 = {firstName: 'Jimmy', lastName: 'Crawford', email: 'jimmy@crawford.jc', getFullName() {return this.firstName + ' ' + this.lastName;}};
```

Neste exemplo, os objetos `user01` e `user02` possuem as mesmas propriedades e métodos. Mas o problem é que estamos repetindo muito código, e se precisarmos criar 20 usuários? E depois dos 20 usuários criados precisarmos adicionar um método que retorna o nome e o email do usuário?

Para evitar esses tipos de problemas podemos criar uma função fábrica que irá retornar um objeto.

Vamos criar uma função com o nome de `createUser` que irá possuir 3 parâmetros: `firstName`, `lastName`, `email`.

```js
const createUser = (firstName, lastName, email) => {
    return {
        firstName:firstName,
        lastName:lastName,
        email:email,
        getFullName() {
            return firstName + ' ' + lastName;
        }
    }
};
```

Na hora de criar o objeto, caso a chave e o valor do objeto sejam os mesmo, podemos inserir apenas uma vez que o javascript irá entender que essa palavra será usada para chave e valor:

```js
const createUser = (firstName, lastName, email) => {
    return {
        firstName,
        lastName,
        email,
        getFullName() {
            return firstName + ' ' + lastName;
        }
    }
};
```

Agora para criar um novo usuário podemos criar uma `const` com o nome `user01` e atribuir a execução da função `createUser` os valores para `firstName`, `lastName`, `email` como argumentos dessa função:

```js
const user01 = createUser('Ruth', 'Sims','ruth@sims.rs');
```

Vamos criar o `user02` também:

```js
const user02 = createUser('Jimmy', 'Crawford','jimmy@crawford.jc');
```
