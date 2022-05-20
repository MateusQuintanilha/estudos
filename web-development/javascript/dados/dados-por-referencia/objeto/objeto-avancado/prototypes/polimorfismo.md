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
ContaCorrente.prototype = ContaCorrente;
```