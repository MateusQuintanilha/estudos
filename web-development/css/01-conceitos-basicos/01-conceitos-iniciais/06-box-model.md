# Modelo de Caixa (Box Model)

Todos os elementos HTML ao serem renderizados pelo navegador passam a ter um modelo de caixa em seu entorno. Basicamente temos dois tipos de caixas no CSS, as caixas em bloco (box block) e caixas em linha (box inline).

Esses nomes referem-se a como a caixa se comporta com o fluxo da página. Vimos um pouco sobre elas no fluxo normal no elemento no nível de bloco e no elemento inline. Mas vamos fazer uma lista das principais diferenças entre elas:

## Caixa em Bloco

* A caixa irá empurrar as outras caixas que estiverem a sua esquerda para cima e as que estiverem em sua direita para baixo.
* A caixa irá ocupar toda a largura do container e a altura o suficiente para conseguir mostrar o seu conteúdo.
* As propriedades para largura: `width` e para altura: `height` serão respeitadas, ou seja, conseguiremos modificar a largura e altura da caixa.

## Caixa em Linha

* A caixa não empurrará outras caixas em linha caso haja espaço o suficientes para ambas.
* As propriedades para largura: `width` e para altura: `height` **Não* serão respeitadas, ou seja, não é possível modificar a largura e altura da caixa.

## Modelo de Caixa

O comportamento do restante do modelo de caixa será igual para as duas:

* `Conteúdo` - Qualquer conteúdo de um elemento HTML, pode ser texto, imagem, vídeo, áudio ou outro elemento HTML.
* `Preenchimento` - É representada pela propriedade `padding`, é responsável por criar um espaço entre o conteúdo e a borda.
* `Borda` - É representada pela propriedade `border`. Ela é responsável por separar o conteúdo da caixa com o conteúdo externo, podemos adicionar cor e aumentar a sua espessura.
* `Margem` - É representada pela propriedade `margin`. Ela é responsável pela margem externa da caixa, podemos usa-la para aumentar ou diminuir o espaço entre as caixas.

## Box sizing (tamanho da caixa)

Devemos sempre prestar atenção às definições do CSS: se estivermos fazendo uma retângulo com largura de 400px ( width: 400px; ) e altura de 300px ( height: 300px; ), esperamos que o elemento tenha exatamente o tamanho que foi definido, Neste caso, possuirá exatamente o tamanho que foi definido.

Mas se aplicarmos um padding de 20px para todos os lados, o tamanho do nosso retângulo será alterado pois acrescentamos 20px para o lado esquerdo e 20px para o lado direito e também aplicamos 20px para o topo e para a parte inferior, com isso o nosso retângulo passará a ter 440px de largura e 340px de altura.

Isso acontece porque o navegador o navegador usa por padrão o ***box-sizing: content-box*** que calcula o valor de borda margin e padding separadamente e não inclui ao tamanho da caixa. Isso pode complicar a vida do desenvolvedor, pois precisará calcular e ter essa diferença em mente.

Mas com o CSS3 veio o ***box-sizing: border-box***, que considera os valores das propriedades border e padding para calcular o tamanho que o elemento ocupa na tela, isso irá alterar os cálculos padrão que conhecemos, fazendo co  que o navegador passe a considerar a altura e largura do elemento contando o padding e border do elemento.
