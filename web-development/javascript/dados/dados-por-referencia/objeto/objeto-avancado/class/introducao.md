# Introdução a Class

Uma class em JavaScript é um modelo para criação de objetos. Uma class encapsula dados e funções que manipulam dados. Ao contrário de outras linguagens de programação , como Java e C#, as class em JavaScript são Syntax Sugar sobre a herança prototípica. Em outras palavras, a class ES6 é apenas uma forma diferente de criar uma função construtora.

Antes do ES6 não o JavaScript não tinha o conceito de class. Para imitar uma class geralmente é usado o padrão constructor function/prototype conforme mostrado no exemplo a seguir:

```js
function Person(fristName, lastName) {
    this.fristName = fristName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return `${this.fristName} ${this.lastName}`;
};

const john = new Person('John', 'Doe');
console.log(john.getFullName()); // saída: John Doe
```

Nesse exemplo, criamos a função construtora Person que possui duas propriedades: `fristName` e `lastName`. Em seguida criamos o método `getFullName()` que irá retornar uma `String` contendo os valores das propriedades `fristName` e `lastName`. Esse método foi atribuído ao `prototype` da função construtora `Person`.

## Criando uma Class

Vamos remodelar o exemplo anterior para uma class. Para criar uma class em JavaScript iremos usar a palavra-chave `class` em seguida iremos inserir o nome da class, esse nome segue as mesmas regras da função construtora, então a primeira letra será maiúscula em seguida abrimos e fechamos chaves.

```js
class Person {}
```

Todo o conteúdo da class será inserido dentro desse par de chaves.

### Construtor

Podemos usar o método `constructor` para criar e inicializar um objeto que irá conter os parâmetros.

***Nota: O construtor é opcional, então só iremos utiliza-lo quando precisarmos dele***
***Nota: Só poderá existir um construtor por class***

Para iniciar um construtor iremos usar a palavra-chave `constructor` em seguida iremos adicionar um par de parênteses que irá conter os parâmetros, após o par de parênteses iremos inserir um par chaves e dentro desse par de chaves iremos atribuir os parâmetros ao `this`:

```js
class Person {
    constructor(fristName, lastName) {
        this.fristName = fristName;
        this.lastName = lastName;
    }
}
```

### Adicionando métodos ao prototype

Podemos adicionar métodos no prototype apenas adicionando os métodos após as chaves do constructor

```js
class Person {
    constructor(fristName, lastName) {
        this.fristName = fristName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.fristName} ${this.lastName}`;
    }
}

const john = new Person('John', 'Doe');
console.log(john.getFullName()); // saída: John Doe
```
