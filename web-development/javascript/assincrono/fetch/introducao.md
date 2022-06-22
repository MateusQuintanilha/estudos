# Fetch API

anteriormente só possuíamos  o `XMLHttpRequest` para fazer solicitações de API, mas ele não incluí promessas e não gera um código muito organizado. Também podemos usar o jQuery para ter uma sintaxe mais organizada com o `jQuery.ajax()`.

Hoje em dia o JavaScript tem sua própria maneira integrada para fazer solicitações de API. Essa maneira é chamada de Fetch API, um novo padrão para fazer solicitações de servidor com promessas e também muitas outras funcionalidades.

## Sintaxe da Fetch API

Para usar a Fetch API, precisamos chamar o método `fetch`. Precisamos passar a URL da API como um parâmetro:

```js
fetch(url)
```

## O método fetch retorna uma promise

O método `fetch` retorna uma promise, então sempre teremos dois resultados possíveis: `resolve` que significa que os dados que eu queria foram obtidos e `reject` que significa que um erro aconteceu e a promise foi rejeitada.

### Resposta bem sucedida de uma promise

Para capturarmos uma resposta bem sucedida de uma promise usamos o método `then`, todas as vezes que uma promise for resolvida `resolve` o conteúdo dentro do `then`, o método `then` irá receber uma função como argumento e geralmente usamos o nome do seu parâmetro como response:

```js
.then(response => {})
```


Há tipos diferentes de APIs REST. Vejamos aqui as que você usará na maioria dos casos.

* GET - Obter dados de uma API. Por exemplo, obter um usuário do Twitter com base em seu nome de usuário.
* POST - Enviar dados para a AP+I. Por exemplo, criar um novo registro de usuários com nome, idade e endereço de e-mail.
* PUT - Atualizar um registro existente com novos dados. Por exemplo, atualizar o endereço de e-mail.
* DELETE - Remover um registro. Por exemplo, excluir um usuário de um banco de dados.

Há três elementos para toda API REST. A solicitação, a resposta e os cabeçalhos.

Solicitação (Request) - Esses são os dados que você enviará para a API, como um id de pedido para obter os dados do pedido.

Exemplo: `Manishs-MacBook-Pro:~ manish$ curl -X GET -v https://api.github.com/users/manishmshiva`

Resposta(Response) - Todos os dados que você receber de volta do servidor após uma solicitação com sucesso/que tenha falhado.

Cabeçalhos(Headers) - Metadados adicionais passados para a API para auxiliar o servidor a entender o tipo de solicitação com a qual ele está lidando, por exemplo, "content-type" (tipo de conteúdo).
