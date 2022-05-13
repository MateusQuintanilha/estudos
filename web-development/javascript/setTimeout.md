# setTimeout

Assim como a função setInterval(), o setTimeout() é uma função temporizadora que é utilizada para chamar funções de retorno após um tempo estipulado. A diferença entre essas duas funções temporizadora é que o setTimeout() chama a função apenas uma vez, e o setInterval() chama a função indefinidamente no intervalo de tempo passado, parando somente quando se utiliza a função clearInterval().

Sintaxe:

```js
// sintaxe da função setTimeout, que define um temporizador
// que disparará uma ação definida em tempo estipulado
setTimeout(função, milissegundos, param1, param2, …);
```

* função: é a função que será executada no intervalo de tempo predefinido;

* milissegundos: é o intervalo de tempo estipulado para a chamada da função;

* param1, param2: são os parâmetros utilizados.