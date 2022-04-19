# Overflow

Nem sempre o conteúdo irá conseguir se encaixar no espaço de uma caixa, essa propriedade define o comportamento desejado de um elemento, quando o conteúdo de um elemento for muito grande para se encaixar na caixa em ambas as direções.

Podemos utilizar o overflow para direcionar os seus valores em 3 maneiras:

- ***overflow*** - irá direcionar os mesmo valores para no eixo x e para o eixo y
- ***overflow-x*** - irá utilizar um valor especifico para o eixo x
- ***overflow-y*** - irá utilizar um valor especifico para o eixo y

Os valores que podemos utilizar são esses:

- ***visible*** - O conteúdo não é cortado e pode ser renderizado fora da caixa de preenchimento.

- ***hidden*** - O conteúdo é cortado, se necessário, para caber na caixa de preenchimento. Nenhuma barra de rolagem é fornecida e nenhum suporte para permitir que o usuário role (como arrastando ou usando uma roda de rolagem) é permitido. Contudo o conteúdo pode ser rolado programaticamente ( por exemplo definindo o valor de uma propriedade como offsetLeft), então o elemento ainda é um contêiner de rolagem.

- ***clip*** - Semelhante ao hidden, o conteúdo é recortado na caixa de preenchimento do elemento. A diferença entre o clip e o hidden é que o clip também proíbe a rolagem programática. A caixa não é um contêiner de rolagem e não inicia um novo contexto de formatação.

- ***scroll*** - O conteúdo é cortado, se necessário, para caber na caixa de preenchimento. Os navegadores sempre exibem barras de rolagem, independentemente de o conteúdo ser ou não cortado, evitando que as barras de rolagem apareçam ou desapareçam conforme o conteúdo muda. As impressoras ainda podem imprimir o conteúdo transbordando.

- ***auto*** - Depende do agente do usuário (navegador). Se o conteúdo couber dentro da caixa de preenchimento, ele terá a mesma aparência visible, mas ainda estabelecerá um novo contexto de formatação de bloco. Os navegadores de desktop fornecem barras de rolagem se o conteúdo estourar.
