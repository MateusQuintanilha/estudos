
# Estrutura do documento

Antes de começar a adicionar conteúdo ao documento, há uma estrutura básica que você precisa adicionar em seu arquivo. Essa estrutura não é necessária apenas para que seu documento esteja em conformidade, mas também permitirá que você forneça informações úteis sobre o documento.

A estrutura básica de qualquer documento HTML consiste nos seguintes itens:
* Declaração de tipo de documento `<!DOCTYPE>`
* O elemento raiz `<html>`
* A cabeça `<head>`
* O corpo `<body>`

---

## A Declaração !DOCTYPE

Todo documento HTML deve começar com uma declaração que informa o tipo e a versão da linguagem utilizada na página. Isso é muito útil para informar antecipadamente aos navegadores, que tipo de documento eles estão prestes a processar, permitindo que eles ajustem seus mecanismos de processamento de acordo.

No HTML5 utilizamos o `<!DOCTYPE html>`, ele informa que a versão do HTML usado na página é a versão mais atual.

---

## O Elemento Raiz do Documento

Depois de informar ao navegador qual a versão do HTML usando o `<!DOCTYPE html>`, é hora de usar o elemento raiz `<html>`.

O elemento `<html>` é usado para conter todos os elementos do documento e também para definir o idioma padrão usado pelo documento, através do atributo lang.

É importante declarar o idioma usado no documento, pois ajuda os leitores de tela e sintetizadores de fala fornecendo informações importantes para determinar a pronúncia correta.

Sintaxe até o momento:

```html
<!DOCTYPE html>
<html lang="pt-BR">

</html>
```

---

## A Cabeça do Documento

O elemento `<head>` é usado para conter todos os metadados, esses metadados vão ser principalmente informações para processamento de máquina, não legibilidade humana. Esses metadados podem ser classificados da seguinte maneira:

### Meta instruções

Usamos o elemento `<meta>` para representar metadados que não podem ser representados pos outros elementos. Podemos passar metadados como:
* charset - Que é usado para indicar o formato de codificação de caracteres utilizado no documento.

### Informação relacional

Usamos o elemento `<link>` para indica recursos externo como:
  * Folhas de estilo CSS Externa 
  * Favicon

### Título Geral do Documento

Usamos o elemento `<title>` para definir o título do documento, ele será mostrado na aba do navegador.

### Script

Usamos o elemento `<script>` para adicionar scripts na página (também podem ser adicionados no corpo do documento).

### NoScript

Usamos o elemento `<noscript>` para definir uma seção de html a ser inserida se um tipo de script não é suportado pela página ou se o JavaScript está desativado no navegador.

### Style

Usamos o elemento `<style>` para conter informações de estilo CSS no próprio html, mas é recomendado o uso de folhas de estilo externa usando o elemento `<link>`.

### Base

Usamos o elemento `<base>` para especificar a URL base a ser usada por todas as URLs relativas do documento.

### Template

Usamos o elemento `<template>` para armazenar HTML que não deve ser renderizado imediatamente quando uma página é carregada, mas pode ser instanciada posteriormente durante o tempo de execução usando JavaScript.

---

## O Corpo do Documento

O elemento `<body>` é usado para conter todo o conteúdo que será visível para o usuário. Este é o lugar para adicionar o conteúdo de títulos, parágrafos, imagens, etc.

---

## Sintaxe da estrutura básica

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Título do Documento</title>
  </head>
  <body>
    <!-- 
    Aqui fica a parte do conteúdo que será visível no navegador
    e que o usuário conseguirá interagir como textos, links,
    imagens, sons, vídeos, entre outros.
   -->
  </body>
</html>
```
