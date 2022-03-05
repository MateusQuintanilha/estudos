# Endereço de Contato

O elemento `<address>` fornece informações de contato para o seu ancestral `<article>` ou `<body>` mais próximo; no segundo caso, ele se aplica ao documento inteiro.

Podemos fornecer informações de contato como endereço físico, URL, endereço de e-mail, número de telefone, identificador de mídia social, coordenadas geográficas, e assim por diante. Devemos inclui o nome da pessoa ou organização à qual as informações de contato se referem.

`<address>` pode ser usado em uma variedade de contextos, como fornecer informação de contato de uma empresa no header da página, ou indicar o autor de um artigo incluindo um elemento `<address>` dentro do `<article>`.

Nota: Não devemos adicionar informações além das informações de contato, como data de publicação ou título.

Sintaxe:

```html
<address></address>
```

Exemplo

```js
  <address>
    Voce pode contatar o autor em <a href="http://www.exemple.com/contact">www.exemple.com</a>.<br>
    Você também pode nos visitar:<br>
    Exemple Foundation<br>
    Rua Exemplo, bairro exemplo número 000<br>
    Cidade exemplo-RJ<br>
    CEP 00.000-00
  </address>
```

