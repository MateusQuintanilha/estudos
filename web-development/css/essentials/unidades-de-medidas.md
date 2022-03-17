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
