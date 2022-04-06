# Break and Continue

## Break

A instrução `break` é usada quando queremos parar ou encerrar o laço de repetição.

Vamos criar um array com esses 9 valores (10, 20, 30, 40, 50, 60, 70, 80, 90) e vamos fazer um for...of para imprimir cada valor no console e quando chegar no valor 30 vamos fazer com que o loop seja interrompido.

```js
const tickets = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let ticket of tickets){
    if (ticket === 30) {
        break;
    }
    console.log(ticket); // saída: 10 20
}
```

O for foi executado até o momento em que chegou no valor 30, nesse momento a instrução `break` foi executada e encerrou a execução do loop.

## Continue

a instrução `continue` interrompe uma iteração (no laço de repetição), se uma condição específica ocorrer, e continua com a próxima iteração no laço de repetição.

Vamos usar o mesmo exemplo usado na instrução break, mas agora queremos que pule o valor 30 e continue com a contagem:

```js
const tickets = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let ticket of tickets){
    if (ticket === 30) {
        continue;
    }
    console.log(ticket); // saída: 10 20 40 50 60 70 80 90
}
```

No momento em que o loop chegou no valor 30 a instrução `continue` foi executada e pulou para a proxima execução do loop.

## Cuidado ao usar continue no while

Tome cuidado ao usar o continue no while, pois se adicionar a variável de controle após o continue poderá gerar um loop infinito:

```js
const tickets = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let i = 0;
while (i < tickets.length){
    let ticket = tickets[i];

    if (ticket === 30) {
        i++; // Sempre adiciona a variável de controle antes do continue
        console.log('PuleiO30')
        continue;
    }
    console.log(ticket); // saída: 10 20 PuleiO30 40 50 60 70 80 90

    i++;
}
```
