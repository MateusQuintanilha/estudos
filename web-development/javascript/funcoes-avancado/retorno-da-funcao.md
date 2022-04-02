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

## Early Return

Uma estratégia bem utiliza é o Early Return. Onde criamos uma situação de interrupção caso uma condição seja verdadeira ou falsa.

Vamos criar uma função calculadora que irá fazer cálculos usando os operadores de adição, subtração, multiplicação e divisão qualquer outro valor recebido no operador será considerado como 'Operador Invalido'.

```js
function calculadora(operador, valorA, valorB) {
    if(operador === '+') return valorA + valorB;
    if(operador === '-') return valorA - valorB;
    if(operador === '*') return valorA * valorB;
    if(operador === '/') return valorA / valorB;
    if(operador || !operador) return 'Operador Invalido';
}
console.log(calculadora('+', 10, 15)); // saída: 25
console.log(calculadora('-', 10, 15)); // saída: -5
console.log(calculadora('*', 10, 15)); // saída: 150
console.log(calculadora('/', 10, 15)); // saída: 0.6666666666666666
console.log(calculadora('a', 10, 15)); // saída: Operador Invalido
console.log(calculadora('', 10, 15)); // saída: Operador Invalido
```

## Tipos de dados que podemos retornar

Podemos retornar qualquer tipo de dados, como valores primitivos, objetos, arrays, outras funções e muitos outros.
