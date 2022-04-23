# Largura

A propriedade `width` é usada parar alterar a largura da área de conteúdo de um elemento. Essa área fica dentro do preenchimento, da borda, e da margem de um elemento.

**Nota: As propriedades `min-width` e `max-width` sobrescrevem o `width`.**

Sintaxe:

```css
width: auto | length | initial | inherit;
```

## Valores

Podemos atribuir quatro tipos de valores a propriedade `width`:

* `auto` - O valor será calculado pelo navegador
* `length` - Corresponde aos valores de medidas absolutos ou relativos
* `initial` - Na propriedade `margin` irá corresponder a margem inicial (ou padrão) definida pelo navegador
* `inherit` - Na propriedade `margin` irá corresponder a margem do elemento pai (irá herdar a margem do elemento pai)

```css
/* Valores de largura - <length> */
width: 300px;
width: 25em;

/* Valores percentuais - <percentage> */
width: 75%;

/* Valores com palavras-chave */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Valores Globais */
width: inherit;
width: initial;
width: unset;
```
