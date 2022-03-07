# Adicionando rodapé na tabela
O elemento `<tfoot>` é usado para delimitar a área do rodapé. O `<tfoot>` deve ser utilizado após o fechamento do `</tbody>`. Assim como no cabeçalho, esse espaço também pode conter linhas e colunas e todo o conteúdo entre as tags de abertura e fechamento fazem parte do rodapé.

```html
<table>
    <thead>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
        <tr>
    </thead>
    <tbody>
        <tr>
            <td>A1</td>
            <td>B1</td>
            <td>C1</td>
        <tr>
        <tr>
            <td>A2</td>
            <td>B2</td>
            <td>C2</td>
        </tr>
        <tr>
            <td>A3</td>
            <td>B3</td>
            <td>C3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>número de linhas coluna A</th>
            <th>número de linhas coluna B</th>
            <th>número de linhas coluna C</th>
        </tr>
        <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
        </tr>
    </tfoot>
</table>
```
