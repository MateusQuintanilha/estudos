# Textarea

O elemento `<textarea>` representa um controle de edição para uma caixa de texto, útil quando você quer permitir ao usuário informar um texto extenso em formato livre, como um comentário ou formulário de retorno.

```html
<textarea id="story" name="story"
          rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

Atributos:

* autocapitalize 
    * Este é um atributo não padrão suportado pelo WebKit no iOS (portanto, quase todos os navegadores executados no iOS, incluindo Safari, Firefox e Chrome), que controla se e como o valor do texto deve ser automaticamente capitalizado quando é inserido / editado pelo do utilizador. Os valores não preteridos estão disponíveis no iOS 5 e posterior. Os valores possíveis são:
    
    * none: Desativa completamente a capitalização automática.
    * sentences: Coloque automaticamente em maiúscula a primeira letra das frases.
    * words: Coloque em maiúscula automaticamente a primeira letra das palavras.
    * characters: Colocar em maiúscula automaticamente todos os caracteres.
    * on:  Descontinuado desde o iOS 5.
    * off:  Descontinuado desde o iOS 5.

* autocomplete
    * Este atributo indica se o valor do controle pode ser preenchido automaticamente pelo navegador. Os valores possíveis são:

    * off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
    * on: O navegador pode concluir automaticamente o valor com base nos valores inseridos pelo usuário durante os usos anteriores.

    Se o autocomplete atributo não está especificado em um `<textarea>` elemento, o navegador usa o elemento autocomplete valor do atributo `<textarea>` proprietário do formulário do elemento. O proprietário do formulário é o `<form>` elemento que este `<textarea>` elemento é um descendente ou o elemento de formulário cuja id é especificado pelo form atributo do elemento de entrada. Para mais informações, consulte o autocomplete atributo no `<form>`.

* autofocus
    * Define o foco neste campo quando a página é carregada. 
 
* cols
    * Define largura visível do controle de texto, em larguras médias de caracteres. Se for especificado, deve ser um número inteiro positivo. Se não for especificado, o valor padrão é 20.

* dirname
    * Define o nome do campo que será enviado informando a direção do texto escrito.

* disabled
    * Define o campo como desabilitado.

* form
    * Define qual o formulário que esse campo pertence.

* maxlength
    * O número máximo de caracteres (pontos de código Unicode) que o usuário pode inserir. Se esse valor não for especificado, o usuário poderá inserir um número ilimitado de caracteres.

* minlength
    * O número mínimo de caracteres (pontos de código Unicode) exigidos pelo usuário.

* name
    * Define o nome do campo.

* placeholder
    * Define um texto de dica que descreve o valor esperado.
    
    Nota: Os espaços reservados devem ser usados apenas para mostrar um exemplo do tipo de dados que deve ser inserido em um formulário; eles não substituem uma adequada `<label>` elemento vinculado à entrada. Veja Labels and placeholders in `<input>`: The Input (Form Input) element para uma explicação completa.

* readonly
    * Define o campo como somente leitura. 

* required
    * Define o campo como obrigatório para envio do formulário.

* rows
    * Define a quantidade linhas visíveis do campo. 

* spellcheck
    * Especifica se o `<textarea>` está sujeito a verificação ortográfica pelo navegador / SO subjacente. o valor pode ser:
    
    * true: Indica que o elemento precisa ter sua ortografia e gramática verificadas.
    * default :Indica que o elemento deve agir de acordo com um comportamento padrão, possivelmente com base no próprio elemento pai spellcheck valor.
    * false : Indica que o elemento não deve ter verificação ortográfica.

* wrap
    * Indica como o controle quebra o texto. Os valores possíveis são:
    
        * hard: O navegador insere automaticamente quebras de linha (CR + LF) para que cada linha não tenha mais que a largura do controle; a cols O atributo também deve ser especificado para que isso entre em vigor.
        * soft: O navegador garante que todas as quebras de linha no valor consistam em um par CR + LF, mas não insira nenhuma quebra de linha adicional.
        * off : Como soft mas muda a aparência para white-space: pre segmentos de linha que excedam cols não estão embrulhados e os `<textarea>` torna-se rolável horizontalmente.
