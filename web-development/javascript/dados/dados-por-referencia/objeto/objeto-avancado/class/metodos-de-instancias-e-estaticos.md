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

## Método estático

Para criar um método estático em uma classe precisamos usar a palavra-chave `static` ao iniciar um método. Métodos estáticos não são chamados na instância da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são usadas como funções utilitárias, como funções para criar ou clonar objetos.

Sintaxe:

```js
static nomeDoMetodo(){}
```

Vamos criar um método utilitário que não será preciso instanciar um objeto para usa-lo, vamos criar um método que irá converter km por milhas.

```js
class Carro {
    constructor(distanciaPorLitro, quantidadeDeGasolina) {
        this.distanciaPorLitro = distanciaPorLitro;
        this.quantidadeDeGasolina = quantidadeDeGasolina;
    }
    autonomia() {
        return this.distanciaPorLitro * this.quantidadeDeGasolina;
    }
    static milhas(km) {
        return km / 1.609
    }
}
```

Agora para executar o método precisamos usar o nome da classe em seguida o nome do método:

```js
console.log(Carro.milhas(150)); // saída: 93.22560596643878
```
