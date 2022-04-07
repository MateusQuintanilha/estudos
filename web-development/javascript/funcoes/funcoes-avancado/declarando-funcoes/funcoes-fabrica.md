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

## Usando this

Usamos os nomes dos parâmetros para criar o nosso método `getFullName`, então nesse caso o método pegará os valores diretamente dos parâmetros e não do objeto criado.

Imagine que precisamos criar uma chave com um valor no objeto mas esses dados não virão através dos parâmetros, vamos criar uma chave com o nome de `code` com um valor de 20 abaixo da chave email para usar como exemplo e vamos passar essa chave dentro do método `getFullName`

```js
const createUser = (firstName, lastName, email) => {
    return {
        firstName,
        lastName,
        email,
        code: 20,
        getFullName() {
            return firstName + ' ' + lastName + ' ' + code;
        }
    }
};

const user01 = createUser('Ruth', 'Sims','ruth@sims.rs');
```

Ao tentar imprimir os dados desse método no console irá gerar um erro falando que `code` não foi definido:

```js
console.log(user01.getFullName()); // saída: code is not defined
```

Para conseguir ter acesso a chave dentro do objeto precisamos usar a palavra `this` que estará se referindo ao `code` do contexto da execução que no caso do exemplo será o code do `user01`.

```js
const createUser = (firstName, lastName, email) => {
    return {
        firstName,
        lastName,
        email,
        code: 20,
        getFullName() {
            return firstName + ' ' + lastName + ' ' + this.code;
        }
    }
};

const user01 = createUser('Ruth', 'Sims','ruth@sims.rs');
```

Agora ao tentar imprimir os dados do método na tela não irá gerar erro:

```js
console.log(user01.getFullName()); // saída: Ruth Sims 20
```

## Usando o getter

Podemos mascarar esse método como uma chave desse objeto, mas apenas no caso em que não é preciso passar argumentos para o método. Ficando assim mais prático para usa-lo já que não será mais preciso adicionar as chaves após o nome do método.

Para fazer isso precisamos adicionar a palavra `get` na frente do nome do método:

```js
const createUser = (firstName, lastName, email) => {
    return {
        firstName,
        lastName,
        email,
        code: 20,
        get getFullName() {
            return firstName + ' ' + lastName + ' ' + this.code;
        }
    }
};

const user01 = createUser('Ruth', 'Sims','ruth@sims.rs');
```

Agora se você tentar usar esse método usando os parenteses irá gerar um erro:

```js
console.log(user01.getFullName()); // saída: TypeError: user01.getFullName is not a function
```

Então é preciso usar o nome do método sem os parenteses:

```js
console.log(user01.getFullName); // saída: Ruth Sims 20
```
