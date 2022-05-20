# Polimorfismo

Polimorfismo é a forma de permitir vários comportamentos diferentes com um mesmo nome, imagine duas contas no banco, uma conta-corrente e uma poupança, na primeira podemos usar o valor do saldo em conta ou o valor de crédito para fazer uma compra, já na conta poupança só podemos usar o valor do saldo. Estamos usando a mesma forma de pagamento, mas as duas contas possuem diferenças na forma de fazer esse pagamento.

## Exemplo: criando função construtora Conta

Vamos criar uma função construtora de uma conta para usar como exemplo:

```js
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
```

Agora vamos três métodos, o primeiro para saque, o segundo para depositar e o terceiro para ver o saldo.

```js
Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo Insuficiente, você possui R$${this.saldo.toFixed(2)} de saldo`);
        return;
    }
    this.saldo -= valor;
    console.log(`Você sacou: R$${valor.toFixed(2)}, saldo restante: R$${this.saldo.toFixed(2)}`)
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log('Agencia: ' + this.agencia + ' ' + 'Conta: ' + this.conta + ' ' + 'Saldo: R$' + this.saldo.toFixed(2))
};
```

## Especificando a conta-corrente

Vamos criar uma função construtora para a conta-corrente usando a função construtora Conta como prototype

```js
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
```

## Fazendo o polimorfismo no método sacar da conta-corrente

Vamos alterar o método sacar da conta corrente para poder sacar o saldo em conta mais o valor do limite

```js
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente, você possui R$${this.saldo.toFixed(2)} de saldo`);
        return;
    }
    this.saldo -= valor;
    console.log(`Você sacou: R$${valor.toFixed(2)}, saldo restante: R$${this.saldo.toFixed(2)}`)
};
```

Agora podemos criar uma instância da ContaCorrente passando os dados de agencia como 10, conta como 22 saldo como 0 e limite como 1000:

```js
const contaCorrente1 = new ContaCorrente(10,22,0,1000);
```

Ao tentar sacar 100 reais o método irá permitir mas o saldo irá para -100:

```js
contaCorrente1.sacar(100); // saída: Você sacou: R$100.00, saldo restante: R$-100.00
```

mas se tentarmos sacar 901 são será possível pois o limite máximo é 1000 e já sacamos 100:

```js
contaCorrente1.sacar(901); // saída: Saldo Insuficiente, você possui R$-100.00 de saldo
```

## Especificando a conta-Poupança

Vamos criar a função construtora Conta Poupança  usando a função construtora Conta como prototype

```js
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this,agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
```

Agora vamos invocar a função construtora ContaPoupanca e adicionando os dados para agencia 102, conta 92 e saldo 100:

```js
const ContaPoupanca1 = new ContaPoupanca(102, 92, 100);
```

E ao usar o método sacar para sacar 90 veremos que o resultado será sacado e restará 10:

```js
ContaPoupanca1.sacar(90); // saída: Você sacou: R$90.00, saldo restante: R$10.00
```

## Polimorfismo

Como podemos ver no método sacar da conta corrente alteramos o método sacar para poder sacar um valor a mais que o saldo em conta que é o valor que definimos no limite. Mas essa alteração só afetou a ContaCorrente, na ContaPoupanca o método sacar funcionou da forma que ele foi criado. Essa forma de usar a mesma palavra (método, ou qualquer outra parte do código) de formas diferentes dependendo de onde é usado que é o Polimorfismo.
