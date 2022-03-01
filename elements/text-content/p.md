# Parágrafo

 Usamos o elemento `<p>` para conter parágrafos de textos.

Sintaxe:
 ```html
<p>Parágrafo</p>
```

Exemplo:

Vamos ver um exemplo de um texto que possui dois parágrafos sem utilizar o elemento de parágrafo:

>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptas dicta voluptate cum dignissimos laboriosam eveniet ratione quia quos similique fuga deleniti nam nemo aliquam modi consequuntur, perferendis veritatis voluptatibus!
>Suscipit iste, ipsa repellat esse minima asperiores aspernatur at laudantium natus itaque iure autem veritatis vitae architecto. Quis, culpa! Cumque tempora perspiciatis quis quasi itaque nostrum sed laborum possimus voluptatum?

O navegador não separou os parágrafos do texto, pois pra ele isso não é um parágrafo. O navegador só irá identificar um parágrafo quando informarmos para ele que esse conteúdo é um parágrafo.

Agora vamos separar os dois parágrafos usando o elemento `<p>`, use a tag de abertura no início do parágrafo e a tag de fechamento no final do parágrafo:

```html
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptas dicta voluptate cum dignissimos laboriosam eveniet ratione quia quos similique fuga deleniti nam nemo aliquam modi consequuntur, perferendis veritatis voluptatibus!
</p>
<p>
  Suscipit iste, ipsa repellat esse minima asperiores aspernatur at laudantium natus itaque iure autem veritatis vitae architecto. Quis, culpa! Cumque tempora perspiciatis quis quasi itaque nostrum sed laborum possimus voluptatum?
</p>
```

Resultado:

> <p>
>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptas dicta voluptate cum dignissimos laboriosam eveniet ratione quia quos similique fuga deleniti nam nemo aliquam modi consequuntur, perferendis veritatis voluptatibus!
> </p>
> <p>
>  Suscipit iste, ipsa repellat esse minima asperiores aspernatur at laudantium natus itaque iure autem veritatis vitae architecto. Quis, culpa! Cumque tempora perspiciatis quis quasi itaque nostrum sed laborum possimus voluptatum?
> </p>
