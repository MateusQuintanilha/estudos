# text-align

A propriedade `text-align` é usada para definir o alinhamento horizontal do texto.

Sintaxe:

```css
/* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: unset;
```

* start
  * Igual left se a direção é esquerda-para-direita e right se a direção é direita-para-esquerda.
* end
  * Igual right se a direção é esquerda-para-direita e left se a direção é direita-para-esquerda.
* left
  * O conteúdo é alinhado na borda esquerda do box.
* right
  * O conteúdo é alinhado na borda direita do box.
* center
  * Os conteúdos inline são centralizados entre a linha da caixa.
* justify
  * Os conteúdos inline são justificados. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.
* justify-all
  * Semelhante a justify, porém força a última linha a ser justificada.
