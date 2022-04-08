# Função Recursiva

Uma função recursiva é uma função que chama a si mesma até obter uma instrução de parar.

Vamos criar uma função que conte de 1 a 10:

Para que essa função recursiva funcione precisamos de algumas coisas:

* Uma função recursiva irá precisar se auto-executar.
* Uma função recursiva irá precisar de uma condição que irá parar a sua auto-execução.

```js
function recursiva(max) {
    if(max >= 10) return;

    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);
```
