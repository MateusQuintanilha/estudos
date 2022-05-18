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

## Alterando o prototype de um objeto usando `Object.setPrototypeOf()`

Vamos criar um objeto com o nome `monsterRace` e vamos inserir nele uma propriedade com a chave `race` e o valor `slime`.

```js
const monsterRace = {
    race: 'Slime'
};
```

em seguida vamos criar outro objeto com o nome `monsterName` e vamos inserir nele uma propriedade com a chave `name` e o valor `Poring`.

```js
const monsterName = {
    name: 'Poring'
};
```

Agora precisamos fazer a ligação do objeto monsterName com o monsterRace para adicionar a raça do monstro ao nome dele, para fazer isso podemos usar o método `Object.setPrototypeOf()`, no primeiro parâmetro iremos inserir o objeto em que iremos inserir o prototype e no segundo parâmetro será o objeto que será inserido no primeiro parâmetro.

Então ficará assim:

```js
Object.setPrototypeOf(monsterName, monsterRace);
```

e para testar podemos imprimir o `monsterName.race` no console:

```js
console.log(monsterName.race); // saída: Slime
```

Conseguimos alterar a cadeia de protótipos, antes a cadeia do monsterName era: `monsterName --> Object.prototype --> null`.

Agora ela ficou assim: `monsterName --> monsterRace --> Object.prototype --> null`.

Mas esse método não é recomendado, pois alterar o prototype de um objeto pode acarretar em problemas de performance, é aconselhável criar um novo objeto  usando o objeto que deseja como prototype e não criar um objeto e depois alterar o seu prototype. Para fazer isso podemos usar o método `Object.create()`.

## Criando um novo objeto usando um objeto existente como prototype

Para criar um novo objeto usando um objeto existente como prototype iremos usar o método `Object.create()`, nele iremos passar o nome do objeto existente que será usado como prototype. Vamos usar os mesmos objetos do exemplo:

Vamos criar um objeto com o nome `monsterRace` e vamos inserir nele uma propriedade com a chave `race` e o valor `slime`.

```js
const monsterRace = {
    race: 'Slime'
};
```

Agora ao invés de criar o outro objeto e depois alterar o seu prototype como fizemos no exemplo anterior, iremos criar uma variável e atribuir o método `Object.create()` com o nome o objeto que será usado como prototype em seguida vamos atribuir a propriedade name para o objeto que foi criado:

```js
const monsterName = Object.create(monsterRace);
monsterName.name = 'poring';
```

Agora vamos imprimir `monsterName.race` no console para ver se funcionou:

```js
console.log(monsterName.race); // saída: Slime
```

## Manipulando métodos e prototypes em uma função construtora

Vamos criar uma função construtora básica chamada de Monster com dois parâmetros, name e race.

```js
function Monster(name, race) {
    this.name = name;
    this.race = race;
}
```

E também vamos adicionar dois métodos no prototype da função construtora, o primeiro método vai será o attack que irá imprimir uma mensagem no console avisando que o monstro está atacando e o segundo será o monsterStatus que irá imprimir no console o nome e a raça do monstro.

```js
Monster.prototype.attack = function () {
    return `Você começou a ser atacado pelo monstro ${this.name}`;
};
Monster.prototype.monsterStatus = function () {
    return `
    ======= Status =======
    Nome: ${this.name}
    Raça: ${this.race}
    ======================
    `;
}
```

Vamos invocar a função:

```js
const monster1 = new Monster('Poring', 'Slime');
```

Agora ao chamar os métodos teremos o seguinte resultado:

```js
console.log(monster1.attack()); // saída: Você começou a ser atacado pelo monstro Poring
console.log(monster1.monsterStatus()); /* saída:
    ======= Status =======
    Nome: Poring
    Raça: Slime
    ======================
    */
```

Também podemos criar um novo objeto usando o `Object.create` e usando a função construtora monster como prototype:

```js
const monster2 = Object.create(Monster.prototype);
```

só que o objeto monster2 estará vazio:

```js
console.log(monster2); // saída: Monster {}
```

podemos adicionar as propriedades name e race atribuindo elas ao objeto monster2:

```js
monster2.name = 'Poporing';
monster2.race = 'Slime';

console.log(monster2); // saída: Monster { name: 'Poporing', race: 'Slime' }
```