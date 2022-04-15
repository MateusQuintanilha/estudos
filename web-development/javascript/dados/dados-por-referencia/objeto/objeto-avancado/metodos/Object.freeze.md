# Congelando um Objeto

Podemos usar o método `Object.freeze()` para congelar um objeto, ou seja, impede que novas propriedades sejam adicionadas a ele e também impede que as propriedades existentes sejam alteradas ou removidas.

Vamos criar um objeto com o nome de pessoa e adiciona a propriedade nome e sobrenome, após isso vamos alterar o valor do nome:

```js
const pessoa = {
    nome: 'Lillian',
    sobrenome: 'Oliver'
}

pessoa.nome = 'Isso ai';
console.log(pessoa); // saída: { nome: 'Isso ai', sobrenome: 'Oliver' }
```

O valor da chave nome foi alterado, agora vamos adicionar o método `Object.freeze()` antes dessa alteração e passar o nome da variável onde o objeto se encontra dentro dos parênteses do método e vamos ver o resultado:

```js
const pessoa = {
    nome: 'Lillian',
    sobrenome: 'Oliver'
}

Object.freeze(pessoa);

pessoa.nome = 'Isso ai';
console.log(pessoa); // saída: { nome: 'Lillian', sobrenome: 'Oliver' }
```

A alteração foi ignorada, agora vamos tentar adicionar uma propriedade dentro do objeto:

```js
const pessoa = {
    nome: 'Lillian',
    sobrenome: 'Oliver'
}

Object.freeze(pessoa);

pessoa.nome = 'Isso ai'; // mudando valor da chave nome
pessoa.idade = 38; // Adicionando a propriedade idade
console.log(pessoa); // saída: { nome: 'Lillian', sobrenome: 'Oliver' }
```

A propriedade idade também não foi adicionada, agora vamos remover o método para ver oque acontece:

```js
const pessoa = {
    nome: 'Lillian',
    sobrenome: 'Oliver'
}

pessoa.nome = 'Isso ai'; // mudando valor da chave nome
pessoa.idade = 38; // Adicionando a propriedade idade
console.log(pessoa); // saída: { nome: 'Isso ai', sobrenome: 'Oliver', idade: 38 }
```

Após a retirada do método `Object.freeze()` as alterações feitas fora do objeto foram aceitas.

**Caso queira ignorar as propriedades que são criadas fora do objeto mas manter a alteração dos valores das propriedades existentes use o método `Object.seal()`**
