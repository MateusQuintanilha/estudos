# Escopo de função

É muito parecido com o escopo de bloco, já que o escopo de função na maioria das vezes também usa as chaves `{ }` para representar a área do seu escopo.

Sintaxe:

```js
function funcao() {
    // Todo conteúdo que estiver aqui está dentro do escopo da função
}
```

## Diferenças entre escopo em bloco e escopo de função

Os escopos podem ser parecidos por usarem um par de chaves `{ }` mãos não é a mesma coisa, um das diferenças é que uma variável declarada usando `var` não respeita o escopo de bloco, mas ela respeita o escopo de função.

Vamos ver alguns exemplos:

Exemplo do escopo em bloco:

```js
{
    var exemplo = 'Exemplo';
}

console.log(exemplo); // saída: Exemplo
```

Exemplo do escopo de função:

```js
function funcao() {
    var exemplo = 'Exemplo';
}

console.log(exemplo); // saída: ReferenceError: exemplo is not defined
```

Como podemos ver na comparação dos dois exemplos, no escopo em bloco a declaração usando a palavra `var` não respeitou os limites do escopo, já no escopo de função a declaração usando a palavra `var` respeitou os limites do escopo.
