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

## Executando uma função geradora dentro de outra função geradora

Podemos executar uma função geradora dentro de outra, vamos criar uma função geradora com o nome de geradoraInterna e ela será executada dentro da função geradora que possui o nome de geradora.

* Vamos criar uma função com o nome de geradoraInterna e ela possuirá três `yield` com o respectivos valores de 1, 2 e 3.
* Vamos criar a outra função com o nome de geradora e ela possuirá três `yield` com o respectivos valores de 4, 5 e 6.

```js
function* geradoraInterna() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora() {
    yield 4;
    yield 5;
    yield 6;
}
```

Agora iremos precisar usar o `yield` seguido por um asterisco que ficará assim: `yield*` e nele iremos passar a execução da função geradoraInterna, precisamos colocar ela na posição em que queremos executar, nesse caso ela precisará ficar no início, já que queremos a sequencia dos valores de 1 a 6:

```js
function* geradoraInterna() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora() {
    yield* geradoraInterna();
    yield 4;
    yield 5;
    yield 6;
}
```

Vamos atribuir o valor em uma variável com o nome `gerandoValor` e para executar vamos usar um for...of:

```js
const gerandoValor = geradora();

for (let valor of gerandoValor) {
    console.log(valor);
}

/* 
    saída1: 1
    saída2: 2
    saída3: 3
    saída4: 4
    saída5: 5
    saída6: 6
*/
```
