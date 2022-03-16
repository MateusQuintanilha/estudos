# Output

O elemento `<output>` é um elemento de saída no qual um site ou aplicativo pode injetar os resultados de um cálculo ou o resultado de uma ação do usuário.

Exemplo:

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
0<input type="range" name="b" value="50" />100 +<input type="number" name="a" value="10" /> =
<output name="result"></output>
</form>
```

Atributos:

* for
    * Define a relação entre o resultado e os elementos usados para o cálculo. Para fazer essa relação, digite o id do elemento que deseja fazer essa ligação.

* form
    * Define qual o formulário que esse campo pertence.

* name
    * Define o nome do elemento.
