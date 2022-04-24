# Viewport

Viewport ou  janela de exibição em português é a área visível destinada para exibir um conteúdo, no nosso caso será a área visível onde irá aparecer o conteúdo no navegador, essa área pode variar de acordo com o dispositivo, sendo menor em celulares e maior em desktops ou TVs.

Essa medida possui duas variações:

## **Viewport Height (vh)**

Height em português significa altura, então uma viewport height irá calcular a altura da janela de exibição.

Sintaxe:

```css
1vh
```

`1vh` é 1% da altura da viewport

## **Viewport Width (vw)**

Width em português significa largura, então uma viewport width irá calcular a largura da janela de exibição.

Sintaxe:

```css
1vw
```

`1vw` é 1% da largura da viewport

## Viewport Minimum (vmin)

Essa unidade também se relaciona com as dimensões da viewport, mas com um porém. Anteriormente quando vimos vw e vh precisávamos escolher se gostaríamos de nos basear na altura (vh) ou na largura (vw).

Diferente das anteriores, o vmin utiliza como base a menor dimensão da viewport (altura x largura), vamos ao exemplo.

Imagine que estamos trabalhando com uma viewport de 1600px de  altura e 900px de largura. Nesse caso, 1vmin terá o valor de 9px (1% da menor dimensão!), caso tenhamos 100vmin, esse será igual a 900px!

No caso acima, a menor dimensão foi a da largura, porem se tivéssemos 300px para altura e 1400px para largura, nosso valor de referência seria o 300px! Sempre a menor dimensão.

O melhor exemplo que temos é um celular, quando utilizamos o celular na vertical a altura será maior que a largura, agora quando utilizamos o celular na horizontal a altura será menor que a largura.

```css
1vmin
```

## Viewport Maximum (vmax)

Seguindo a mesma base lógica da unidade anterior, o vmax terá como valor de referência a maior dimensão da viewport. Ou seja, utilizando o mesmo exemplo, se tivermos 1600px de altura e 900px de largura, 1vmax será equivalente a 16px!

No segundo exemplo ocorrerá a mesma inversão, tendo 300px para altura e 1400px para largura, 1vmax será equivalente a 14px. Dessa vez sempre será a maior dimensão.

```css
1vmax
```
