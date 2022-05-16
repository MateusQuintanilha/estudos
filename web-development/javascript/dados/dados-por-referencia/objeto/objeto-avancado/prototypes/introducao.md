# Protótipo (Prototype)

Protótipo é o termo usado para se referir a algo que foi criado com o propósito de ser um modelo ou molde para futuras produções.

O JavaScript é uma linguagem baseada em protótipos  para fornecer herança, cada objeto possui um protótipo, que é sempre um objeto, ou `null`.

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

Um dos métodos mais importantes é o `constructor` pois ele faz referência a função em que o prototype está ligado, nesse caso ao `Object`:

Como podemos ver no conteúdo que foi impresso no console, na segunda linha faz referencia a função Object:

```js
// constructor: ƒ Object()
```

Também podemos fazer a comparação para ter a certeza que o constructor é igual a Object:

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

O motor do JavaScript cria a função `Monster()` e por baixo dos panos também cria um novo objeto anônimo. A função `Monster()` possui a propriedade `prototype` que faz referência a esse novo objeto anônimo que foi criado. E o objeto anônimo possui a propriedade `constructor` que faz referencia a função `Monster`.

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

Além disso, o JavaScript vincula o objeto `Monster.prototype` ao  objeto `Object.prototype` por meio do `[[Prototype]]`, que é conhecido como ligação de protótipo.

## A diferença entre adicionar um método na função e no prototype da função

Vamos adicionar um método na função Monster chamado attack e ele irá retornar uma frase junto com o nome do monstro:

```js
function Monster(name, race) {
    this.name = name;
    this.race = race;

    this.attack = function () {
        return `Você começou a ser atacado pelo monstro ${this.name}`;
    };
}
```

Essa foi a forma em que usamos para adicionar métodos até aqui, mas essa forma possui um problema bem sério de performance, porque todas as vezes que criarmos uma instância essa instância irá copiar o método também, vamos criar uma instância:

```js
const monstro01 = new Monster('Poring', 'Slime');
```

Agora vamos imprimi-lá no console:

```js
console.log(monstro01); /* saída:
    Monster {
        name: 'Poring',
        race: 'Slime',
        attack: [Function (anonymous)]
    }
```

Agora imagine em uma aplicação grande como um jogo, onde existem milhares de monstros instanciados e cada monstro desse com dezenas de métodos pré-carregados, teríamos um problema bem sério de desempenho não é mesmo? mas como resolver isso? Podemos adicionar os métodos no prototype.

## Adicionando métodos no prototype

Para adicionar um método no prototype de uma função precisamos acessar o  prototype da função `NomeDaFunction.prototype` em seguida usar a notação por ponto e o nome do método e para finalizar iremos atribuir o conteúdo do método usando o sinal de igual `=`.

Vamos remover o método attack de dentro da função Monster e adicionar o método attack no prototype do Monster:

```js
function Monster(name, race) {
    this.name = name;
    this.race = race;
}

Monster.prototype.attack = function () {
        return `Você começou a ser atacado pelo monstro ${this.name}`;
    };
```

Agora vamos executar esse método

Todas as vezes que executarmos esse método ele irá acessar o método através da ligação que existe entre `monstro1` e `Monster.prototype`.

```js
console.log(monstro01.attack()); // saída: Você começou a ser atacado pelo monstro Poring
```

Também conseguimos acessar os métodos que estão no `Object.prototype`:

```js
console.log(monstro01.name.toString()); // saída: Poring
```

Essa ligação entre `monstro01 --> Monstro.prototype --> Object.prototype --> null` é chamado de prototype chain.

Como o Monster.prototype não tem o método `toString()`, o motor do JavaScript irá para o próximo elo da cadeia de protótipo e irá procurar o método `toString()`, nesse caso ele irá encontrar e executar o método.

Mas caso o método não exista nessa cadeia de protótipos o JavaScript irá lançar um erro. por Exemplo:

```js
console.log(monstro01.andar()); // saída: TypeError: monstro01.andar is not a function
```

## Adicionando métodos em um objeto individual

Vamos criar uma instancia chamada de monstro02 e vamos atribuir o método `andar()` que irá retornar a frase "O monstro está andando" apenas para a instancia do monstro02:

```js
// criando a instancia do monstro02
const monstro02 = new Monster('Poporing', 'Slime');
```

Agora vamos adicionar o método apenas ao monstro02

```js
monstro02.andar = function() {
    return `O ${this.name} está andando!`;
};
```

Vamos tentar chamar o método no monstro02:

```js
console.log(monstro02.andar()); // saída: O Poporing está andando!
```

O método funcionou, agora vamos tentar chamar o método no monstro01:

```js
console.log(monstro01.andar()); // saída: TypeError: monstro01.andar is not a function
```

Um erro foi gerado, pois esse método foi adicionado apenas ao monstro02, então ele não existe na cadeia de protótipos do monstro01.

## Obtendo ligação de protótipo

O `__proto__` é pronunciado como dunder proto (protótipo do dunder). O `__proto__` é uma propriedade assessora (getter e setter) do objeto `Object.prototype`. Ele expõe a ligação interna do protótipo `[[prototype]]` de um objeto através do qual é acessado.

O `__proto__` foi padronizado no ES6 para garantir a compatibilidade dos navegadores de internet. No entanto, pode ser depreciado no futuro em favor do `Object.getPrototypeOf()`. Portanto, nunca utilize `__proto__` em códigos de produção.
