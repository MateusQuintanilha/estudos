# Comandos

## Mostrar o diretório atual

Podemos mostrar o caminho do diretório atual usando o comando `pwd`.

## Mudando o diretório

Para mudar de diretório usamos o comando `cd`.

Também podemos usar pontos após o comando para especificar algumas coisas:

`.`: se mantém no mesmo lugar (diretório atual)
`..`: volta um diretório (retorna para o diretório pai) podemos usar várias vezes, até chegar no diretório root
`-`: volta para o mesmo diretório em que você estava

## Navegando para diretórios que possuem espaços no nome

podemos usar as aspas `" "` e inserir o caminho do diretório que contem espaços dentro, mas o recomendado e criar diretórios sem espaços e sem caracteres especiais.

## Listando arquivos e pastas que estão no diretório

Podemos usar o comando `ls` para listrar os arquivos e pastas que estão no diretório e também podemos usar alguns argumentos especiais para fazer mais algumas funções:

podemos usar apelas o comando `ls` para listar os arquivos do diretório ou após o comando inserir o nome do diretório seguido de uma barra para mostrar os arquivos que estão dentro do diretório indicado, exemplo: `ls Downloads/`.

`-l`: Mostra mais informações, como quais são as permições dos arquivos, quem é o dno e o grupo do arquivo, o tamanho do arquivo e o dia e a hora que foram editados.

`-h`  irá mostras as informações de um jeito que os humanos possam entender como o tamanho dos arquivos, irá converter os valores mostrados para b, k, mb, etc.

`-a` irá mostras todos os arquivos, incluindo so ocultos.

`-R` irá lista os repositórios e todos os arquivos que estão dentro dele.

`-S` irá ordenar os arquivos pelo tamanho.

## Arquivos e Diretórios

### File

Podemos usar o comando `file` com o nome e a extensão do arquivo para verificar as informações do arquivo como a extensão, resolução.

### Stat

Podemos usar o comando `stat` com o nome e a extensão do arquivo para verificar outros tipos de informações como quem é o dono do arquivo, tipos de permições, ultima modificação, tamanho, etc.

## Criando diretório

Podemos usar o comando `mkdir` em seguida adicionar o nome do diretório para criar um diretório.

Para poder criar múltiplos diretórios como por exemplo `site/src` irá acusar um erro falando que o diretório `site` não existe, para que esse erro não ocorra, podemos adicionar um `-p` para que os diretório site seja criado e em seguida o src seja criado dentro do diretório site:  `mkdir -p site/src`.

Também podemos criar múltiplos diretórios no mesmo diretório raiz, para isso só precisamos separar os nomes dos diretórios a serem criados com espaço: `mkdir site2 site3 site4`