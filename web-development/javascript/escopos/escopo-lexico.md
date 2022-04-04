# Escopo Léxico

O escopo léxico é a ligação do escopo interno com o escopo externo. Em outras palavras, significa que o escopo filho tem acesso às variáveis definidas no escopo pai.

Vamos ao exemplo:

```js
let exemplo = 'Exemplo';

{
    let escopo01 = 'escopo01';
    {
        let escopo02 = 'escopo02';
        {
            let escopo03 = 'escopo03';
            console.log(exemplo, escopo01, escopo02, escopo03); // saída: Exemplo escopo01 escopo02 escopo03
        }
    }
}
```

O escopo mais interno buscou as variáveis em cada escopo até encontrar-las, essa busca começa dentro de sí mesma e depois vai passando para cada escopo mais externo até chegar no escopo global, caso não ache nada no escopo global irá gerar um erro.

Agora vamos para outro exemplo:

Vamos criar duas funções:

* Vamos criar uma função com o nome pai.
  * Dentro dela irá ter uma variável com o nome teste e uma função com o nome filho.
  * Dentro da função filho vamos criar um `console.log` e vamos passar a variável teste nele.
  * Vamos executar a função filho dentro da função pai.

```js
function pai() {
    let teste = 'Variável criada na função pai';

    function filho() {
        console.log(teste);
    }
    filho();
}
pai();
```

O `console.log(teste)` procurou a variável teste dentro do escopo filho e não encontrou, então passou a procurar no escopo pai e encontrou, após encontrar a variável o `console.log` imprimiu o resultado da variável.

Agora vamos fazer algo diferente, Vamos retornar a função filho e criar uma variável com o nome variavel01 no escopo global e vamos atribuir a execução da variável pai a ela.

```js
function pai() {
    let teste = 'Variável criada na função pai';

    function filho() {
        console.log(teste);
    }

    return filho;
}

const variavel01 = pai();
```

O que você acha que vai acontecer ao imprimir a variável01? Se imaginou que irá imprimir a função filho, você acertou:

```js
function pai() {
    let teste = 'Variável criada na função pai';

    function filho() {
        console.log(teste);
    }

    return filho;
}

const variavel01 = pai();
console.log(variavel01); // saída: [Function: filho]
```

Então agora a variável01 passar a possuir a função filho correto? Então se executarmos a variável01 que possui a função filho, essa função será executada.

```js
function pai() {
    let teste = 'Variável criada na função pai';
    function filho() {
        console.log(teste);
    }
    return filho;
}

const variavel01 = pai();
console.log(variavel01); // saída: [Function: filho]

variavel01(); // saída: Variável criada na função pai
```

Não sei se você percebeu, mas estamos acessando uma variável que está dentro da função pai, estamos tendo acesso a essa variável através da função filho dentro dela e podemos fazer isso diversas vezes:

```js
function pai() {
    let teste = 'Variável criada na função pai';
    function filho() {
        console.log(teste);
    }
    return filho;
}

const variavel01 = pai();
console.log(variavel01); // saída: [Function: filho]

variavel01(); // saída: Variável criada na função pai
variavel01(); // saída: Variável criada na função pai
variavel01(); // saída: Variável criada na função pai
variavel01(); // saída: Variável criada na função pai
```
