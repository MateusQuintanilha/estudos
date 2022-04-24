# Adicionando CSS

Existem quatro formas de um elemento HTML receber formatações de estilos CSS:

* Padrão do navegador - São valores pré-definidos pelo navegador.
* Inline - São adicionados na tag de abertura de um elemento HTML por meio do atributo `style=""`.
* Interno - São adicionados usando o elemento `style` e esse elemento deve estar dentro do elemento `head`.
* Externo - Podemos criar um arquivo externo e fazer a ligação desse aquivo externo com o arquivo HTML através do elemento `link` que deverá ficar dentro do elemento `head`.

## Padrão do navegador

São os estilos CSS pré-definidos pelo navegador, não podemos alterar esses estilos e podem mudar de navegador para navegador. Mas podemos sobrescrever esses estilos usando as outras três formas.

## Inline

Podemos adicionar propriedades CSS na tag de abertura do elemento em que desejamos fazer alterações no estilo por meio do atributo `style`.

Sintaxe:

```html
<tag style="propriedade: valor;"></tag>
```

Exemplo:

Vamos alterar a cor do texto de um elemento `p`:

```html
<p style="color: red;">Isso é um Parágrafo</p>
```

Mas essa forma de adicionar estilos CSS em elementos HTML não é muito usada, pois seria preciso adicionar estilos linha a linha. Imagine adicionar várias propriedades CSS em cada linha em um documento com 500 linhas. E caso precise fazer uma alteração no layout será preciso alterar dezenas de linhas. Então essa forma de adicionar estilos CSS é usada apenas em casos muito específicos.

## Interno

Podemos declarar regras CSS que irão afetar vários elementos ao mesmo tempo dentro do arquivo HTML, essas regras CSS poderão ser adicionadas dentro do elemento do elemento `style`, que deverá ficar dentro do elemento `head`.

Sintaxe:

```html
<style>
    seletor {
        propriedade:valor;
    }
</style>
```

Podemos adicionar várias regras dentro desse elemento `style`, vamos adicionar estilos para o elemento `h1` e para o elemento `p`:

```html
<head>
    <style>
        h1 {
            color:red;
        }
        
        p {
            color:blue;
        }
    </style>
</head>
```

Agora todos os elementos `h1` dentro do arquivo irão ter a cor vermelha e todos os elementos `p` terão a cor azul.

## Externo

Podemos criar um arquivo externo com a extensão css `nomeDoArquivo.css` para conter todas as regras CSS, usando um arquivo externo as não serão mais estritas apenas a um documento, essas regras poderão ser usadas em vários arquivos HTML ao mesmo tempo.

Para fazer a ligação entre esse arquivo externo e o arquivo HTML iremos usar o elemento `link` que deverá ficar dentro do elemento `head`.

Sintaxe:

```html
<link rel="stylesheet" type="text/css" href="./nomeDoArquivo.css" >
```

Precisamos passar o caminho do arquivo que contém as regras CSS no elemento `link`. Então preste muita atenção para não passar o caminho do arquivo errado.
