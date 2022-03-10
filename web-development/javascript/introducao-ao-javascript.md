
# JavaScript

## O JavaScript é case-sensitive

A expressão em inglês ***case-sensitive*** significa que é ***sensível a letras minúsculas e maiúsculas***, ou seja, a mesma letra minúsculas e maiúsculas é considerada diferente (***"a"*** é diferente de ***"A"***), então tome cuidado na hora de utilizar as palavras.

## Declaração

Uma ***declaração*** é uma linha de código que dá comando para execução de uma tarefa.

O Javascript não exige finalizar uma declaração com ponto e vírgula `;`,
mas é recomendável o uso do sinal para finalizar uma declaração, porque pode ser necessário comprimir o código JavaScript antes de implementá-lo no ambiente de produção para remover espaços em branco extras, economizando assim largura de banda e aumentando a performance do código, mas sem o uso de ponto e vírgula podemos ter erros de sintaxe.

## Comentários

A sintaxe dos comentários em JavaScript é semelhante como em C++ e em muitas outras linguagens.

Caso não saiba oque são comentários, eles são utilizados para fazer comentários sobre determinadas partes do código, explicando sobre o código em sigo, como por exemplo alguma conversão de valores, ou que aquela parte do código faz, também utilizamos comentários para nos ajudar a estudar, mas tome cuidado para não exagerar na quantidade de comentários.

Podemos fazer comentários de uma única linha ou de um bloco de linhas.

### Comentários de uma linha

Iniciamos um comentário de uma linha com duas barras `//`

```js
// Isso é um comentário de uma linha
```

### Comentários em bloco

Iniciamos um bloco de comentários com uma barra e um asterisco `/*` e a finalizamos com um asterisco e uma barra `*/`

É uma boa prática usar asterisco `*` no início de cada linha comentada para uma melhor legibilidade.

```js
/*
* Isso é um comentário 
* em bloco
*/
```

## Identificadores

Um identificador é o nome que utilizamos para identificar uma variável, função, parâmetro ou classe.

* Podemos:
  * Iniciar com caracteres especiais: cifrão ($) ou underline (_)
  * Iniciar com letras Maiúsculas ou minúsculas (A-Z ou a-z)
  * Os demais caracteres podem ser letras (A-Z ou a-z), cifrão ($), sublinhado (_) ou números (0-9) ou qualquer outro caractere Unicode.
  * Colocar acentos

* Não Podemos:
  * Colocar espaços vazios no nome
  * Iniciar com números
  * Utilizar palavras reservadas da linguagem

* Ideal:
  * Criar nomes que fazem sentido, que explique oque a variável é ou faz.
  * Inicie com letra minúscula a não ser em casos especiais que veremos no futuro.
  * Inicie com letras minúsculas e utilize só letras (A-Z ou a-z) e números (0-9) quando necessário.
  * Não utilize acentos.
  * Utilize CamelCase
  * CamelCase é a denominação em inglês para a pratica de escrever palavras compostas ou frases sem espaços e com a primeira letra de cada palavra em maiúscula.
