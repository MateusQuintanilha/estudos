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

```js
const fabricaDeUsuarios = function() {
    let id = 0;

    function criaUsuario(nome) {
        id++;
        return {id, nome};
    };

    return criaUsuario;
}

const novoUsuario = fabricaDeUsuarios();

console.log(novoUsuario('João')); // saída: { id: 1, nome: 'João' }
console.log(novoUsuario('Jorge')); // saída: { id: 2, nome: 'Jorge' }
console.log(novoUsuario('Paulo')); // saída: { id: 3, nome: 'Paulo' }
console.log(novoUsuario('Lucas')); // saída: { id: 4, nome: 'Lucas' }
```
