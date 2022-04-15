# Selando um objeto

O método `Object.seal()` é usado para selar um objeto, esse método irá ignorar a criação de novas propriedades e marcando todas as propriedades existentes como não configuráveis. Os valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).

Vamos criar um objeto com o nome pessoa e vamos adicionar as propriedades nome e sobrenome, fora do objeto vamos alterar o valor do nome e criar uma nova propriedade chamada idade.

```js
const pessoa = {
    nome: 'Lillian',
    sobrenome: 'Oliver'
}

pessoa.nome = 'Isso ai'; // mudando valor da chave nome
pessoa.idade = 38; // Adicionando a propriedade idade

console.log(pessoa); // saída: { nome: 'Isso ai', sobrenome: 'Oliver', idade: 38 }
```

As alterações foram adicionadas ao objeto, agora vamos adicionar o método `Object.seal()` antes dessas alterações e vamos ver oque acontece:

```js
const pessoa = {
    nome: 'Lillian',
    sobrenome: 'Oliver'
}

Object.seal(pessoa);

pessoa.nome = 'Isso ai'; // mudando valor da chave nome
pessoa.idade = 38; // Adicionando a propriedade idade

console.log(pessoa); // saída: { nome: 'Isso ai', sobrenome: 'Oliver' }
```

Após o uso do método `Object.seal()` o valor de nome foi alterado, mas a adição da nova propriedade idade foi ignorada.

**Caso também queira ignorar a alteração de todas as propriedades existente use o método `Object.freeze()`**
