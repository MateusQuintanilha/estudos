# Manipulando Prototypes

Todas as vezes que criamos um objeto literal o JavaScript faz automaticamente a chamada da função construtora do objeto em questão, então `let objA = {}` é a mesma coisa que `let objA = new Object()`. Também temos isso para array, string, boolean, etc.

```js
// Criando um objeto literal
const objA = {
    chaveA: 'A
};
```

Toda função construtora tem um prototype, ou seja, a função construtora tem um objeto atrelado a ela que é o `Object.prototype` e esse prototype vem implicitamente em uma chave `__proto__` no objeto em que criamos.

Então seria algo assim:

```js
// Criando um objeto literal
const objA = {
    chaveA: 'A
    //__proto__: Object.prototype
};
```

Isso acontece de forma automática, isso ocorre no momento em que criamos um objeto. Podemos verificar se o `__proto__` é realmente o `Object,prototype` comparando os dois:

```js
console.log(objA.__proto__ === Object.prototype); // saída: true
```