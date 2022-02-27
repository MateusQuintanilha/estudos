
<div id="topo"></div>

# Atributos
Os atributos são responsáveis por fornecer ***informações adicionais*** sobre um elemento.

* Todos os elementos podem conter atributos.

* Os atributos ***devem ser inseridos na tag de abertura***.

* Os atributos são adicionados em pares `nomeDoAtributo="valorDoAtributo"` com exceção de atributos que possuem o seu nome como próprio valor. Nesse caso utilize só o nome do atributo `nomeDoAtributo`.

* Devemos inserir um espaço entre o atributo e o nome da tag (ou do atributo anterior, caso o elemento já tenha um).
    ```html
    <nomeDaTag nomeDoAtributo>
    ```

* Ao inserir um valor de um atributo separe o atributo e seu valor com o sinal de igual `=` e adicione o valor do atributo entre aspas simples ` atributo='valorDoAtributo'` ou entre aspas duplas `nomeDoAtributo="valorDoAtributo"` .
    ```html
    <nomeDaTag nomeDoAtributo="valorDoAtributo">
    ```

---

Podemos agrupar os atributos em dois grupos, os atributos globais e os atributos específicos. Vamos sobre esses dois grupos a seguir:

## Atributos Globais

Os atributos globais são aceitas em todos os elementos vamos ver alguns a seguir:

### Atributo accesskey

O atributo accesskey permite especificar uma tecla no teclado para ser usada como atalho para ativar/focar no elemento. (Tome cuidado com para não entrar em conflito com os atalhos do próprio navegador).

sintaxe: 

```html
<nomeDaTag accesskey="tecla">
```

Exemplo:

```html
<a href="https://google.com.br" target="_blank" accesskey="t">Página do Google</a>
```

Resultado:

Nos navegadores mais novos é preciso pressionar a tecla [alt] + a tecla que escolhemos, então aperte [alt] + [t]

<a href="https://google.com.br" target="_blank" accesskey="t">Página do Google</a>

### Atributo class

O atributo class é usado para criar um ou mais nomes de classificação para um elemento. Seu uso principal é para ligar os elementos a folha de estilo CSS para receber estilizações, mas também pode ser usado com JavaScript.

Sintaxe:

```html
<nomeDaTag class="nomeDaClasse">
```

Exemplo:

```html
<style>.cor-principal {color: green;}</style>

<p class="cor-principal">Parágrafo com a classe</p>
<p>Parágrafo sem a classe</p>
<p class="cor-principal">Parágrafo com a classe</p>
```
Adicionamos o elemento style com a propriedade para mudar a cor da fonte utilizando o nome da classe, pois o atributo em sí, não gera efeitos visuais.

Resultado:

<style>.cor-principal {color: green;}</style>

<p class="cor-principal">Parágrafo com a classe</p>
<p>Parágrafo sem a classe</p>
<p class="cor-principal">Parágrafo com a classe</p>

### Atributo contenteditable

O atributo contenteditable específica se o conteúdo de um elemento é editável ou não. O conteúdo não será salvo, então caso feche o navegador ou recarregue a aba, o conteúdo que foi adicionado será perdido.

* Esse atributo é do tipo boolean, ou seja, seu valor só aceita true ou false.
  * true = O conteúdo do elemento pode ser editável.
  * false = O conteúdo do elemento não pode ser editável.

Sintaxe:  

```html
<nomeDaTag contenteditable="true|false">
```

ou podemos colocar apenas o nome do atributo

```html
<nomeDaTag contenteditable">
```

Exemplo:

```html
<pre contenteditable> Podemos editar esse texto</pre>
```

Resultado:

<pre contenteditable> Podemos editar esse texto</pre>


### Atributo data-*

O atributo data-* nos da a capacidade de armazenar dados personalizados no elemento, esses dados podem ser acessados usando o JavaScript.

O `*` pode ser substituído por qualquer nome.

Sintaxe:

```html
<nomeDaTag data-nomeDosDados="valor">
```

Exemplo:

```html
<p data-text-id="01">Isso é um parágrafo</p>
<p data-text-id="02">Isso é um parágrafo</p>
```

### Atributo draggable

O atributo draggable específica se um elemento pode ser arrastado ou não.  
Dica: Links e imagens podem ser arrastados por padrão.

* Esse atributo possui três valores:
  * true  = O conteúdo do elemento pode ser arrastado.
  * false = O conteúdo do elemento não pode ser arrastado.
  * auto  = Usa o comportamento padrão do navegador

Sintaxe: 

```html
<nomeDaTag draggable="true|false|auto">
```

Exemplo:

```html
<p draggable="true">Isso é um parágrafo</p>
```

Resultado:

<p draggable="true">Isso é um parágrafo</p>

### Atributo hidden

O atributo hidden é usado para ocultar um elemento.

* Esse atributo é do tipo boolean, ou seja, seu valor só aceita true ou false.
  * true = O elemento será visível.
  * false = O elemento não será visível.

Sintaxe:  

```html
<nomeDaTag hidden="true|false">
```

ou podemos colocar apenas o nome do atributo

```html
<nomeDaTag hidden">
```

Exemplo:

```html
<span hidden>Isso é um span</span>
```

Resultado:

Elemento span com hidden: <span hidden>Isso é um span</span>

Elemento span sem hidden: <span>Isso é um span</span>

### Atributo id

O atributo id específica um id exclusivo para um elemento. O valor deve ser exclusivo do elemento em que foi adicionado, então não adicione o mesmo id em mais de um elemento.

Assim como no atributo class, Seu uso principal é para ligar os elementos a folha de estilo CSS para receber estilizações, mas também pode ser usado com JavaScript.

Sintaxe:

```html
<nomeDaTag id="nomeDoId">
```

Exemplo:

```html
<style>#cor-do-texto-principal {color: red;}</style>

<p id="cor-do-texto-principal">Texto Principal</p>

```
Adicionamos o elemento style com a propriedade para mudar a cor da fonte utilizando o nome do id, pois o atributo em sí, não gera efeitos visuais.

Resultado:

<style>#cor-do-texto-principal {color: red;}</style>

<p id="cor-do-texto-principal">Texto Principal</p>

### Atributo lang

O atributo lang especifica o idioma do conteúdo do elemento. Se e o valor do atributo é uma string vazia (lang=""), o idioma é definido como unknown (desconhecido); se a tag de idioma não é válida conforme o BCP47, ela é definida como invalid (invalida).

A sintaxe completa do BCP47 é profunda o suficiente para caracterizar dialetos de linguagem extremamente específicos, mas a maioria dos usos são bem mais simples.

Uma tag de idioma é feita de sub-tags separadas por hífen, onde cada sub-tag indica uma certa propriedade da língua. As três sub-tags mais comuns são:

* Sub-tag de idioma  
Necessária. Um código de  2 ou 3 caracteres que define o idioma base. Como por exemplo: o código para inglês é es, para português é pt.

* Sub-tag de script  
Opcional. Essa sub-tag define o sistema de escrita usado para a linguagem, e sempre tem 4 caracteres, com a primeira letra maiúscula. Como por exemplo: Francês em Braile é fr-Brai e ja-Kana é Japonês escrito no alfabeto Katakana.

* Sub-tag de região  
Opcional. Essa sub-tag define um dialeto do idioma base em uma localização particular e tem um código de duas letras maiúsculas referentes ao país, ou um código de três números  referentes à uma área fora do país. Por exemplo, es-ES é para espanhol falado na Espanha, e es-013 é o espanhol falado na America Central. “Espanhol Internacional” seria es.

Para encontrar os códigos corretos para uma sub-tag de idioma, acesse [Language Sub-tag Lookup](https://r12a.github.io/app-subtags/).

Exemplo:

```html
<p>Vamos ver como é escrito Eu te amo em outros idiomas.</p>
<p>Em português Brasil: <span lang="pt-br">Eu te amo</span></p>
<p>Em português Portugal: <span lang="pt-pt">Eu te amo</span></p>
<p>Em inglês: <span lang="en">I love you.</span></p>
<p>Em italiano: <span lang="it">Io ti amo</span></p>
<p>Em francês: <span lang="fr">Je t'aime</span></p>
```

Não possui efeitos visuais.

### Atributo spellcheck

O atributo spellcheck específica se o elemento deve ter a sua ortografia e gramática verificada ou não.

Será possível fazer essa verificação caso uma das condições a seguir possa ser atendida:
* Valores de texto em elementos de entrada (não senha)
* Texto em elementos `<textarea>`
* Texto em elementos editáveis

Sintaxe:

```html
<nomeDaTag spellcheck="true|false">
```

Exemplo:

```html
<textarea spellcheck="true"></textarea>
```

Resultado:

<textarea spellcheck="true"></textarea>

### Atributo style 

O atributo style Permite fazer alterações nas regras de estilo do CSS direto no elemento.

substituirá qualquer conjunto de estilos especificados no elemento `<style>` ou em uma folha de estilo externa. Então tenha muito cuidado ao utilizar.

Não é recomendado utilizar css diretamente no elemento, Geralmente criamos um arquivo externo para conter as configurações de estilo da página.

Sintaxe: 

```html
<nomeDaTag style="propriedadeCSS:valor">
```

Resultado:

<p style="color:green">Isso é um parágrafo</p>


### Atributo tabindex

O atributo tabindex especifica a ordem de tabulação de um elemento (quando o botão [TAB] é usado para navegar).

Sintaxe:

```html
<nomeDaTag tabindex="numero">
```

Exemplo:

```html
<p tabindex="1">Isso é um parágrafo</p>
<p tabindex="3">Isso é um parágrafo</p>
<p tabindex="2">Isso é um parágrafo</p>
```

Resultado:

<p tabindex="1">Isso é um parágrafo</p>
<p tabindex="3">Isso é um parágrafo</p>
<p tabindex="2">Isso é um parágrafo</p>     

### Atributo title

O atributo title é usado para conter informações extras sobre o conteúdo de um elemento.  Ao passar o mouse por cima do elemento o title será mostrado.

Exemplo:

```html
<p title="Isso é um exemplo">exemplo</p>
```

Resultado:

<p title="Isso é um exemplo">exemplo</p>

### Atributo translate

O atributo translate especifica se o conteúdo de um elemento deve ser traduzido ou não.

* Esse atributo é do tipo boolean, ou seja, seu valor só aceita yes ou no.
  * yes = O conteúdo do elemento pode ser traduzido.
  * no = O conteúdo do elemento não pode ser traduzido.

Sintaxe:
```html
<nomeDaTag translate="yes|no">
```

```html
<p lang="de" translate="yes">Ich liebe dich</p>
<p lang="de" translate="no">Ich liebe dich</p>
```

Resultado:

Use a ferramenta de tradução do seu navegador para traduzir:

<p lang="de" translate="yes">Ich liebe dich</p>
<p lang="de" translate="no">Ich liebe dich</p>
