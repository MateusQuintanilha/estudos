# Combinador filhos Diretos

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
