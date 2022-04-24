# Seletor por Atributo

Seleciona todos os elementos baseados no nome e no valor do atributo fornecido. O nome do atributo e o valor devem estar entre ***colchetes*** `[ ]`.

Sintaxe:

```css
[atributo] {
  propriedade: valor;
}
```

```css
[atributo operador 'valorDoAtributo'] {
  propriedade: valor;
}
```

Podemos usar os operadores a seguir:

| Símbolos  |  Significado  |
| :---:     | :---          |
| =         | Valor é exatamente igual a `"valorAtributo"` (correspondência exata)
| ~=        | Valor em uma lista de itens separada por espaços, no qual um deles é igual a `"valorAtributo"`; ou seja, procurar uma palavra específica em um conjunto de palavras.
| &#124;=   | Valor exatamente igual a `"valorAtributo"` ou imediatamente seguido por um hífen, ficando assim `"valorAtributo-"`
| ^=        | Inicia com os caracteres `"valorAtributo"`
| $=        | Termina com os caracteres `"valorAtributo"`
| *=        | Em uma string com vários valores, deve ter ao menos uma ocorrência da sequencia de caracteres `"valorAtributo"`.
| i         | Ao adiciona um i (ou I) após o `"valorAtributo"`  faz com que o valor seja comparado sem levar em conta caixa alta ou caixa baixa(para caracteres dentro da faixa ASCII).

Vamos aos Exemplos:

## Usando apenas o `atributo`

Seleciona ***todos os elementos que possuem o atributo*** `lang`

```css
[lang] {
  color: aquamarine;
}
```

## Usando o `atributo` com o operador `=` e o `valor`

Seleciona todos os elementos que possuem o atributo `lang` ***que possuir o valor*** `"ru"`

```css
[lang = "ru"] {
  font-size: 20px;
}
```

## Usando o `atributo` com o  operador `~=` e o `valor`

Seleciona todos os elementos que possuem o atributo `class` com valor `"tipo-01"` ***entre outros valores separados por espaço***

```css
[class ~= "tipo-01"] {
  border: 1px solid blue;
}
```

## Usando o `atributo` com o operador `|=` e o `valor`

Seleciona todos os elementos que possuem o atributo `class`  **com valor igual** a `"tipo"` ou o ***valor seguido de hífen*** `"tipo-"`

```css
[class |= "tipo"] {
  border: 1px solid green;
}
```

## Usando o `atributo` com o operador `^=` e o `valor`

 Seleciona todos os elementos que possuem o atributo `href` **com valor que inicie com os caracteres** `"http:"`

```css
[href ^= "http:"] {
  color: red;
}
```

## Usando o `atributo` com o operador `$=` e o `valor`

Seleciona todos os elementos que possuem o atributo `href` ***com valor que termine com os caracteres*** `".br"`

```css
[href $= ".br"] {
  font-size: 20px;
}
```

## Usando o `atributo` com o operador `*=` e o `valor`

Seleciona todos os elementos que possuem o atributo `id` e ***que possua a sequência de caracteres*** `"quadrado"` em seu valor

```css
[id *= "quadrado"] {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
```

Também podemos juntar o seletor de atributos com outros seletores como por exemplo o seletor por Elemento

## Usando o `elemento` com o `atributo` junto com o operador `$=` e o `valor`

Seleciona todos os elementos `<div>` que possuem o atributo `class` com valor `"pequeno"` ***entre vários valores separados por espaço***

```css
div[class ~= "pequeno"]{
  width: 50px;
  height: 50px;
}
```

## Caixa alta ou baixa

Adicionando um i (ou I) antes do fechamento dos colchetes `[ ]`, faz com que o valor seja comparado sem levar em conta caixa alta ou caixa baixa(para caracteres dentro da faixa ASCII).

Sintaxe:

```css
[atributo operator value i] {
  propriedade: valor;
}
```
