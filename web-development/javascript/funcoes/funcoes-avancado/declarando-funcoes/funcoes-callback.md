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

Se já utilizou o método de addEventListener, então você já usou callback, pois no segundo argumento desse método é preciso passar uma função de callback:

```js
addEventListener('click', function(){ /* Função de Callback */ } )
```

Outro Exemplo:

Vamos criar 7 funções:

```js
function function01() {
    console.log('Executando a primeira função');
}
function function02() {
    console.log('Executando a segunda função');
}
function function03() {
    console.log('Executando a terceira função');
}
function function04() {
    console.log('Executando a quarta função');
}
function function05() {
    console.log('Executando a quinta função');
}
function function06() {
    console.log('Executando a sexta função');
}
function function07() {
    console.log('Executando a sétima função');
}

function01();
function02();
function03();
function04();
function05();
function06();
function07();

console.log('Todas as funções foram executadas');

/* saída de todas as execuções em ordem:
    Executando a primeira função
    Executando a segunda função
    Executando a terceira função
    Executando a quarta função
    Executando a quinta função
    Executando a sexta função
    Executando a sétima função
    Todas as funções foram executadas
*/
```

A execução das funções saiu em ordem porque não teve atraso em nem uma, mas se colocarmos um setTimeOut de 2s na segunda função, ela só será executada após dois segundos e nesse tempo todas as outras funções terão sido executadas:

```js
function function01() {
    console.log('Executando a primeira função');
}
function function02() {
    setTimeout(()=>{console.log('Executando a segunda função');}, 2000);
}
function function03() {
    console.log('Executando a terceira função');
}

function01();
function02();
function03();

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
// Função que gerá um valor aleatório  entre 1000 e 4000
function rand(min = 1000, max = 4000) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Callback
function function01(callback) {
    setTimeout(()=>{
        console.log('Executando a primeira função');
        if(callback) callback();
    }, rand());
}
function function02(callback) {
    setTimeout(()=>{
        console.log('Executando a segunda função');
        if(callback) callback();
    }, rand());
}
function function03(callback) {
    setTimeout(()=>{
        console.log('Executando a terceira função');
        if(callback) callback();
}, rand());
}
function function04(callback) {
    setTimeout(()=>{
        console.log('Executando a quarta função');
        if(callback) callback();
}, rand());
}
function function05(callback) {
    setTimeout(()=>{
        console.log('Executando a quinta função');
        if(callback) callback();
}, rand());
}
function function06(callback) {
    setTimeout(()=>{
        console.log('Executando a sexta função');
        if(callback) callback();
}, rand());
}
function function07(callback) {
    setTimeout(()=>{
        console.log('Executando a sétima função');
        if(callback) callback();
}, rand());
}
```

Podemos executar essa funções callback de duas maneiras:

A primeira maneira é chamada callback hell:

```js
// Callback HELL
function01(function() {
    function02(function(){
        function03(function(){
            function04(function(){
                function05(function(){
                    function06(function(){
                        function07(function(){
                            console.log('Todas as funções foram executadas');
                        })
                    })
                })
            })
        });
    });
});

/* saída de todas as execuções em ordem:
    Executando a primeira função
    Executando a segunda função
    Executando a terceira função
    Executando a quarta função
    Executando a quinta função
    Executando a sexta função
    Executando a sétima função
    Todas as funções foram executadas
*/
```

Mas ela tem um problema, pois criamos várias funções uma dentro da e em momentos em que precisarmos criar muitas funções uma dentro da outra será complicado para localizar um funções pois as linhas de códigos ficarão gigantes.

Para resolver esse problema podemos executar as funções da maneira abaixo:

```js
function01(functionCallback01);
function functionCallback01() {
    function02(functionCallback02);
}
function functionCallback02() {
    function03(functionCallback03);
}
function functionCallback03() {
    function04(functionCallback04);
}
function functionCallback04() {
    function05(functionCallback05);
}
function functionCallback05() {
    function06(functionCallback06);
}
function functionCallback06() {
    function07(functionCallback07);
}
function functionCallback07() {
    console.log('Todas as funções foram executadas');
}

/* saída de todas as execuções em ordem:
    Executando a primeira função
    Executando a segunda função
    Executando a terceira função
    Executando a quarta função
    Executando a quinta função
    Executando a sexta função
    Executando a sétima função
    Todas as funções foram executadas
*/
```
