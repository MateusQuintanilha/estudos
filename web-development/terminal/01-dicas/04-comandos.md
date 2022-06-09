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
