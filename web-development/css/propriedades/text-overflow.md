# text-overflow

A propriedade `text-overflow` trata de situações em que o texto é cortado quando transborda da caixa do elemento.

```css
text-overflow: clip;
text-overflow: ellipsis;
text-overflow: "string";
```

* clip
  * Corta o texto exatamente na linha vertical que passa pelo lado direito do container. Neste caso é possível até mesmo que uma letra do texto seja cortada na vertical. Este é o valor padrão da propriedade.
* ellipsis
  * Insere três pontos (...) antes do corte do texto. É a convenção típica indicativa de interrupção de texto.
* string
  * Este valor insere uma string antes do corte do texto.
