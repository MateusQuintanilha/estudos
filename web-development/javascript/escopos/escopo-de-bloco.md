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

## Acessando variáveis protegidas por um escopo

Vamos tentar acessar variáveis que estão protegidas dentro de um escopo.

```js
{
    var var01 = 'var';
    let var02 = 'let';
    const var03 = 'const';
}

console.log(var01); // saída: var
console.log(var02); // saída: ReferenceError: var02 is not defined
console.log(var03); // saída: 

```

Conseguimos acessar a variável declarada usando `var` mas não conseguimos acessar a variável usando `let` e a variável usando `const` não foi tentada o acesso pois ocorreu um erro antes, mas podemos comentar o `console.log()` da variável com `let` para testar o `const`:

```js
{
    var var01 = 'var';
    let var02 = 'let';
    const var03 = 'const';
}

console.log(var01); // saída: var
//console.log(var02);
console.log(var03); // saída: ReferenceError: var03 is not defined

```

Também não foi possível acessar a variável declarada usando `const`, mas porque isso acontece?

Isso acontece porque `let` e `const` respeitam a área demarcada pelo escopo em bloco, já a variável declarada usando `var` não respeita esse limite, por isso é muito importante tomar cuidado ao usar variáveis usando `var`, pois o conteúdo atribuído em uma variável usando `var` poderá entrar em conflito com outras variáveis em escopos diferentes.
