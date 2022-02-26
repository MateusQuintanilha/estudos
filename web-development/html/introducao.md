# Introdução ao HTML

HTML significa **HyperText Markup Linguage** - em português quer dizer **Linguagem de Marcação de HiperTexto**.

**HiperTexto** são **textos que possuem ligações** com outros textos, imagens, sons ou vídeos.

HTML não é uma linguagem de programação, é uma ***linguagem de marcação*** utilizada para dizer ao seu navegador como estruturar um documento/página web.

## Exibindo textos no navegador

Antes de partimos para a explicação sobre os marcadores, precisamos saber como o navegador interpreta o conteúdo que será exibido em uma página.

Vamos pegar um texto na wikipédia para usar como exemplo:

> Falcão - O Campeão dos Campeões  
>
> é um filme de estrada dos gêneros ação e drama de 1987 estrelado por Sylvester Stallone. Foi produzido e dirigido por Menahem Golan, enquanto seu roteiro foi escrito por Stirling Silliphant e Stallone.
>
> Enredo
>
>Lincoln Hawk "Falcão" é um caminhoneiro solitário que ganha a vida fazendo entregas pelo Estados Unidos da América em seu velho caminhão. Falcão abandonou sua família por sua relação conturbada com seu sogro, Jason Cutler, mas sempre manteve contato via cartas com a sua esposa Christina.
>
>Anos depois, após receber notícias de que Christina estava com uma doença terminal, e a pedido dela, Falcão tem o difícil dever de conquistar a confiança e o amor de seu filho, que abandonou ainda pequeno.

Agora vamos ao teste:

1. Abra um editor de texto, pode ser qualquer editor de texto puro, copie o texto acima e cole no editor de texto.

1. salve o arquivo como index.html e abra-o em um navegador de sua escolha.

Resultado:
> Falcão - O Campeão dos Campeões
> é um filme de estrada dos gêneros ação e drama de 1987 estrelado por Sylvester Stallone. Foi produzido e dirigido por Menahem Golan, enquanto seu roteiro foi escrito por Stirling Silliphant e Stallone.
> Enredo
>Lincoln Hawk "Falcão" é um caminhoneiro solitário que ganha a vida fazendo entregas pelo Estados Unidos da América em seu velho caminhão. Falcão abandonou sua família por sua relação conturbada com seu sogro, Jason Cutler, mas sempre manteve contato via cartas com a sua esposa Christina.
>Anos depois, após receber notícias de que Christina estava com uma doença terminal, e a pedido dela, Falcão tem o difícil dever de conquistar a confiança e o amor de seu filho, que abandonou ainda pequeno.

Não foi exibido o resultado esperado, não é mesmo? Para que possamos exibir as informações com a formatação desejada é necessário que cada trecho do texto tenha uma ***marcação*** indicando qual é o significado dele. Essa marcação irá influenciar como o texto será exibido.

Agora vamos ver como esse texto se comporta utilizando as marcações da maneira correta:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <title>Falcão - O Campeão dos Campeões</title>
</head>

<body>
  <h1>Falcão - O Campeão dos Campeões</h1>
  <p>
    é um filme de estrada dos gêneros ação e drama de 1987 estrelado por Sylvester Stallone. Foi produzido e dirigido
    por Menahem Golan, enquanto seu roteiro foi escrito por Stirling Silliphant e Stallone.
  </p>

  <h2>Enredo</h2>
  <p>
    Lincoln Hawk "Falcão" é um caminhoneiro solitário que ganha a vida fazendo entregas pelo Estados Unidos da América
    em seu velho caminhão. Falcão abandonou sua família por sua relação conturbada com seu sogro, Jason Cutler, mas
    sempre manteve contato via cartas com a sua esposa Christina.
  </p>
  <p>
    Anos depois, após receber notícias de que Christina estava com uma doença terminal, e a pedido dela, Falcão tem o
    difícil dever de conquistar a confiança e o amor de seu filho, que abandonou ainda pequeno.
  </p>
</body>

</html>
```

Copie o código acima, cole no editor de texto e salve o arquivo como index.html e o abra no navegador.

Resultado:

 <h1>Falcão - O Campeão dos Campeões</h1>
  <p>
    é um filme de estrada dos gêneros ação e drama de 1987 estrelado por Sylvester Stallone. Foi produzido e dirigido
    por Menahem Golan, enquanto seu roteiro foi escrito por Stirling Silliphant e Stallone.
  </p>

  <h2>Enredo</h2>
  <p>
    Lincoln Hawk "Falcão" é um caminhoneiro solitário que ganha a vida fazendo entregas pelo Estados Unidos da América
    em seu velho caminhão. Falcão abandonou sua família por sua relação conturbada com seu sogro, Jason Cutler, mas
    sempre manteve contato via cartas com a sua esposa Christina.
  </p>
  <p>
    Anos depois, após receber notícias de que Christina estava com uma doença terminal, e a pedido dela, Falcão tem o
    difícil dever de conquistar a confiança e o amor de seu filho, que abandonou ainda pequeno.
  </p>

---

O resultado ficou muito melhor, não é mesmo? Na próxima parte vamos ver como essas marcações funcionam.
