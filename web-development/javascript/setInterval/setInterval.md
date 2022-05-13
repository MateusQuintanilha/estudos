# setInterval

O setInterval() chama uma função em intervalos de tempo definidos. Ele continuará chamando a função até que o clearInterval() seja chamado, ou que a página seja fechada.

Sintaxe:

```js
// sintaxe da função setInterval, que define um temporizador
// que disparará uma ação definida em tempo estipulado
setInterval(function, milissegundos, param1, param2, …);
```

## Parâmetros

* function: é a função que será executada;
* milissegundos: é o intervalo em milissegundos(ms) em que o código será executado. Se o valor especificado for menor que 10, o valor 10 será utilizado.
* param1, param2: são os parâmetros utilizados.