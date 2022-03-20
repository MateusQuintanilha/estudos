# Operador Ternário

É o único operador JavaScript que possui três operandos. Este operando é frequentemente usado como um atalho para a instrução (if);

Sintaxe:

```js
Condição ? expr1 : expr2
```

Condição: é uma expressão que é avaliada como (true) ou (false)

expr1, expr2: São expressões com valores de qualquer tipo

Se a condição for (true), o operador retornará o valor de (expr1); se não, ele retorna o valor de (expr2), como no exemplo a seguir que iremos verificar se uma pessoa possui um cartão de membro para entrar no parque.

Exemplo:

```js
let cartaoMembro = true;
const resultado = cartaoMembro ? "Pode entrar" : "Não pode entrar";

console.log(resultado) // saída: Pode Entrar
```
