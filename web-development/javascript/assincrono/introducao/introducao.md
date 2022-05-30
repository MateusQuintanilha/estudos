# A diferença entre Síncrono e Assíncrono

## Síncrono

O síncrono sempre irá esperar a tarefa acabar para continuar com a próxima tarefa.

como por exemplo, sempre que colocamos `console.log()` ele espera o `console.log()` ser executado para depois ir para a próxima linha de comando, isso é uma tarefa síncrona.

## Assíncrono

O assíncrono executa a próxima tarefa antes da anterior terminar. O trabalho será executado no 'fundo' e quando terminado, será colocado na fila (Task Queue).

Exemplo: `setTimeOut`, `Ajax`, `Promises`, `Fetch`, `Async`.
