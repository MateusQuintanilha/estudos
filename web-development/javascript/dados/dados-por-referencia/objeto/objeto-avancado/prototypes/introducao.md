# Protótipo (Prototype)

Protótipo é o termo usado para se referir a algo que foi criado com o propósito de ser um modelo ou molde para futuras produções.

O JavaScript é uma linguagem baseada em protótipos  para fornecer herança, cada objeto possui um protótipo, que é sempre outro objeto, ou `null`.

Por padrão, o motor do JavaScript fornece a função `Object` e um objeto anônimo que pode ser referenciado por `Object.prototype`.

Vamos usar a ferramenta de desenvolvedor do navegador para imprimir no console a função `Object` e o objeto anônimo `Object.prototype`:

```js
console.log(Object); // saída: ƒ Object() { [native code] }

console.log(Object.prototype); /* saída:
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

Podemos ver que o `Object` realmente é uma função e que o Objeto `Object.prototype` possui muitas propriedades internas como `toString()`, `valueOf()` entre outros.
