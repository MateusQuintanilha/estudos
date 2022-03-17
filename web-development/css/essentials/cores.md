# Cores

Existem várias formas de utilizar cores no CSS. Vamos começar com as cores por nome.

## Por nome
Os navegadores modernos suportam no total 140 cores por nome. Pegaram alguns tons de cores e batizaram com os nomes em inglês.Vamos pegar 5 cores como exemplo:

<span style="display: inline-block; width: 150px; text-align: center; background-color: #FFFFFF; color: black;">White</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #000000; color: white;">Black</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #FF0000; color: white;">Red</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #00FF00; color: white;">Green</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #0000FF; color: white;">Blue</span>

## Hexadecimal

As cores em hexadecimal são iniciadas com uma cerquilha (#) e são compostas por 6 caracteres.

Sintaxe:

```css
#RRGGBB;
```

Usamos 2 caracteres para representar cada cor:

* <span style="color: #F00;">RR</span> Corresponde com à cor vermelha
* <span style="color: #0F0;">GG</span> Corresponde com à cor verde
* <span style="color: #00F;">BB</span> Corresponde com à cor azul

Cada cor pode variar entre 00 e FF, 00 é a ausência da cor e FF a total tonalidade da cor.

Cada Caractere pode variar em 16 valores, mas precisamos de apenas um caractere para representar um valor. Então não seria possível usar os valores 10, 11, 12, 13, 14, 15. Então eles foram substituídos pelas primeiras letras do alfabeto A=10, B=11, C=12, D=13, E=14, F=15.

Ficando assim:

0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F

<br>

<span style="display: inline-block; width: 150px; text-align: center; background-color: #FFF; color: black;">#FFFFFF</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #000; color: white;">#000000</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #F00; color: white;">#FF0000</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #0F0; color: white;">#00FF00</span>
<span style="display: inline-block; width: 150px; text-align: center; background-color: #00F; color: white;">#0000FF</span>

<br>

Se os dois caracteres de cada cor possuir o mesmo valor, podemos encurtar o código para um digito para cada cor.  

Vamos usar o branco como exemplo: <span style="display: inline-block; width: 60px; text-align: center; background-color: #FFF; color: black;">#FFFFFF</span> você poderá encurtar para 3 dígitos <span style="display: inline-block; width: 60px; text-align: center; background-color: #FFF; color: black;">#FFF</span>

Também  podemos usar alpha(transparência)  e para isso iremos acrescentar mais dois dígitos ao final ficando assim: #<span style="color: #F00;">RR</span><span style="color: #0F0;">GG</span><span style="color: #00F;">BB</span><span style="color: gray;">AA</span>

Segue abaixo os valores alpha decrescentes em 5%.
| Porcentagem  | HexaDecimal  |
|:--: | :--: |
|100%| FF|
|95% | F2|
|90% | E6|
|85% | D9|
|80% | CC|
|75% | BF|
|70% | B3|
|65% | A6|
|60% | 99|
|55% | 8C|
|50% | 80|
|45% | 73|
|40% | 66|
|35% | 59|
|30% | 4D|
|25% | 40|
|20% | 33|
|15% | 26|
|10% | 1A|
|05% | 0D|
|00% | 00|
