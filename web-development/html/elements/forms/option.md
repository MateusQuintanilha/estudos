# option

O elemento `<option>` é usado para criar um controle que representa um item dentro de um elemento HTML `<select>`. `<optgroup>` ou `<datalist>`.

Exemplo:

```html
<select name="select">
  <option value="valor1">Valor 1</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
</select>
```

Atributos:
* disabled
    * Se este atributo boolean estiver definido, esta opção não é selecionável. Frequentemente navegadores acinzentam este tipo de controle, e ele deixa de receber quaisquer eventos de navegação, como cliques do mouse ou eventos relacionados a foco. Se este atributo não estiver definido, o elemento ainda pode ser desabilitado se um de seus ancestrais é um elemento <optgroup> desabilitado.

* label
    * Este atributo é o texto para o rótulo indicando o significado da opção. Se o atributo label não estiver definido, seu valor é o conteúdo de texto do elemento.
    
    Nota de uso: o atributo label é projetado para conter um rótulo curto tipicamente usado num menu hierárquico. O atributo value descreve descreve um rótulo maior, designado para ser usado perto de um botão de escolha, por exemplo.

* selected
    * Se presente, este atributo boolean indica que a opção está selecionada inicialmente. Se o elemento <option> for descendente de um elemento <select> cujo atributo multiple não está definido, apenas um único <option> deste elemento <select> pode ter o atributo selected.

* value
    * O conteúdo textual deste atributo representa o rótulo que explica a opção. Se ele não estiver definido, seu valor padrão é o texto contido no elemento.
    
    Nota de uso: o atributo label é projetado para conter um rótulo curto tipicamente usado num menu hierárquico. O atributo value descreve descreve um rótulo maior, designado para ser usado perto de um botão de escolha, por exemplo.
