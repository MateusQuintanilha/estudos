# white-space

A propriedade `white-space` controla como serão tratados os espaços em branco inseridos na marcação HTML do texto.

Sintaxe:

```css
white-space: normal |nowrap |pre | pre-line | pre-wrap | initial | inherit;
```

* normal - É o valor padrão da propriedade. Qualquer quantidade de espaços em branco na marcação será renderizada como um espaço.
* pre - A quantidade de espaços em branco será renderizada exatamente como inserida na marcação. As quebras de linhas ocorrerão quando houver quebra de linha na marcação. Pode ocorrer overflow.
* nowrap - Qualquer quantidade de espaços na marcação será renderizada como um espaço, contudo não haverá quebra de linha. O texto extrapola o container (overflow)
* pre-wrap - A quantidade de espaços em branco será renderizada exatamente como inserida na marcação. As quebras de linhas ocorrerão quando houver quebra de linha na marcação ou para evitar overflow.
* pre-line - A quantidade de espaços em branco será renderizada exatamente como inserida na marcação. As quebras de linhas ocorrerão quando houver quebra de linha na marcação ou para completar uma linha.
* inherit - Valor herdado.

A tabela a seguir mostra, para cada valor definido para a propriedade, como serão tratadas as novas linhas, espaçamentos e tabulações e acomodação do texto dentro do container.

|   Valores  | Novas linhas                  | Espaçamentos e tabulações     | Acomodação do texto
| :--:       | :--:                          | :--:                          | :--:
| ‘normal’   | Transformado em um só espaço  | Transformado em um só espaço  | Com quebra de linha
| ‘pre’      | De acordo com a marcação HTML | De acordo com a marcação HTML | Não há quebra de linha
| ‘nowrap’   | Transformado em um só espaço  | Transformado em um só espaço  | Não há quebra de linha
| ‘pre-wrap’ | De acordo com a marcação HTML | De acordo com a marcação HTML | Com quebra de linha
| ‘pre-line’ | De acordo com a marcação HTML | Transformado em um só espaço  | Com quebra de linha
