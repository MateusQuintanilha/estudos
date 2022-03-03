
# Criando Links

`<a>` - Anchor ou ancora em português é usado para ancorar / criar um link entre o elemento `a` e um texto, link, arquivo ou até mesmo outro elemento.

**Atributo Obrigatório:**  
`href=""` - É usado para informar o endereço de destino no qual o usuário será redirecionado ao clicar no conteúdo.

**Atributos Opcionais:**  

`download=""` - É usado para forçar o download do arquivo no link de destino.  
`hreflang=""` - É usado para informar qual a linguagem (idioma) do link de destino.  
`media=""` - Define qual a mídia ou dispositivo do link de destino.  
`ping` TENHO QUE PESQUISAR MAIS A RESPEITO - Endereço de rastreio para monitorar cliques no link de destino. Por exemplo, para fazer um relatório de quantos cliques teve no link.  
`referrerpolicy=""` - Define qual referenciador enviar. A página de destino irá tentar saber de onde veio o acesso e podemos escolher a forma de como isso acontece.  
`rel=""` - Define qual a relação do documento atual e o de destino.  
`target=""` - Define como o link será aberto no navegador.  
`type=""` - Define o tipo de mídia do link de destino.

---

## Vamos aos Exemplos:

Para conseguir criar um link precisamos utilizar o atributo ***href***, sem ele o elemento `<a>` não irá funcionar corretamente.

Sintaxe Básica:

```html
<a href=""></a>
```

Para criar um link iremos passar a URL como valor do atributo ***href*** e no conteúdo iremos adicionar a palavra que terá o link.

Vamos utilizar o link da google como exemplo:

```html
<a href="https://google.com">Site da Google</a>
```

Resultado:

> <a href="https://google.com">Site da Google</a>

Também podemos adicionar links em textos dentro do elemento `<p>`.

```html
<p>O buscador da <a href="https://google.com"> google</a> é o mais utilizado.</p>
```

Resultado:

> <p>O buscador da <a href="https://google.com"> google</a> é o mais utilizado.</p>

Também podemos adicionar imagens ao link.

```html
<a href="https://unsplash.com">
  <img src="https://source.unsplash.com/random/400x300" alt="Imagem aleatória do site unsplash">
</a>
```

Resultado:

> <a href="https://unsplash.com">
>   <img src="https://source.unsplash.com/random/400x300" alt="Imagem aleatória do site unsplash">
> </a>

---

Também podemos navegar entre os arquivos internos utilizando a barra `/` com nome do diretório e o nome do arquivo com a sua extensão.

<a href="./listas.md">Site da Google</a>

EDITAR O CAMINHO QUANDO ESTIVER NO GITHUB.

---
## Mudando o comportamento da abertura de um link
Podemos usar o atributo `target=""` para alterar o comportamento da abertura de um link utilizando um dos valores abaixo:

_self - abre na mesma aba (valor padrão)  
_blank  - abre em uma nova aba  
_top  - Vai para o topo do frame   
_parent - vai pro elemento pai   
Nome-de-um-Frame  - abre o link em uma janela do iframe.

Vamos ver sobre esses valores no elemento iframe.

---

### _self

Abre o link na mesma aba do navegador. É o valor padrão, então não precisa ser colocado, pois já é o valor padrão, mas vamos ver um exemplo:

```html
<a href="" target="_self"></a>
```

Vamos criar um link para a página do youtube para usar como exemplo:

```html
<a href="https://youtube.com" target="_self">Youtube</a>
```

### _blank

Abre o link em uma nova aba do navegador.

Sintaxe:

```html
<a href="" target="_blank"></a>
```

Vamos criar um link para a página do google para usar como exemplo:

```html
<a href="https://google.com" target="_blank">Google</a>
```

Resultado:

<a href="https://google.com" target="_blank">Google</a>

