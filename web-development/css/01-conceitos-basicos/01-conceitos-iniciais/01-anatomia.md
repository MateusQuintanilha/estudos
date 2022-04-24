# Anatomia de um conjunto de regras CSS

CSS é uma linguagem baseada em conjuntos de regras (mas geralmente usamos o termo "regra", por ser mais curto).

Sintaxe:

```css
seletor {
  propriedade:valor;
}
```

* ***Seletor***
  * É usado para selecionar o elemento HTML a ser estilizado.

* ***Propriedade***
  * São palavras chave que podemos utilizar para define o que será alterador no elemento HTML.

* ***Valor***
  * Define o valor que será alterado no elemento HTML, esse valor é baseado no tipo de propriedade utilizada.

* ***Linha de declaração***
  * É formada por um conjunto de `propriedade:valor`

* ***Bloco de declaração:***
  * É formado pelo par de chaves `{ }` e todo o conteúdo que estiver em seu interior.

* ***Regra:***
  * Uma regra é composta pelo seletor e o bloco de declaração.

**IMPORTANTE:** Devemos separar a propriedade e o valor utilizando dois pontos `:`. `propriedade : valor`
**IMPORTANTE:** Devemos usar ponto e vírgula no final de cada linha de declaração `propriedade:valor;`

---

Vamos ao exemplo, vamos trocar a cor do texto de todos os elementos de parágrafo para azul.

```css
  p {
    color: blue;
  }
```
