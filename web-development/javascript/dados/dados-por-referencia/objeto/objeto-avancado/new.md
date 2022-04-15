# new

O operador `new` é usado para invocar uma função construtora, ele possui algumas funções, vamos ver uma lista a seguir:

* Possui a função de criar um novo objeto ligado ao `prototype` da função.
* Atribui o `this` no contexto da invocação da função, ou seja, o valor contido nos argumentos da invocação serão usados no `this`.
* Retorna os dados do `this` de dentro da função para o novo objeto criado.

Vamos aos Exemplos:

Vamos criar uma função vazia com o nome de `User` e vamos executar essa função de duas formas, da primeira forma vamos executar sem o uso da palavra `new` e na segunda vamos fazer o uso dela, em seguida vamos imprimir os dados no console.

```js
function User() {

}

const user1 = User();
const user2 = new User();

console.log(user1); // saída: undefined
console.log(user2); // saída: User {}
```

Na primeira invocação a função retornou `undefined` pois não possui nem um dado sendo retornado usando a palavra `return`.

Na segunda invocação a palavra `new` foi usada, o `new` criou um objeto e retornou esse objeto para o local de invocação e fazendo referência a função construtora, por causa disso que podemos ver o nome da função antes do objeto.

Então ao usar a palavra `new` o javascript cria um objeto e também retorna esse objeto, é como se ele fizesse isso por baixo dos panos:

```js
function User() {
    // Cria o objeto
    let objeto = {};

    // Retorna o objeto
    return objeto;
}
```