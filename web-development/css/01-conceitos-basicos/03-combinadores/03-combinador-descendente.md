# Combinador Descendente

O combinador de descendente é representado por um `espaço` entre o primeiro e o segundo seletor.

* irá pegar todos os descendentes, não importa o quão profundo ele esteja.

Sintaxe:

```css
seletor1 seletor2 {

}
```

Exemplo:

Vamos trocara cor do texto para a cor azul em todos os elementos `<p>` que estiverem dentro do elemento `<header>`.

* Nota: Vai trocar a cor de todos os elementos `<p>` que forem filhos diretos ou descendentes.

```css
header p {
  color: blue;
}
```
