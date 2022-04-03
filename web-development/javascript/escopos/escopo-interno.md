# Escopo Interno

É um escopo dentro de outro escopo.

```js
function calculadora(operador, valorA, valorB) {
    if(operador === '+') {
        return valorA + valorB;
        }
    if(operador === '-') {
        return valorA - valorB;
        }
    if(operador === '*') {
        return valorA * valorB;
        }
    if(operador === '/') {
        return valorA / valorB;
        }
    if(operador || !operador) {
        return 'Operador Invalido';
        }
}
```

No exemplo acima temos o escopo da função calculadora como o escopo externo/pai e nele existem 5 escopos interno/filho para cada operador matemático simples e um para erro.
