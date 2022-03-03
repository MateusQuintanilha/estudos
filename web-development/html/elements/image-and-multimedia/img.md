# Imagem

`<img>` - É usado para inserir imagens, ela possui dois atributos obrigatórios que são o `src` e o `alt`.

**Atributos Obrigatórios:**  
`src=""` É responsável pela fonte/link do arquivo.  
`alt=""` É responsável pelo texto alternativo, esse texto alternativo possui a função de descrever o a imagem para leitores de tela e também será mostrado na tela caso a imagem não carregue.  

**Atributos Opcionais:**  
`crossorigin` Define como o elemento lida com solicitações de origem cruzada.  
`height` Define a altura da imagem.  
`ismap` Define a imagem como um mapa de imagem do lado do servidor.  
`longdesc` É responsável por definir uma descrição detalhada da imagem, fazemos isso passando um id do elemento que possui a descrição, não muda nada visualmente, mas o conteúdo será ligado semanticamente.  
`sizes` Define tamanhos alternativos da imagem.  
`srcset` É responsável por definir a URL da imagem em deferentes situações.  
`usemap` Define a imagem como um mapa de imagem do lado do cliente.  
`width` Define a largura da imagem. 

Vamos ver exemplos só com os atributos obrigatórios, em outro momento veremos os demais atributos.

Sintaxe Básica:

```html
<img src="" alt="" />
```

Exemplo:

```html
<img
  src="https://source.unsplash.com/random/400x300"
  alt="Imagem aleatória do site unsplash"
>
```

Resultado:

<img src="https://source.unsplash.com/random/400x300" alt="Imagem aleatória do site unsplash">
