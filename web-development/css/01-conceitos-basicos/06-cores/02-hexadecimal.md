# Hexadecimal

As cores em hexadecimal são iniciadas com uma cerquilha (#) e são compostas por 6 caracteres.

Sintaxe:

```css
#RRGGBB;
```

Usamos 2 caracteres para representar cada cor:

* RR Corresponde com à cor vermelha
* GG Corresponde com à cor verde
* BB Corresponde com à cor azul

Cada cor pode variar entre 00 e FF, 00 é a ausência da cor e FF a total tonalidade da cor.

Cada Caractere pode variar em 16 valores, mas precisamos de apenas um caractere para representar um valor. Então não seria possível usar os valores 10, 11, 12, 13, 14, 15. Então eles foram substituídos pelas primeiras letras do alfabeto A=10, B=11, C=12, D=13, E=14, F=15.

Ficando assim:

0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F

* #FFFFFF
* #000000
* #FF0000
* #00FF00
* #0000FF

Se os dois caracteres de cada cor possuir o mesmo valor, podemos encurtar o código para um digito para cada cor.  

Vamos usar o branco como exemplo: #FFFFFF, você poderá encurtar para 3 dígitos #FFF

## Hexadecimal com Alpha

Também  podemos usar alpha(transparência)  e para isso iremos acrescentar mais dois dígitos ao final ficando assim: #RRGGBBAA

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
