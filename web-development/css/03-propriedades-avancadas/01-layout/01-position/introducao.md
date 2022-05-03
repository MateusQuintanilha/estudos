# Position

É uma propriedade utilizada para definir como um elemento é posicionado na página. Essa propriedade pode ser acompanhada de outras, tais como, top, right, bottom, e left, que determinam como ficará a localização final do objeto.

* bottom: posiciona o elemento da página na área inferior da tela ;
* top: posiciona o elemento no topo da página.
* left: posiciona o elemento no lado esquerdo da página.
* right: posiciona o elemento no lado direito da página.
* clip: estabelece onde o conteúdo será visualizado. Pode ser usada junto ao posicionamento absolute ou fixe (que falaremos a seguir).
* Z-index: é uma propriedade position CSS usada para que os itens da página sejam ordenados em caso de sobreposição. Ou seja, serve como uma “ordem de camada” onde o elemento de maior valor fica na posição superior.

Sintaxe:

```css
position: static | relative | fixed | absolute | sticky
```

## Valores

A propriedade position possui alguns valores, que afetam o comportamento do elemento na página, vamos dar uma olhada em cada valor.

### static (valor padrão definido pelo navegador)

Quando não especificamos algum valor para a propriedade position ,esse valor será utilizado como padrão pelo navegador, esse é o único valor em que as propriedades top, bottom, left e right, z-index atribuídas ao elemento são ignoradas pelo navegador.

### relative

A position relative é basicamente uma position static, fazendo com que os elementos respeitem a ordem do fluxo, porém podendo alterar a posição do elemento por meio das direções (top, bottom, left e right).
absolute
Com position absolute temos a possibilidade de movimentar um elemento de forma livre na tela. Podendo ficar em qualquer canto por meio das direções (top, bottom, left e right).

Porém nem sempre queremos que um elemento fique perdido na tela, então podemos mudar a referência do elemento absoluto colocando o pai do elemento absoluto como position relative, com isso mudamos o ponto de referencia que antes era do root da página para o elemento pai.

### fixed

O elemento que tem position fixed fica relativo a viewport, não conseguimos deixar ele relativo a outro elemento mas podemos mudar a sua posição com as direções (top, bottom, left e right). outro detalhe é que  o elemento sempre acompanha o scroll até chegar nas margens da viewport, então ele é muito utilizado para fazer menus fixos.

### sticky

Position sticky possui o comportamento parecido com uma position fixed e uma position relative.  É parecido com a relative pois acompanha o fluxo, ocupando um espaço como um elemento relative e também fica fixo na viewport como um fixed, ele também acompanha o scroll, mas se possuir mais elemento abaixo, ele irá "desgrudar" da tela assim que ele atingir um próximo elemento. Retorna a ser fixado pós rolagem novamente reversa.
