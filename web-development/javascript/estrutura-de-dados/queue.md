# Stack

stack ou em português pilha são uma pilha de dados, como uma pilha de livros o último a entrar é o primeiro a sair.

O nome desse conceito é LIFO: Last In Frist Out ou em português O último a entrar é o primeiro a sair e o primeiro a entrar é o último a sair.

Métodos fundamentais:

* enqueue(): para adicionar um elemento ao final da fila
* dequeue(): para remover o primeiro elemento a entrar na fila

Outros métodos poderão ser implementados como `size()` para mostrar o tamanho da fila, ou `front()` para pegar o primeiro elemento da fila, dentre tantos outros.

Criando o modelo

```js
class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou na fila!`);
    };
    dequeue() {
        const item = this.data.shift();
        console.log(`${item} saiu da fila!`)
    };
}
```

Criando uma instância

```js
const fila = new Queue();
```

Usando essa instância:

```js
fila.enqueue('Mariana');
fila.enqueue('João');
fila.dequeue();
```
