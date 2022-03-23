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
