# Funções Closures

Um closure é uma função interior que tem acesso a variáveis e parâmetros de uma função exterior e também tem acesso ao conteúdo dos escopos mais externos e das variáveis globais, mesmo quando a função é executada fora desse escopo léxico.

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
