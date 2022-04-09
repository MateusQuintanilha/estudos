# Função Geradora (Generator Function)

São funções em que partes do código podem ser adiados e posteriormente executados. Os contextos ficam salvos a cada reentrada.

Para cria uma função geradora iremos usar a palavra reservada `function` seguido por um asterisco `*`, ficando assim `function*`.

Sintaxe:

```js
function* geradora() {
}
```

## yield

Também vamos precisar usar a palavra reservada `yield` para retornar o conteúdo e pausar a execução da função.

Vamos criar 3 `yield` e vamos retornar um valor em cada `yield`.

```js
function* geradora() {
    let contador = 1;
    yield contador;

    contador++
    yield contador;

    contador++
    yield contador;
}
```

Agora para executar essa função vamos atribuir a sua execução a uma variável:

```js
const gerandoValor = geradora();
```

em seguia vamos imprimir o valor dessa variável para ver oque sai:

```js
console.log(gerandoValor); // saída: Object [Generator] {}
```

A variável `gerandoValor` contém um objeto Generator.

## Executando a função e usando o método next

Para executar essa função precisamos usar o método `next()`. Esse método é responsável por executar o conteúdo da função onde o método foi iterado até a primeira expressão `yield`, esse `yield` irá retornar o seu conteúdo para o `next()` que em seguida irá criar e retornar um objeto contendo a propriedade `value` contendo o valor retornado pelo `yield` e a propriedade boolean `done` que é responsável por indicar se o gerador produziu o seu último valor, enquanto a função geradora possui valor para retornar essa propriedade será `true`, ao chegar em seu último valor essa propriedade passará a ter o valor de `false`.

```js
console.log(gerandoValor.next()); // saída: { value: 1, done: false }
console.log(gerandoValor.next()); // saída: { value: 2, done: false }
console.log(gerandoValor.next()); // saída: { value: 3, done: false }
console.log(gerandoValor.next()); // saída: { value: undefined, done: true }
```

para acessar o valor do método `next()` só precisamos acessa a propriedade `value`:

```js
console.log(gerandoValor.next().value); // saída: 1
console.log(gerandoValor.next().value); // saída: 2
console.log(gerandoValor.next().value); // saída: 3
console.log(gerandoValor.next().value); // saída: undefined
```

Também podemos criar um for...of para acessar esses valores e o for...of saberá quando parar a sua execução:

```js
for (let valor of gerandoValor) {
    console.log(valor);
}
/* 
    saída1: 1
    saída2: 2
    saída3: 3
*/
```