# Função Callback

Uma função callback é uma função que é passada como argumento para outra função, que então é inicializada dentro da função externa para completar algum tipo de rotina ou ação.

Exemplo:

```js
function frutas(callback) {
    callback();
}

frutas(
    () => {
        console.log('Morango');
    }
); // saída: Morango
```

Outro Exemplo:

```js
function mensagem(name) {
    console.log('Olá '+ name);
}

function myName(qualquerNome) {
    let name = 'mateus';
    qualquerNome(name);
}

myName(mensagem); // saída: Olá mateus
```

Outro Exemplo:

Vamos criar 3 funções:

```js
function funcao01() {
    console.log('Executando a primeira função');
}
function funcao02() {
    console.log('Executando a segunda função');
}
function funcao03() {
    console.log('Executando a terceira função');
}

funcao01();
funcao02();
funcao03();

console.log('Todas as funções foram executadas');

/* saída de todas as execuções em ordem:
    Executando a primeira função
    Executando a segunda função
    Executando a terceira função
    Todas as funções foram executadas
*/
```

A execução das funções saiu em ordem porque não teve atraso em nem uma, mas se colocarmos um setTimeOut de 2s na segunda função, ela só será executada após dois segundos e nesse tempo todas as outras funções terão sido executadas:

```js
function funcao01() {
    console.log('Executando a primeira função');
}
function funcao02() {
    setTimeout(()=>{console.log('Executando a segunda função');}, 2000);
}
function funcao03() {
    console.log('Executando a terceira função');
}

funcao01();
funcao02();
funcao03();

console.log('Todas as funções foram executadas');

/* saída de todas as execuções em ordem:
    Executando a primeira função
    Executando a terceira função
    Todas as funções foram executadas
    Executando a segunda função
*/
```

Perceba que a segunda função foi executada por ultimo, pois ela teve um atraso de dois segundos, mas existem casos em que isso não poderá acontecer e para resolver isso iremos usar a callback.

Possuímos 3 funções que precisam ser executadas em sequência mas não sabemos quanto tempo o javascript levar para acessar o banco de dados ou para receber os dados de uma API, na internet precisamos fazer coisas que não conseguimos controlar quanto tempo, para simular esse tempo de forma aleatória, vamos criar uma função que irá gerar um valor randômico entre 2 e 4 segundos.

```js
function tempoAleatorio(min = 2000, max = 4000) {
    const numeroAleatorio = Math.random() * (max - min) + min;
    return Math.floor(numeroAleatorio);
}

function funcao01(callback) {
    setTimeout(()=>{
        console.log('Executando a primeira função');
        if(callback) callback();
    }, tempoAleatorio());
}
function funcao02(callback) {
    setTimeout(()=>{
        console.log('Executando a segunda função');
        if(callback) callback();
    }, tempoAleatorio());
}
function funcao03(callback) {
    setTimeout(()=>{
        console.log('Executando a terceira função');
        if(callback) callback();
}, tempoAleatorio());
}

funcao01(function() {
    funcao02(function(){
        funcao03(function(){
            console.log('Todas as funções foram executadas');
        });
    });
});

/* saída de todas as execuções em ordem:
    Executando a primeira função
    Executando a segunda função
    Executando a terceira função
    Todas as funções foram executadas
*/
```

```js
function tempoAleatorio(min = 2000, max = 4000) {
    const numeroAleatorio = Math.random() * (max - min) + min;
    return Math.floor(numeroAleatorio);
}

function funcao01(callback) {
    setTimeout(()=>{
        console.log('Executando a primeira função');
        if(callback) callback();
    }, tempoAleatorio());
}
function funcao02(callback) {
    setTimeout(()=>{
        console.log('Executando a segunda função');
        if(callback) callback();
    }, tempoAleatorio());
}
function funcao03(callback) {
    setTimeout(()=>{
        console.log('Executando a terceira função');
        if(callback) callback();
}, tempoAleatorio());
}

funcao01(funcao01Callback);

function funcao01Callback() {
    funcao02(funcao02Callback);
}

function funcao02Callback() {
    funcao03(funcao03Callback);
}

function funcao03Callback() {
    console.log('Todas as funções foram executadas');
}

/* saída de todas as execuções em ordem:
    Executando a primeira função
    Executando a segunda função
    Executando a terceira função
    Todas as funções foram executadas
*/
```
