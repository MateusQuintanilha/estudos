# Fetch API

anteriormente só possuíamos  o `XMLHttpRequest` para fazer solicitações de API, mas ele não incluí promessas e não gera um código muito organizado. Também podemos usar o jQuery para ter uma sintaxe mais organizada com o `jQuery.ajax()`.

Hoje em dia o JavaScript tem sua própria maneira integrada para fazer solicitações de API. Essa maneira é chamada de Fetch API, um novo padrão para fazer solicitações de servidor com promessas e também muitas outras funcionalidades.

## Sintaxe da Fetch API

Para usar a Fetch API, precisamos chamar o método `fetch`:

```js
fetch(resource, [init])
```

Parâmetros

* `resource` - Define o recurso que você deseja buscar. Isto pode ser:
  * String ou qualquer outro objeto com um `stringifier` - incluindo um objeto `URL` que fornece a URL do recurso que você deseja buscar.
  * Um objeto `Request`.
* `init`(opcional) - Um objeto que contem parâmetros adicionais para configurações como:
  *`Method`:  métodos de requisições (GET, POST, PUT, DELETE)
  *`Cabeçalho`: Metadados adicionais passados para a API para auxiliar o servidor a entender o tipo de solicitação com a qual ele está lidando, por exemplo, "content-type" (tipo de conteúdo).
  *`Body`:  Body.array.Buffer(), Body.Blob(), Body.formData(), Body.json(), Body.text().

***NOTA: Sem `options` o método fetch fará uma solicitação `GET` simples.***

## O método fetch retorna uma promise

O método `fetch` retorna uma promise, então sempre teremos dois resultados possíveis: `resolve` que significa que os dados que eu queria foram obtidos e `reject` que significa que um erro aconteceu e a promise foi rejeitada.

### Resposta bem sucedida de uma promise

Para capturarmos uma resposta bem sucedida de uma promise usamos o método `then`, todas as vezes que uma promise for resolvida `resolve` o conteúdo dentro do `then`, o método `then` irá receber uma função como argumento e geralmente usamos o nome do seu parâmetro como response:

```js
.then(response => {})
```

### Resposta malsucedida de uma promise

Usamos o método `catch` para capturar um erro que aconteceu ou caso a promessa seja rejeitada `reject`, o método `catch` também irá receber uma função como argumento e como sabemos que ela irá retornar um erro usamos o nome do parâmetro dessa função como error:

```js
.catch(error => {})
```

### Estrutura básica de uma fetch

Resumindo, ao usar a Fetch API teremos algo parecido com isto:

```js
fetch(url)
.then(response => {})
.catch(error => {});
```
