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
