# Introdução ao CSS

CSS significa **Cascading Style Sheets** - em português quer dizer **Folha de Estilo em Cascata**.

É uma linguagem de folha de estilo usada para estilizar e organizar conteúdos de representação visual em um documento HTML ou XML.

É possível alterar a cor do texto, a cor do fundo, a fonte, o tamanho da fonte, o espaçamento entre parágrafos.

A CSS descreve como os elementos devem ser renderizados na tela, no papel, na fala ou em outra mídia.

## Criando um arquivo css
Abra o editor, crie um arquivo novo e salve como style.css no diretório para arquivos do tipo css.

## Adicionando um arquivo css no HTML

Abra o documento HTML e no elemento `<head>` digite o conteúdo abaixo:

```html
<link href="" rel="stylesheet">
```

no atributo `href` passe o diretório e o nome do arquivo.css que você criou. Feito isso, salve o documento.

## Anatomia de um conjunto de regras CSS

CSS é uma linguagem baseada em conjuntos de regras (mas geralmente usamos o termo "regra", por ser mais curto).

Sintaxe:

```css
seletor {
  propriedade:valor;
}
```

* ***Seletor***
  * É usado para selecionar o elemento HTML a ser estilizado.

* ***Propriedade***
  * São palavras chave que podemos utilizar para define o que será alterador no elemento HTML.

* ***Valor***
  * Define o valor que será alterado no elemento HTML, esse valor é baseado no tipo de propriedade utilizada.

* ***Linha de declaração***
  * É formada por um conjunto de `propriedade:valor`

* ***Bloco de declaração:*** 
  * É formado pelo par de chaves `{ }` e todo o conteúdo que estiver em seu interior.

* ***Regra:***
  * Uma regra é composta pelo seletor e o bloco de declaração.

**IMPORTANTE:** Devemos separar a propriedade e o valor utilizando dois pontos `:`. `propriedade : valor`   
**IMPORTANTE:** Devemos usar ponto e vírgula no final de cada linha de declaração `propriedade:valor;`

---

Vamos ao exemplo, vamos trocar a cor do texto de todos os elementos de parágrafo para azul.

```css
  p {
    color: blue;
  }
```

## Selecionando múltiplos elementos

Podemos usar mais de um seletor por bloco de declaração, para fazer isso vamos usar uma vírgula `,` para separar um seletor de outro.

Exemplo: Vamos trocar a cor do texto do título e do parágrafo pra verde.

```css
  h1, p {
    color: green;
  }
```
Nota: Todos os elementos da página que são h1 ou p terão suas cores alteradas.

