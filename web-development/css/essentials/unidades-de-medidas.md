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
