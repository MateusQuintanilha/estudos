# Fluxo Normal (Normal Flow)

Fluxo normal ou Layout de fluxo, é a maneira como os elementos no nível de bloco ou inline são exibidos em uma página antes que qualquer alteração seja feita em seu layout.

Os elementos são renderizados na tela de acordo com a sua posição no arquivo HTML. A renderização será iniciada da parte superior para a inferior e da esquerda para a direita. Mas teremos comportamentos diferentes entre elementos no nível de bloco e no nível inline.

* Elementos no nível de bloco - Ocuparão toda a área da linha empurrando todos os elemento que estiverem a sua esquerda para cima e os que estivem na sua direita serão empurrados para baixo, assim formando um bloco (Tomando toda a linha para si).
* Elementos no nível inline - Ocupam apenas a área do seu conteúdo, se houver espaço na mesma linha outros elementos inline ficarão ao lado do primeiro elemento inline.

## Elementos no nível de bloco

Elementos no nível de bloco são elementos que contêm texto ou outros elementos de bloco. O elemento de bloco mais básico é a `<div>`, que é essencialmente definido como um elemento de bloco sem semântica.

Os elementos de bloco são dispostos da mesma forma que os parágrafos. Se a página estiver em português ou em inglês (ou qualquer outro idioma) que são lidos de forma horizontal da esquerda para a direita ou da direita para a esquerda. Cada elemento de bloco será renderizado um abaixo do outro. Caso a página utilize um idioma que é lido de forma vertical como o japonês tradicional, os elementos de bloco serão renderizados lado a lado. No caso do japonês, cada bloco irá aparecer à esquerda do anterior. Mas na realidade a maioria das páginas mesmo em japonês serão escritas usando a renderização de um bloco abaixo do outro.

Por padrão, um elemento de bloco terá a mesma largura que o contêiner pai e a altura necessária para caber o seu conteúdo (com preenchimento). Então todos os elementos que estiverem ao seu lado esquerdo será empurrado para cima e todos os elementos que estiverem a sua direita serão empurrados para baixo.

## Elementos inline (em linha)

Elementos no nível de linha são elementos que ocupam apenas a largura de seu conteúdo e utilizam apenas a altura necessária para conter o seu conteúdo, e diferente do elemento em bloco, os elementos inline conseguem ficar lado a lado se houver espaço disponível.

## Fora do Fluxo (Out of Flow)

Mas podemos alterar o fluxo normal usando algumas propriedades CSS, veremos sobre elas no futuro.
