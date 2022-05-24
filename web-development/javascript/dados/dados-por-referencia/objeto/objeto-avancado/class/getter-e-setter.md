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