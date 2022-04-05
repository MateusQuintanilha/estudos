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