# Progress

O elemento `<progress>` é usado para visualizar uma barra de progresso, como por exemplo o progresso de uma tarefa ou o carregamento de alguma funcionalidade.

Exemplo:

```html
<progress value="70" max="100">70 %</progress>
```

Atributos:

* max
    * Define o valor máximo do progresso. 

* value
    * Este atributo especifica quanto da tarefa foi concluído. Se este não existir, a barra de progresso é indeterminada; isso indica que uma atividade está em progresso sem previsão de quanto tempo é esperado para que seja concluída.
    
Você pode usar a propriedade orient (en-US) para especificar se a barra de progresso deve ser renderizada horizontalmente (padrão) ou verticalmente. A pseudo-classe :indeterminate (en-US) pode ser associada a barras de progresso indeterminadas.
