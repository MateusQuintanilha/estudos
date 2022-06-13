# Async/Await

As palavras-chave `async` e `await` facilitam o fluxo de escrita e leitura de um código assíncrono, permitindo a escrita de um código assíncrono que se parece com um síncrono.

## Async

podemos usar a palavra-chave `async` antes do nome da função para criar uma função Assíncrona.

Sintaxe:

```js
async function myFunction() {
    return 1;
}
```

Uma função async sempre retorna uma promessa. Outros valores são agrupados em uma promessa resolvida automaticamente.

Por exemplo, esta função retorna uma promessa resolvida com o resultado de 1; vamos testar:

```js
async function myFunction() {
    return 1;
}

myFunction().then(console.log); // saída: 1
```

Também podemos retornar uma promessa explicitamente, que seria assim:

```js
async function myFunction() {
    return Promise.resolve(1);
}

myFunction().then(console.log); // saída: 1
```

Portanto, `async` garante que a função retorne uma promessa. Mas não é só isso. Há outra palavra-chave que veremos a seguir.

## Await

A palavra-chave `await` funciona somente dentro de uma função `async`, ela é usada antes de uma promessa dentro da função `async` e possui a função de fazer o JavaScript esperar até que essa promessa seja resolvida e retorne o seu resultado.

Sintaxe:

```js
const value = await promise;
```

Agora vamos ao exemplo:

Vamos criar uma função com o nome rand que irá gerar um valor aleatório entre 1s e 3s para podermos usar no setTimeout em seguida vamos criar o exemplo da função async

```js
// Função que retorna um valor aleatório que por padrão vai de 1000 a 5000
function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


async function executar() {
    const fase1 = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("Fase 1"), rand());
    });
    console.log(fase1);

    const fase2 = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("Fase 2"), rand());
    });
    console.log(fase2);

    const fase3 = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("Fase 3"), rand());
    });
    console.log(fase3);
}
executar()
```

Resultado:

```js
/* Saida:
    Fase 1
    Fase 2
    Fase 3
*/
```

Não importa o tempo que demore, no momento em que colocamos a palavra-chave `await` na frente de uma promessa, ela sempre fará o JavaScript esperar a resolução dessa promessa.
