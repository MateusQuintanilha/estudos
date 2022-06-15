# AJAX (Asynchronous JavaScript and XML)

AJAX é um acrônimo de Asynchronous JavaScript and XML. Em poucas palavras, é o uso do objeto `XMLHttpRequest` para se comunicar com scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo JSON, XML, HTML e até mesmo arquivos de texto. Porém a característica mais atraente do AJAX, é a sua natureza "assíncrona", o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. isso permite a você atualizar partes de uma página com vase em eventos do usuário.

Os dois recursos em questão que você pode utilizar são:

* Fazer requisições para o servidor sem recarregar a página
* Receber e trabalhar com dados do servidor

## Criando requisições com XMLHttpRequest

O JavaScript nativamente possui um objeto responsável por realizar requisições HTTP via AJAX, esse objeto é conhecido como `XMLHttpRequest`.

Vamos criar uma instância do objeto `XMLHttpRequest`:

```js
const xhr = new XMLHttpRequest();
```

Agora que criamos a instância, precisamos iniciar uma nova requisição.

## Iniciando ou Reiniciando uma Requisição usando o método open

O `XMLHttpRequest` possui o método `open()` para iniciar uma nova requisição ou reinicializar um requisição já existente.

Sintaxe:

```js
XMLHttpRequest.open(method, url)
XMLHttpRequest.open(method, url, async)
XMLHttpRequest.open(method, url, async, user)
XMLHttpRequest.open(method, url, async, user, password)
```

### Parâmetros do método open

* `method`: O método de requisição HTTP: "GET", "POST", "PUT", "DELETE", etc.
* `url`: A URL para enviar a requisição
* `async`(opcional): É um parâmetro boolean, utiliza o `valor` true como padrão.
  * `true`: A requisição será realizada de forma assíncrona.
  * `false`: A requisição será realizada de forma síncrona.
* `user`(opcional): O nome de usuário para ser usado em autenticação; por padrão, esse valor é `null`.
* `password`(opcional): A senha de usuário para ser usado em autenticação; por padrão esse valor é `null`.
