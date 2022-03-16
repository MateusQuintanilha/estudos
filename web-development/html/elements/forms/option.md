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
    * Define um grupo como desabilitado. 

* label
    * Este atributo é o texto para o rótulo indicando o significado da opção. Se o atributo label não estiver definido, seu valor é o conteúdo de texto do elemento.
    
    Nota de uso: o atributo label é projetado para conter um rótulo curto tipicamente usado num menu hierárquico. O atributo value descreve descreve um rótulo maior, designado para ser usado perto de um botão de escolha, por exemplo.

* selected
    * Define se a opção deve ser selecionada por padrão. 

* value
    * Define o valor que será enviado caso a opção seja selecionada.
