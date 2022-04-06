# localStorage

O `localStorage` serve para guardar informações no browser mesmo se o usuário fechar a aba ou caso o browser seja fechado.

A estrutura do storage é composta por um par de chave e valor:

Sintaxe:

```js
{
    'chave': 'valor';
}
```

Existem 4 métodos para trabalhar com esses dados:

* `localStorage.setItem()` para criar um novo par de chave e valor;
* `localStorage.getItem()` para recuperar o valor da chave;
* `localStorage.removeItem()` para remover um par de chave e valor específico;
* `localStorage.clear()` para apagar **todos** os pares de chave e valor gravados no domínio.

## Gravando um dado no localStorage

Para gravar um dado no `localStorage` usamos o método `setItem()`, mas os valores precisam ser string. Então todos os dados que não são strings precisam ser convertidos para strings antes de serem gravados. Para fazer isso usamos o método `JSON.stringify()`.

## Recuperando um dado do localStorage

Para recuperar um dado do `localStorage` usamos o método `getItem()`, os valores recuperados serão do tipo string. Caso você tenha usado o `JSON.stringify()` converter os itens que não iram do tipo string para string, você poderá usar o `JSON.parse()` para converter os dados do tipo string para o tipo anterior do dado.

## Removendo um dado do localStorage

Para remover um dado do `localStorage` usamos o método `removeItem()`. Esse método irá pagar a chave e o valor que você definir. Se caso a chave não existir, ele não fará nada.

## Removendo todos os dados do domínio no localStorage

Para remover todos os dados do domínio no `localStorage` usamos o método `clear()`. Esse método irá apagar **todas** as chaves e valores do seu domínio. Não precisa passar nenhum parâmetro.
