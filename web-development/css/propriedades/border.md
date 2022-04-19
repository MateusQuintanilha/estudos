# Border

Podemos especificar a espessura, o estilo, a cor, adicionar desenhos entre outras coisas na borda da caixa.

Assim como no padding, podemos adicionar para cada lado individualmente utilizando:

- ***border-top*** - adiciona na parte superior
- ***border-right*** - adiciona no lado direito
- ***border-bottom*** - adiciona inferior
- ***border-left*** - adicionar no lado esquerdo
- ***border*** - Adiciona em todos os lados ao mesmo tempo

Primeiro adicionamos a espessura da borda, em seguida adicionamos o estilo da porta e por fim adicionamos a cor da borda.

Sintaxe:

```css
div {
  border-top: espessura estilo cor;
}
```

Exemplos:

```css
div {
  border-top: 1em dashed #00ff00;
}
```

```css
div {
  border-right: 1rem double rgb(170, 50, 220);
}
```

```css
div {
  border-bottom: thick dotted hsl(60, 90%, 50%);
}
```

```css
div {
  border-left: 3ex groove rgba(170, 50, 220, 0.6);
}
```

```css
div {
  border: 10px solid red;
}
```
