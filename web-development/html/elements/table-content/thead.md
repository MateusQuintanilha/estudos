# Indicando o cabeçalho principal da tabela
O elemento `<thead>` é usado para delimitar a área de cabeçalho na tabela. Esse é um recurso que nem sempre é utilizado, pois não é obrigatório ter esse conteúdo em uma tabela. Todas as linhas declaradas dentro dessa tag são consideradas partes do cabeçalho. Portanto, é preciso cuidado para não incluir dados referente ao corpo da tabela.

```html
<table>
    <caption>Usuários</caption>
    <thead>
        <tr>
            <th>Nome</th>
            <th>E-mail</th>
        </tr>
    </thead>
</table>
```
