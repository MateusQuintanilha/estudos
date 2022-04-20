# Combinadores

## Combinador Lista
O combinador de lista é representado pela virgula ( , ), esse combinador serve para agrupar vários seletores em uma única regra.

Sintaxe:

```css
seletor1, seletor2 {

}
```

Exemplo:

Adiciona a cor vermelha nos elementos `<h1>`, `<h2>`, `<h3>`, `<p>`.

```css
h1, h2, h3, p {
  color: red;
}
```

## Combinador Descendentes

O combinador de descendentes é representado por um (espaço) entre o primeiro e o segundo seletor.

* irá pegar todos os descendentes, não importa o quão profundo ele esteja.

Sintaxe:

```css
seletor1 seletor2 {

}
```

Exemplo:

Adiciona a cor azul em todos os elementos `<p>` que estiverem dentro do elemento `<header>`.

* Nota: Vai trocar a cor de todos os elementos `<p>` que forem filhos diretos ou descendentes.

```css
header p {
  color: blue;
}
```

## Combinador filhos Diretos

O combinador filhos Diretos é representado pelo símbolo de “maior que” (>), ele indica que deve-se selecionar apenas os filhos diretos daquele seletor, se caso possuir algum seletor descendente com as mesma características do seletor a direita, ele será ignorado.

Sintaxe:

```css
seletor1 > seletor2 {

}
```

Exemplo:

Adiciona a cor verde somente nos elementos `<p>` que são filhos direto do elemento `<body>`. Então se o elemento `<body>` possuir uma div e dentro dela um elemento `<p>`, esse elemento `<p>` não irá receber a mudança de cor.

```css
body > p {
  color: green;
}
```

## Combinador Irmão Adjacente

O combinador Irmão Adjacente é representado pelo símbolo de “mais” (+). Irá adicionar as mudanças no próximo seletor2 que está exatamente após o seletor1.

Sintaxe:

```css
seletor1 + seletor2 {

}
```

Exemplo:

Adiciona a cor no elemento `<p>` que está exatamente após o elemento `<h1>`.

```css
h1 + p {
color: pink;
}
```

## Combinador Irmão Geral

O combinador Irmão Geral é representado pelo símbolo de “til” (~), irá adicionar as regras em todos os elementos que estão sendo representados pelo seletor2 após o seletor1.
Sintaxe:

```css
seletor1 ~ seletor2 {

}
```

Exemplo:

Adiciona a cor roxa em todos os elementos `<p>` que estiverem depois do elemento `<h1>`

```css
h1 ~ p {
color: purple;
}
```
