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

## Método de instância

São os métodos que já utilizamos.

```js
nomeDoMetodo(){}
```

Vamos criar um método para saber a autonomia de um veículo multiplicando a sua quilometragem por litro com a quantidade de gasolina:

```js
class Carro {
    constructor(distanciaPorLitro, quantidadeDeGasolina) {
        this.distanciaPorLitro = distanciaPorLitro;
        this.quantidadeDeGasolina = quantidadeDeGasolina;
    }
    autonomia() {
        return this.distanciaPorLitro * this.quantidadeDeGasolina;
    }
}

const carro1 = new Carro(8, 47);
console.log(carro1); // saída: Carro { distanciaPorLitro: 8, quantidadeDeGasolina: 47 }
console.log(carro1.autonomia()); //  saída: 376
```