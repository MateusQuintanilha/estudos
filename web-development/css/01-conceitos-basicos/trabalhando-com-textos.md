# Trabalhando com textos

## direction

A propriedade `direction` é usada para definir a direção do texto, em alguns idiomas o texto é escrito da direita para a esquerda (como hebraico ou árabe) e em outros idiomas o texto é escrito da esquerda para a direita (como o inglês ou português).

* `ltr`
  * ltr (left to right) define que o texto será exibido da esquerda para a direita.
  * CSS

     ```css
    direction: ltr;
    ```

  * Exemplo:
    <div style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem; direction: ltr;">O rato roeu a roupa do rei de Roma</div>
* `rtl`
  * rtl (right to left) define que o texto será exibido da direita para a esquerda.
  * CSS

    ```css
    direction: rtl;
    ```

  * Exemplo:

<div style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem; direction: rtl;">O rato roeu a roupa do rei de Roma</div>

---

## letter-spacing

A propriedade `letter-spacing` controla o espaçamento entre os caracteres do texto.

* normal
  * <span style="font-family: Helvetica, Arial, Verdana, sans-serif;  letter-spacing: normal;">O rato roeu a roupa do rei de Roma</span>
* Com espaçamento de 0.3rem
  * <span style="font-family: Helvetica, Arial, Verdana, sans-serif; letter-spacing: 0.3rem;">O rato roeu a roupa do rei de Roma</span>

Sintaxe:

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

---

## line-height

A propriedade `line-height` controla o espaçamento entre as linhas de um texto.

A altura de linha possui dependência direta com a escala e tipografia. Então tenha cuidado ao utilizar.

Recomendo usar as seguintes medidas:

* Textos de corpo
  * com tamanho entre 14 e 24
  * Use entre 1.3x à 1.5x
  * Exemplo:
    * font-size/line-height
    * 16/24 ou 24/36
    * 16/24 <div style=" width: 150px; font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 16px; line-height: 24px; ">O rato roeu a roupa do rei de Roma</div>
    * 24/36 <div style=" width: 150px; font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 24px; line-height: 36px; ">O rato roeu a roupa do rei de Roma</div>
* Título
  * Acima de 30
  * Use entre 1 à 1.25x
  * Exemplo:
    * font-size/line-height
    * 32/40 ou 64/72
    * 32/40 <div style=" width: 300px; font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 32px; line-height: 40px; ">O rato roeu a roupa do rei de Roma</div>
    * 64/72 <div style=" width: 600px; font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 64px; line-height: 72px; ">O rato roeu a roupa do rei de Roma</div>

Sintaxe:

```css
/* Keyword value */
line-height: normal;

/* Unitless values: use this number multiplied
by the element's font size */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: revert;
line-height: unset;
```

---

## line-break

A propriedade `line-break` é usada para quebrar linhas dentro de uma palavra.

Sintaxe:

```css
/* Keyword values */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;

/* Valores Globais */
line-break: inherit;
line-break: initial;
line-break: unset;
```

### Valores

* auto
  * quebra o texto usando a regra padrão de quebra de linha.
* loose
  * quebra o texto usando a regra de quebra de linha que é mais curta, como um jornal.
* normal
  * quebra o texto usando a regra padrão de quebra de linha.
* strict
  * quebra o texto usando uma regra rigorosa para a quebra de linha.

---

## text-align

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

### Valores

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

---

## text-transform

A propriedade `text-transform` é usada para definir os efeitos de capitalização (maiúsculas e minúsculas) do texto.

Sintaxe:

```css
/* Keyword values */
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
text-transform: full-width;

/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: unset;
```

### Valores

* capitalize
  * Causa o efeito de transformar as primeiras letras das palavras do texto em maiúscula.
* uppercase
  * Causa o efeito de transformar todas as letras das palavras do texto em maiúscula.
* lowercase
  * Causa o efeito de transformar todas as letras das palavras do texto em minúsculas.
* none
  * Não causa qualquer efeito de transformação.
* full-width
  * É uma palavra-chave que força a escrita de um caractere – principalmente ideogramas e escritas latinas – dentro de um quadrado, permitindo que eles sejam alinhados nas escritas usuais do leste asiático (como chinês ou japonês).

---

## text-decoration

A propriedade `text-decoration` é a forma reduzida (shorthand) das propriedades `text-decoration-line`, `text-decoration-color` e `text-decoration-style`. Ela é usada para definir uma linha decorativa no texto.

### Valores

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
```

---

## text-overflow

A propriedade `text-overflow` trata de situações em que o texto é cortado quando transborda da caixa do elemento.

```css
text-overflow: clip;
text-overflow: ellipsis;
text-overflow: "string";
```

### Valores

* clip
  * Corta o texto exatamente na linha vertical que passa pelo lado direito do container. Neste caso é possível até mesmo que uma letra do texto seja cortada na vertical. Este é o valor padrão da propriedade.
* ellipsis
  * Insere três pontos (...) antes do corte do texto. É a convenção típica indicativa de interrupção de texto.
* string
  * Este valor insere uma string antes do corte do texto.

---