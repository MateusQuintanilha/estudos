# Margem

A propriedade `margin` é usada para adicionar um espaçamento transparente ao redor da parte externa do elemento.

Sintaxe:

```css
margin: length | auto | initial | inherit;
```

## Valores

Podemos atribuir quatro tipos de valores a propriedade `margin`:

* `length` - Corresponde aos valores de medidas absolutos ou relativos
* `auto` - O valor será calculado pelo navegador
* `initial` - Na propriedade `margin` irá corresponder a margem inicial (ou padrão) definida pelo navegador
* `inherit` - Na propriedade `margin` irá corresponder a margem do elemento pai (irá herdar a margem do elemento pai)

## Propriedades individuais e Shorthand

Podemos definir as propriedades de forma individual ou em shorthand (abrevia as quatro propriedades individuais em uma única propriedade).

### Propriedades individuais

Podemos usar as propriedades de forma individual:

* `margin-top` - Define a margem na parte superior
* `margin-right` - Define a margem no lado direito
* `margin-bottom` - Define a margem inferior
* `margin-left` - Define a margem no lado esquerdo

Sintaxe:

```css
margin-top: valor;
margin-right: valor;
margin-bottom: valor;
margin-left: valor;
```

### Shorthand

Uma propriedade shorthand é uma união de várias propriedades em apenas uma e para as propriedades de margem podemos usar a propriedade shorthand `margin`.

Podemos usar essa propriedade de várias formas, vamos ver cada uma a seguir:

#### Valor Único

Podemos usar um valor único para representar todos os lados

Sintaxe:

```js
margin: valorUnico;
```

Exemplo:

```css
margin: 20px;
```


#### Valor Vertical e Valor Horizontal

Podemos usar dois valores, o primeiro valor será atribuído na margem vertical (Superior e Inferior) e o segundo valor será atribuído na margem horizontal (Esquerda e Direita).

Sintaxe:

```css
margin: valorVertical valorHorizontal;
```

Exemplo:

```css
margin: 10px 20px;
```

Nesse exemplo as margens superior e inferior irão receber 10px e as margens da esquerda e direita irão receber 20px.

#### Valor Topo, ValorHorizontal e Valor Inferior

Podemos usar três valores, o primeiro valor será atribuído na margem do topo, o segundo valor será atribuído na margem horizontal (Esquerda e Direita) e o terceiro valor será atribuído na margem inferior.

Sintaxe:

```css
margin: valorTopo valorHorizontal valorInferior;
```

Exemplo:

```css
margin: 10px 30px 50px;
```

Nesse exemplo a margem do topo irá receber 10px, as margens da esquerda e direita irão receber 30px e a margem inferior irá receber 50px.

#### Valor Topo, Valor da Direita, Valor Inferior e Valor da Esquerda

Podemos usar quatro valores, os valores serão inseridos de forma horaria começando do topo e terminando no lado esquerdo.

Sintaxe:

```css
margin: valorTopo valorDireita valorInferior valorEsquerda;
```

Exemplo:

```css
margin: 40px 20px 10px 15px;
```

Nesse exemplo a margem do topo irá receber 20px, a margem da direita irá receber 20px, a margem inferior irá receber 10px e a margem da esquerda irá receber 15px.
