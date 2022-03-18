# Unidades de Medidas

As unidades de medidas CSS são classificadas conforme mostrados a seguir:

## Tipos numéricos

* `<integer>` Número inteiro como -10 ou 233
* `<number>` Número inteiro ou decimal como -2.4, 2, 64 ou 0.234
* `<dimension>` É um `<number>` com uma unidade de medida junto: 90deg, 2s, 8px
* `<percentagem>` Representa a fração de outro número: 50%

## Unidades comuns

* `<length>` Representa um valor de distância: px, em, vw
* `<angle>` Representa um ângulo: deg, rad, turn
* `<time>` Representa um tempo: s, ms
* `<frequency>` Representa um número de ocorrências por segundo: Hz, kHz
* `<resolution>` Representa resoluções para dispositivos: dpi, dpcn, dppx

## Unidades de medidas de distância ou comprimento `<length>`

representa as unidades de medidas absolutas e relativas, então caso encontre essa palavra em alguma explicação na documentação, você poderá substituir `<length>` por qualquer unidade de medida absoluta ou relativa.

### Unidades de Medidas Absolutas

São as medidas mais comuns que vemos no dia a dia.  São medidas que possuem um valor fixo e que não dependem de um valor de referência. As duas medidas absolutas mais conhecidas são o pt geralmente utilizados em editores de texto como o word e a a unidade de medida pixel que são pequenos pontos luminosos nas telas. 
|  Nome          |              Tamanho             |
| --             | --                               |
|Centímetros (cm)|		1cm = 38px = 25/64pol
|Milímetros (mm)|		1mm = 1/10 de cm
|Quarto de milímetro (Q)|		1Q = 1/40 de 1cm
|Inches/Polegadas (In)|		1in = 2,54cm = 96px
|Picas (pc)|			1pc = 1/6 de 1pol
|Pontos (pt)|			1pt = 1/72 de 1pol
|Pixels (px)|			1px = 1/96 de 1pol


**As medidas absolutas não são recomendadas para uso em telas porque o tamanho e a densidade de pixels nas telas variam muito, imagine você criar um layout com medidas fixas para uma tela de 40in e um usuário acessá-la com o celular que possui uma tela de 6.5in**

### Pixels (px)

Provavelmente você já conhece ou ouviu falar sobre Pixel. Mas caso não conheça, um pixel  nada mais é do que pequenos pontos luminosos que formam as telas de monitores, televisões, celulares, etc. Então o pixel é a menor e mais precisa unidade de medida em um dispositivo de exibição!

O pixel é uma das principais medidas utilizadas por web designers, grande parte dos desenvolvedores web usam o pixel como unidade principal de seus projetos.

Um detalhe que poucos conhecem é que na verdade, o pixel do CSS não é realmente um pixel da tela do dispositivo, e sim o que chamamos de pixel de referencia que geralmente é maior do que o pixel real. O que acaba por torná-lo uma medida abstrata onde é necessário controlar o mapeamento desse pixel de referencia para o pixel do hardware(acontece por debaixo dos planos).

Sintaxe:

```css
16px
```

### Pontos (pt)

Essa unidade é a mais conhecida pelos designers, principalmente os que estudam tipografia, você também muito provavelmente já usou e nem sabia, ela é geralmente utilizada em propriedades relacionadas a fonte, e a maioria dos editores de texto utilizam essa medida como tamanho da fonte.

Geralmente espera-se que essa medida seja utilizada em folhas de estilo para impressões,quando se precisa ter certeza do tamanho da fonte utilizada. Não é recomendada para a estilização em tela.

```css
12pt
```

### Paica (pc)

Também é uma unidade pouco usada no mundo web, a Paica também vem para o CSS sendo herdada da tipografia. Por não ser uma unidade amplamente conhecida, ela acaba sendo fadada ao esquecimento, mas é sempre importante conhecermos todas as ferramentas que estão à nossa disposição.

Sintaxe:

```css
1pc
```

### Inches/Polegadas (in)

Polegada ou inch em inglês é mais uma unidade de medida que conhecemos do mundo das medidas absolutas - geralmente vemos elas quando queremos comprar uma nova TV ou Monitor, mas essa unidade também existe no mundo web.

Apesar de existirem, elas não costumam ser utilizadas em projetos, uma vez que não existem um uso prático para elas (podemos atingir os mesmo resultados utilizando outras unidades)

```css
1in
```

### Centímetro (cm)
Como nosso país utiliza o sistema de unidade métrico, somos bem familiarizados com essa unidade de medida.

```css
1cm
```

### Milimetro (mm)
Como nosso país utiliza o sistema de unidade métrico, somos bem familiarizados com essa unidade de medida.

Sintaxe:

```css
10mm
```

### Quarto de milímetro (q)
Como o próprio nome já diz, essa medida corresponde a 1/4 de milímetro.

```css
16q
```
## Unidade de Medidas Relativas

Essas medidas variam dependendo do tamanho da área útil disponibilizada ou pelo tamanho da tela e são calculadas tendo como base uma outra unidade de medida.

### M (em)

É uma unidade de medida tipográfica. (Seu nome está relacionada com a letra “M”, onde o tamanho base dessa unidade deriva-se da largura da letra M em maiúscula). Mas no css essa unidade atua como um multiplicador do atributo font-size e por padrão 1em equivale  a 16px, pois os navegadores usam 16px como tamanho padrão para as fontes.

Ela utiliza o tamanho da fonte do elemento pai como referencia, então se mudarmos o tamanho da fonte do elemento pai para 10px então 1em passará a valer 10px e 2em terá o valor de 20px.

```css
1em
```

### Root M (rem)

Possui a mesma funcionalidade da unidade de medida em, mas ao invés de se basear no elemento pai, ela irá se basear no elemento root(raiz) que no caso será o elemento html, então se definirmos um valor para o elemento html de 10px então um rem passará a valer 10px, isso vale para todos os elementos descendentes

```css
1rem
```

### (ex)

Essa é uma unidade tipográfica que calcula a altura de uma letra minúscula em sua linha de base, ela utiliza a letra “x” minuscula para calcular a altura (x-height) de uma fonte especificada em (font-family).

Como o browser sabe esse valor? Esse valor pode vir diretamente com a fonte, o browser pode medir o caractere em caixa baixa ( lower case) e se esses dois não funcionarem, o browser estipula um valor de 0.5em para 1ex.

```css
1ex
```

### Character unit (ch)

Unidade de caractere ou character unit em inglês é definida na documentação como sendo a “medida avançada” da largura do caractere zero (“0”). A ideia é que um elemento com, por exemplo 40ch de largura poderá comportar uma string de 40 caracteres dessa determinada fonte, caso essa fonte seja monospace (todos os caracteres possuem o mesmo tamanho).

```css
1ch
```

### Viewport

Viewport ou  janela de exibição em português é a área visível destinada para exibir um conteúdo, no nosso caso será a área visível onde irá aparecer o conteúdo no navegador, essa área pode variar de acordo com o dispositivo, sendo menor em celulares e maior em desktops ou TVs.

Essa medida possui duas variações:

#### **Viewport Height (vh)**
Height em português significa altura, então uma viewport height irá calcular a altura da janela de exibição.

Sintaxe:

```css
1vh
```

`1vh` é 1% da altura da viewport
    
#### **Viewport Width (vw)**
Width em português significa largura, então uma viewport width irá calcular a largura da janela de exibição.

Sintaxe:

```css
1vw
```

`1vw` é 1% da largura da viewport

#### Viewport Minimum (vmin)
Essa unidade também se relaciona com as dimensões da viewport, mas com um porém. Anteriormente quando vimos vw e vh precisávamos escolher se gostaríamos de nos basear na altura (vh) ou na largura (vw).

Diferente das anteriores, o vmin utiliza como base a menor dimensão da viewport (altura x largura), vamos ao exemplo.

Imagine que estamos trabalhando com uma viewport de 1600px de  altura e 900px de largura. Nesse caso, 1vmin terá o valor de 9px (1% da menor dimensão!), caso tenhamos 100vmin, esse será igual a 900px!

No caso acima, a menor dimensão foi a da largura, porem se tivéssemos 300px para altura e 1400px para largura, nosso valor de referência seria o 300px! Sempre a menor dimensão.

O melhor exemplo que temos é um celular, quando utilizamos o celular na vertical a altura será maior que a largura, agora quando utilizamos o celular na horizontal a altura será menor que a largura.

```css
1vmin
```

#### Viewport Maximum (vmax)
Seguindo a mesma base lógica da unidade anterior, o vmax terá como valor de referência a maior dimensão da viewport. Ou seja, utilizando o mesmo exemplo, se tivermos 1600px de altura e 900px de largura, 1vmax será equivalente a 16px!

No segundo exemplo ocorrerá a mesma inversão, tendo 300px para altura e 1400px para largura, 1vmax será equivalente a 14px. Dessa vez sempre será a maior dimensão.

```css
1vmax
```

### Porcentagem (%)
Apesar de não ser uma unida de de medida, a porcentagem costuma ser bastante utilizada quando falamos de layout responsivo, e fluido, por isso, não poderia deixá- la passar.

A porcentagem permite que criemos módulos que sempre vão se readaptar para ocupar a quantidade especificada. Por exemplo, se definirmos um elemento tendo um tamanho de 50%, independente do dispositivo em questão, esse módulo sempre ocupará metade do espaço que lhe cabe ( caso esteja dentro de algum outro elemento.

```css
50%
```

## Unidades para ângulos `<angle>`

### Graus / Degrees (deg)

Representa o ângulo em graus que podem ser representados com ( ° ou deg), onde se divide um círculo em 360 partes e cada uma das 360 divisões do círculo corresponde a um grau.

Sintaxe:

```css
360deg
```

* 1/12 partes do círculo =  30º = 30deg
* 1/8 partes do círculo =  45° = 45deg
* 1/6 partes do círculo =  60° = 60deg
* 1/4 partes do círculo =  90° = 90deg
* 1/3 partes do círculo = 180° = 180deg
* 1/2 partes do círculo = 270° = 270deg
* 1/1 círculo = 360° = 360deg

### Grado / Gradians (grad)

Representa o ângulo em grado que é representado por (grad), onde se divide um círculo em 400 partes e cada uma das 400 divisões do circulo corresponde a 1grad

```css
400grad
```

* 30º = 33,3333grad
* 45° = 50grad
* 60° = 66,6667grad
* 90° = 100grad
* 180° = 200grad
* 270° = 300grad
* 360° = 400grad


### Radiano / Radians (rad) 

```css
2rad
```

* 30° = 0,523599rad = 0.1666 π rad
* 45° = 0,785398rad = 0.25 π rad
* 60° = 1,0472rad = 0.3333 π rad
* 90° = 1,5708rad = 0.5 π rad
* 180° = 3,14159rad = 1 π rad
* 270° = 4,71239rad = 1.5 π rad
* 360° = 6,28319rad = 2 π rad

### Volta / Turns (turn) 

```css
1turn
```

* 30° = 0.0833333turn
* 45° = 0.125turn
* 60° = 0.166667turn
* 90° = 0.25turn
* 180° = 0.5turn
* 270° = 0.75turn
* 360° = 1turn


## Unidades de duração `<time>`

Representa um valor de tempo expresso em segundo ou milissegundos. É usado em animações, transições e propriedades relacionadas.

### Segundo (s)

Representa um tempo em segundos. Exemplos: 0s, 1.5s, -60s

```css
1.5s
```

### Milissegundo (ms)

Representa um tempo em milissegundos. Exemplos: 0ms, 150.25ms, -60000ms

A conversão entre (s) e (ms) segue a proporção de 1s = 1000ms

```css
1000ms
```

## Unidades para frequências `<frequency>`

Representa uma dimensão de frequência, como o tom de uma voz falando.

Atualmente não é usado em nenhuma propriedade CSS

### Hertz (Hz)

Representa uma frequência em hertz. Exemplo: 0Hz, 1500Hz, 10000Hz.

```css
1500hz
```

### KiloHertz (kHz)

Representa uma frequência em kilohertz. Exemplo: 0kHz, 1.5kHz, 10kHz.

```css
1.5khz
```
