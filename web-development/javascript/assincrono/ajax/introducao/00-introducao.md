# AJAX (Asynchronous JavaScript and XML)

AJAX é um acrônimo de Asynchronous JavaScript and XML. Em poucas palavras, é o uso do objeto `XMLHttpRequest` para se comunicar com scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo JSON, XML, HTML e até mesmo arquivos de texto. Porém a característica mais atraente do AJAX, é a sua natureza "assíncrona", o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. isso permite a você atualizar partes de uma página com vase em eventos do usuário.

Os dois recursos em questão que você pode utilizar são:

* Fazer requisições para o servidor sem recarregar a página
* Receber e trabalhar com dados do servidor

## XMLHttpRequest

`XMLHttpRequest` é um objeto embutido do navegador que permite fazer solicitações HTTP em JavaScript. Como vimos anteriormente, apesar de ter a palavra "XML" em seu nome, ele pode operar em qualquer dado e não apenas no formato XML.

***Nota: No momento, há outro método mais moderno `fetch`.***

No desenvolvimento web moderno o `XMLHttpRequest` pode ser usado por três razões:

* Razões históricas: precisamos dar suporte a scripts existentes com `XMLHttpRequest`.
* Quando e´preciso dar suporte a navegadores antigos e não queremos polyfills (por exemplo, para manter os scripts pequenos).
* Precisamos de algo que o `fetch` ainda não pode fazer, por exemplo, acompanhar o progresso do upload.

Agora vamos dar início ao Básico:

O `XMLHttpRequest` possui dois modos de operação: Síncrono e o Assíncrono.

Vamos ver primeiro o assíncrono, pois é usado na maioria dos casos.

Para fazer o pedido e receber a resposta, precisamos de 4 etapas:

1. Criar a instância do `XMLHttpRequest`
1. Inicializa-lo usando o método `open`, geralmente logo após a criação de sua instância
1. Enviar o pedido usando o método `send`.
1. Escutar os eventos para obter uma resposta.

### Criando a instância do XMLHttpRequest

Vamos criar uma instância do `XMLHttpRequest`:

```js
const xhr = new XMLHttpRequest();
```

***Nota: Esse construtor não possui argumentos.***

### Configurando a solicitação da Requisição usando o método open

O `XMLHttpRequest` possui o método `open()` para configurar uma nova requisição ou reconfigurar um requisição já existente.

Sintaxe:

```js
xhr.open(method, url)
xhr.open(method, url, async)
xhr.open(method, url, async, user)
xhr.open(method, url, async, user, password)
```

Parâmetros:

* `method`: O método HTTP: "GET", "POST", "PUT", "DELETE", etc.
* `url`: A URL a ser solicitada, uma string, pode ser um objeto `URL`
* `async`(opcional): É um parâmetro boolean, utiliza o valor `true` como padrão.
  * `true`: A requisição será realizada de forma assíncrona.
  * `false`: A requisição será realizada de forma síncrona.
* `user`(opcional): O nome de usuário para ser usado em autenticação; por padrão, esse valor é `null`.
* `password`(opcional): A senha de usuário para ser usado em autenticação; por padrão esse valor é `null`.

***Nota: Observe que o método `open` só configura a solicitação, ao contrário de seu nome, não abre a conexão. Ele apenas configura a solicitação, mas a atividade de rede só começa com a chamada do método `send`.***