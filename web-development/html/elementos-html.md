
# Elementos HTML

Um elemento HTML é formado por uma tag de abertura, conteúdo e uma tag de fechamento. A seguir vamos ver a sintaxe básica de um elemento com conteúdo:

Sintaxe:

```html
<nomeDaTag>Conteúdo</nomeDaTag>
```

`<nomeDaTag>` É a **tag de abertura**

`Conteúdo`: é o conteúdo do elemento.

`</nomeDaTag>` é a **tag de fechamento**


Exemplos de alguns elementos HTML com conteúdo:

```html
<h1>Isso é um título</h1>
<p>Isso é um parágrafo</p>
```

Resultado:

<h1>Isso é um título</h1>
<p>Isso é um parágrafo</p>

---

Alguns elementos não possuem conteúdo. Esses elementos são chamados de Elementos vazios. Esses elementos não possuem a tag de fechamento, são fechadas na própria tag de abertura.

Sintaxe:

```html
<nomeDaTag />
```

Mas esse fechamento é opcional, então também podem ser usadas assim:

```html
<nomeDaTag>
```

Exemplos de alguns elementos vazios:

```html
<hr>
<br>
<hr>
```

Resultado:
<hr>
<br>
<hr>

O elemento `<br>` é usado para quebrar uma linha.  
O elemento `<hr>` é usado para criar uma linha vertical.

## Aninhando e indentando Elementos

Podemos colocar elementos dentro de outros elementos e isso é o aninhamento, mas precisamos fazer isso da maneira correta, vamos ver um exemplo a seguir:

```html
<html>
  <body>
    <h1>Título</h1>
    <p>Parágrafo</p>
  </body>
</html>
```

O elemento `<html>` é o elemento raiz, ele deve envolver todo o documento HTML.

O elemento `<body>` é filho do elemento `<html>` por estar dentro dele, então nesse contexto, o elemento `<body>` é pai dos elementos `<h1>` e `<p>`.

Os elementos `<h1>` e `<p>` são irmãos, pois são filhos direto do elemento `<body>` e também são descendentes do elemento `<html>`.

### Nunca esqueça de fechar uma tag

Aninhar os elementos de maneira errada podem causar vários problemas, vamos ver um exemplo de alguns erros a seguir:

```html
<html>
  <body>
    <h1>Título
    <p>Parágrafo</p>
    </h1>
  </body>
</html>
```

Resultado:

<html>
  <body>
    <h1>Título
    <p>Parágrafo</p>
    </h1>
  </body>
</html>

O elemento `<h1>` foi fechado no local errado, fazendo com que o elemento `<p>` tenha as propriedades estéticas do elemento `<h1>`.

Então tenha muito cuidado na hora de fechar os elementos, se um elemento é filho feche ele antes de fechar o elemento pai, o mesmo vale para elementos irmãos, feche um elemento antes de criar outro elemento irmão.

## Indentação

A indentação são espaçamentos que colocamos entre o elemento e a sua margem a esquerda, geralmente utilizamos a tecla [tab] para dar esses espaços. Esses espaços são dados seguindo uma lógica:

  * Elementos que possuem fechamento, a sua tag de abertura e fechamento devem ficar no mesmo nível de espaçamento.
  * Adicionamos um espaço de diferença a mais para um elemento filho em relação ao elemento pai.
  * Elementos irmãos devem ficar no mesmo nível.

Vamos ver o exemplo de um código sem indentação:

```html
<html>
<body>
<h1>Título
<p>Parágrafo</p>
</h1>
</body>
</html>
```

Agora vamos ver esse mesmo código indentado:

```html
<html>
  <body>
    <h1>Título
    <p>Parágrafo</p>
    </h1>
  </body>
</html>
```

A indentação não é obrigatória, mas é uma boa prática, pois deixa o código mais legível e com uma melhor aparência.
