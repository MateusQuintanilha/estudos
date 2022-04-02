# Escopo em Bloco

Um escopo em bloco é um escopo delimitado por chaves `{ }`, todo o conteúdo que estiver dentro das chaves não serão visíveis fora dele, exceto por variáveis que são declaradas sem uma palavra-chave ou as variáveis declaradas usando `var`.

Vamos aos exemplos:

```js
{}
```

As chaves no exemplo acima delimita uma região onde o conteúdo do escopo será visível, agora vamos criar algumas variáveis dentro desse escopo.

```js
{
    let var01 = 'let';
    const var02 = 'const';
    var var03 = 'var';
}
```

## Acessando variáveis dentro do próprio escopo

Se tentarmos acessar essas variáveis dentro do próprio escopo, elas serão visíveis, vamos adicionar essas variáveis em um `console.log()`.

```js
{
    var var01 = 'var';
    let var02 = 'let';
    const var03 = 'const';

    console.log(var01); // saída: var
    console.log(var02); // saída: let
    console.log(var03); // saída: const
}
```

Conseguimos acessar as variáveis.
