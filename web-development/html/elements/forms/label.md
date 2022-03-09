# Label

O elemento `<label>` representa uma legenda  que será associada a um controle como um `<input>` ou outro elemento de controle qualquer por meio do atributo `for`.

O `label` tem importância para a acessibilidade: leitores de tela leem o label quando o item associado é focado.

Atributos:

* ***for***: é responsável por fazer a associação com outro elemento através do id do elemento que em que se deseja fazer a ligação.

* Só funciona com elementos específicos: button, input, meter, output, progress, select, textarea.



Exemplos:

Podemos fazer a associação sem o atributo for, para isso iremos passar o elemento que será associado como conteúdo.

```html
<label>Nome
    <input type="text" id="User" name="Name" />
</label>
```

Ou podemos usar o atributo for.

```html
<label for="User">Nome</label>
<input type="text" id="User" name="Name" />
```
