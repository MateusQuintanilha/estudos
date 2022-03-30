
# Tratando erros com try catch

## Try catch

O `try catch` é usado para tratar erros que podem acontecer dentro do sistema. Esses erros podem ser por codificação do programador, entrada incorreta de dados pelo usuário, chamadas a API, entre outros.

Sintaxe:

```js
try {
    // bloco de código a ser executado.
} catch (error) {
    // bloco de código que fará o tratamento do erro.
}finally {
    // bloco de código que sempre será executado, tendo erro ou não.
}
```

O bloco de instrução Try Catch pode ser dividido em três partes.

## try

Dentro do `try` ficará o bloco de código a ser executado que poderá gerar algum erro, como por exemplo, chamadas a API, dados de entrada incorreta pelo usuário ou erros de codificação do programador.

## catch

Caso o código que está sendo executado dentro do `try` de algum erro, a execução desse código é interrompida e passará a executar o código dentro do `catch`.

O catch pode receber um parâmetro que normalmente é nomeado como error. Os dados obtidos por esse parâmetro são usados para saber o que ocasionou  esse erro.

## finally

Essa parte é opcional, o código dentro do bloco `finally` será executado independente de dar erro ou não, então se você precisa executar algum bloco de código independente se der erro ou não, poderá utilizar o finally.
