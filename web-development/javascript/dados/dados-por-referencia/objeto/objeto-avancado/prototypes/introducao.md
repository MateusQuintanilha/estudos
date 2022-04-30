# Protótipo (Prototype)

Protótipo é o termo usado para se referir a algo que foi criado com o propósito de ser um modelo ou molde para futuras produções.

O JavaScript é uma linguagem baseada em protótipos  para fornecer herança, cada objeto possui um protótipo, que é sempre outro objeto, ou `null`.

Por padrão, o motor do JavaScript fornece a função `Object`, podemos verificar isso usando o `typeof`:

```js
console.log(typeof(Object)); // saída: 'function'
```

Então `Object()` é uma função, e não um objeto.

Além disso, o JavaScript fornece um objeto anônimo que é referenciado como `prototype` e para conseguir acessa-lo podemos usar o nome da função seguido da notação de ponto e a palavra `prototype`:

Sintaxe:

```js
nomeDaFunction.Prototype
```

Então para acessar o prototype da função `Object()` iremos usar `Object.prototype`:

```js
console.log(Object.prototype); /*saída:
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: null
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
*/

```

Podemos ver que o Objeto anônimo que acessamos através de `Object.prototype` possui muitos métodos como `toString()`, `valueOf()` entre outros.

Um dos métodos mais importantes é o `constructor` pois ele faz referência a função construtora em que o objeto usou de molde, nesse caso ao `Object`:

```js
console.log(Object.prototype.constructor === Object); // saída: true
```

## criando uma função construtora como exemplo

Vamos criar uma função construtora chamada Monster, ela um parâmetro chamado name e outro chamado race:

```js
function Monster(name, race) {
    this.name = name;
    this.race = race;
}
```

Assim como a função construtora `Object()` a função `Monster()` também tem uma propriedade `prototype` que faz referência a um objeto anônimo e esse objeto anônimo possui a propriedade `constructor` que faz referencia a função construtora `Monster`.

Vamos imprimir a função `Monster` no console:

```js
console.log(Monster); /* saída:
    ƒ Monster(name, race) {
        this.name = name;
        this.race = race;
    }
*/
```

Agora vamos imprimir o `Monster.prototype`:

```js
console.log(Monster.prototype); /* saída:
    {constructor: ƒ}
        constructor: ƒ Monster(name, race)
            arguments: null
            caller: null
            length: 2
            name: "Monster"
            prototype: {constructor: ƒ}
            [[FunctionLocation]]: script.js:1
            [[Prototype]]: ƒ ()
            [[Scopes]]: Scopes[2]
*/
```

Na segunda linha podemos ver o `constructor` fazendo a referencia a função `Monster`.