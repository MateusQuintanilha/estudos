# text-decoration

A propriedade `text-decoration` é a forma reduzida (shorthand) das propriedades `text-decoration-line`, `text-decoration-color` e `text-decoration-style`. Ela é usada para definir uma linha decorativa no texto.

* `text-decoration-line`
  * none
    * nenhuma linha é desenhada e qualquer decoração existente é removida.
  * underline
    * Causa o efeito sublinhado. A linha decorativa é desenhada sob o texto.
  * overline
    * Causa o efeito superlinhado. A linha decorativa é desenhada sobre o texto.
  * line-through
    * Causa o efeito de uma linha decorativa passando pelo meio das letras.
  * Podemos usar mais de uma delas ao mesmo tempo
* `text-decoration-color`
  * Aceita todas as formas de escritas de cor.
* `text-decoration-style`
  * solid
    * Desenha uma linha solida
  * double
    * Desenha uma linha dupla
  * dotted
    * Desenha uma linha pontilhada
  * dashed
    * Desenha uma linha tracejada
  * wavy
    * Desenha uma linha ondulada

Sintaxe:

```css
/* Valores Chave */
text-decoration: none;
text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
text-decoration: underline overline line-through;
text-decoration: red underline overline wavy;

/* Valores Globais */
text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
