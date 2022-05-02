# Largura

A propriedade `height` é usada parar alterar a altura da área de conteúdo de um elemento. Essa área fica dentro do preenchimento, da borda, e da margem de um elemento.

**Nota: As propriedades `min-height` e `max-height` sobrescrevem o `height`.**

Sintaxe:

```css
height: auto | length | initial | inherit;
```

## Valores

Podemos atribuir quatro tipos de valores a propriedade `height`:

* `auto` - O valor será calculado pelo navegador
* `length` - Corresponde aos valores de medidas absolutos ou relativos
* `initial` - Na propriedade `margin` irá corresponder a margem inicial (ou padrão) definida pelo navegador
* `inherit` - Na propriedade `margin` irá corresponder a margem do elemento pai (irá herdar a margem do elemento pai)

```css
/* Valores de altura - <length> */
height: 300px;
height: 25em;

/* Valores percentuais - <percentage> */
height: 75%;

/* Valores com palavras-chave */
height: 25em border-box;
height: 75% content-box;
height: max-content;
height: min-content;
height: available;
height: fit-content;
height: auto;

/* Valores Globais */
height: inherit;
height: initial;
height: unset;
```
