# Combinador Irmão Geral

O combinador Irmão Geral é representado pelo símbolo de **til** `~`, irá adicionar as regras em todos os elementos que estão sendo representados pelo seletor2 após o seletor1.
Sintaxe:

```css
seletor1 ~ seletor2 {

}
```

Exemplo:

altera a cor de texto para a cor roxa em todos os elementos `<p>` que estiverem depois do elemento `<h1>`

```css
h1 ~ p {
color: purple;
}
```
