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
