# Return

O `return` retorna o valor para quem inicializou a função. Caso não haja o retorno a função exibe `undefined` se tentarmos imprimir o resultado da mesma.

Exemplo sem `return`:

```js
function soma(valorA, valorB) {
    const soma = valorA + valorB;
}

console.log(soma(10, 5)); // saída: undefined
```

Como podemos ver a função retornou `undefined`, agora vamos adicionar o `return`:

```js
function soma(valorA, valorB) {
    const soma = valorA + valorB;
    return soma;
}

console.log(soma(10, 5)); // saída: 15
```

Agora a função retornou o valor da soma.

Outra função importante do `return` é que ele interrompe o fluxo da função

