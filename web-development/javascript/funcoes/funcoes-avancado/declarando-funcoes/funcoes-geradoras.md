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

