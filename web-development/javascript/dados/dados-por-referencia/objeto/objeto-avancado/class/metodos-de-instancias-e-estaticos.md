# Métodos de instância e métodos estáticos

Podemos usar dois tipos de métodos dentro da classe, o método de instância e o método estático. Vamos criar uma classe para usar de exemplo:

```js
class Carro {
    constructor(distanciaPorLitro, quantidadeDeGasolina) {
        this.distanciaPorLitro = distanciaPorLitro;
        this.quantidadeDeGasolina = quantidadeDeGasolina;
    }
}

const carro1 = new Carro(8, 47);
console.log(carro1); // saída: Carro { distanciaPorLitro: 8, quantidadeDeGasolina: 47 }
```
