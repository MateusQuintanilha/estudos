# Select

O elemento `<select>` é usado para representar um controle que apresenta um menu de opções. As opções dentro do menu são representadas pelo elemento `<option>`, que podem ser agrupados por elementos `<optgroup>`. As opções podem ser pré-selecionadas para o usuário.

Exemplo:

```html
<!-- O segundo valor estará selecionado inicialmente -->
<select name="select">
  <option value="valor1">Valor 1</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
</select>
```
Atributos:

* autofocus
    * Define o foco neste campo quando a página é carregada.

* disabled
    * Define o campo como desabilitado.

* form
    * Define qual o formulário que esse campo pertence

* multiple
    * Define se o usuário pode selecionar mais de uma opção.

* name
    * Define o nome do campo.

* required
    * Define o campo como obrigatório para envio do formulário.

* size
    * Define quantas opções devem ficar visíveis na lista.
