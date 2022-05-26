# Getter e Setter

Vamos usar o código abaixo que é um classe com o nome de Carro, ela irá precisar receber um parâmetro com o nome do carro e também terá uma propriedade velocidade que será iniciada com o valor 0 e será alterada pelos métodos acelerar e desacelerar.

Dentro do método acelerar vamos criar um if que não deixará a velocidade passar de 100 e no desacelerar não deixará passar abaixo de 0. E a cada vez que esse método é usado ele irá alterar o valor em 1.

```js
const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}
```

Vamos invocar a classe:

```js
const c1 = new Carro('Fusca');
console.log(c1); // saída: Carro { nome: 'Fusca', [Symbol(velocidade)]: 0 }
```

Agora vamos criar um for e vamos colocar para executar o método acelerar 200 vezes e vamos ver oque acontece:

```js
for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1);// saída: Carro { nome: 'Fusca', [Symbol(velocidade)]: 100 }
```

Como podemos ver, o método acelerar respeitou aquele limite de 100 que foi declarado no if mas tem algumas formas de burlar isso.

Imagine que alguém em outra parte do código coloque `c1.velocidade = 500;`, isso irá alterar a velocidade do veículo para 500 sem passar pela verificação que fizemos no método acelerar:

```js
c1.velocidade = 500;
console.log(c1);// saída: Carro { nome: 'Fusca', [Symbol(velocidade)]: 500 }
```

Isso é um problema pois poderá acarretar em vários bugs pelo código, então precisamos proteger a propriedade velocidade, mas como podemos fazer isso? podemos usar o getter e setter.

```js
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade() {
        return this[_velocidade];
    }
    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    desacelerar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1); // saída: Carro { nome: 'Fusca', [Symbol(velocidade)]: 100 }
```
