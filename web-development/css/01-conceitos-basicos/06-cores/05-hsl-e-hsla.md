# HSL

As cores são adicionadas por meio de uma função CSS chamada de `hsl()`, que utiliza um sistema de coordenadas cilíndricas para determinar a cor. A função utiliza três parâmetros, são eles:

* `hue`: que significa matiz e identifica a cor conforme o grau da roda de cores que pode variar de 0º a 360º;
* `saturation`: equivale à saturação da cor e é representado por um valor percentual, no qual 0% corresponde à tonalidade cinza e 100% equivale à cor total;
* `lightness`: significa à luminosidade e também é representado por um valor percentual, em qual 0% equivale à cor preta e 100% equivale à cor branca.

Sintaxe:

```css
hsl(hue, saturation, lightness);
```

* hsl(0, 100%, 100%)
* hsl(0, 0%, 0%)
* hsl(0, 100%, 50%)
* hsl(120, 100%, 50%)
* hsl(240, 100%, 50%)

## HSLA

Também podemos adicionar alpha(transparência) mas a função irá mudar:

Sintaxe:

```css
hsl(hue, saturation, lightness, alpha)
```

A transparência varia entre (0 a 1), 0 sendo totalmente transparente e 1 totalmente sem transparência.

50% de transparência é 0.5
