# Stack

stack ou em português pilha são uma pilha de dados, como uma pilha de livros o último a entrar é o primeiro a sair.

O nome desse conceito é LIFO: Last In Frist Out ou em português O último a entrar é o primeiro a sair e o primeiro a entrar é o último a sair.

Vamos usar  os seguintes métodos:

* push(): para adicionar um elemento à pilha
* pop(): para remover o elemento do topo da pilha
* peek(): para obter o elemento do topo da pilha

Outros métodos poderão ser implementados como `size()` para mostrar o tamanho da pilha.

Criando o modelo

```js
class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }
    push(value) {
        this.top++;
        this.data[this.top] = value;
        return this.data;
    }
    pop() {
        if(this.top < 0) return undefined;
        const poppedTop = this.data[this.top];
        delete this.data[this.top];
        this.top--;
        return poppedTop;
    }
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined;
    }
}
```

Criando uma instância

```js
const stack = new Stack();
```

Usando essa instância:

```js
stack.push('learning');
stack.push('data');
console.log(stack.push('structures'))
```
