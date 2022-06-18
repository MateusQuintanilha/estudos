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

## Criando arquivos com touch

Podemos usar o comando `touch` para alterar registros de data e hora de arquivos ou pastas e também podemos criar um ou mais arquivos.

### Alterando registo de data e hora com touch

Para fazer a alteração dos registros de data e hora de um arquivo só é necessário usar o comando `touch` em seguida adicionar o nome do arquivo que desejamos fazer a alteração dos registros: `touch site`.

### Criando Arquivos com touch

Para criar um arquivo usando o `touch` precisamos usar o comando em seguida adicionar o nome do arquivo e a extensão: `touch file.txt`.

Para criar múltiplos arquivo usando o `touch` só precisamos separar os nomes dos arquivos com espaço: `touch file1.txt file2.txt file3.txt`.

## Copiando arquivos e pastas

Podemos usar o comando `cp` para copiar arquivos e pastas, para fazer isso precisamos usar o comando, em seguida adicionamos o nome do arquivo que queremos copiar e para finalizar adicionamos o nome do arquivo ou diretório onde o arquivo será copiado : `cp file.txt arquivo.txt` (irá criar outro arquivo txt com o conteúdo do arquivo file), Agora vamos ao exemplo de copiar para outro diretório: `cp file.txt site2`.

## Movendo e renomeando arquivos ou pastas

Podemos usar o comando `mv` para mover ou renomear arquivos ou pastas.

Podemos usar o comando para mover arquivos ou pastas, podemos mover múltiplos arquivos, para isso iremos separar o nome dos arquivos com espaço e todas as pastas ou arquivos serão movido para o ultimo nome inserido: `mv file1.txt file2.txt file3.txt site`

e para renomear um arquivo precisamos usar o comando em seguida adicionar o nome do arquivo com a extensão que desejamos alterar o nome e em seguida adicionar o novo nome com a extensão: `mv file1.txt arquivo1.txt`

## Removendo arquivos ou pastas (para sempre)

Podemos usar o comando `rm` para remover um arquivos ou pasta para sempre, para fazer isso precisamos usar o comando em seguida adicionar o nome do arquivo ou diretório que desejamos remover, também podemos remover múltiplos arquivos separando os arquivos com espaço. `rm arquivo2.txt file3.txt`

Para remover um diretório precisamos usar o `-r` antes do nome do diretório que desejamos excluir, pois como um diretório possui muitos arquivos, apenas o comando `rm` não poderá exclui-lo: `rm -r site`.

E também podemos forçar para remover arquivos caso tenha problemas com permições podemos usar o `-rf` para forçar a remoção `rm -rf site3`.

## wildcards (curinga)

Podemos usar os curingas para fazer algumas ações para facilitar o nosso dia a dia.

* `*`: irá aplicar a ação para um ou mais caracteres após o *.

Exemplo: Podemos mover todos os arquivos que comecem com si em de um repositório para outro.
`mv sites/si* sites2`: nesse exemplo irá mover todos os arquivos do repositório sites que se iniciam com si para o repositório sites2.

* `?`: irá aplicar a ação apenas um caractere após o uso da ?.

Exemplo: `mv sites2/site? sites` nesse caso irá mover todos os arquivos que possuírem um caractere após a palavra site, então se tivermos arquivos site com números em sequência de 1 a 12, só irá mover os arquivos de 1 a 9.

## Encontrando arquivos ou diretórios

Podemos usar o comando `find` para encontrar arquivos ou diretórios, mas precisamos passar mais algumas coisas: `find <path> arg [expression]`.

Por exemplo para usar o find no diretório em que estamos iremos usar da seguinte forma: `find .`.

Agora precisamos passar o tipo de arquivo que estamos procurando.

* -type d: para pesquisar um diretório
* -type f: para pesquisar um arquivo

Exemplo: para procurar todos os arquivos que são mp4 no diretório atual. faremos  da seguinte forma: `find . -type f -name "*.mp4"`.

Exemplo2: para procurar diretórios que possuem `*da*` em qualquer parte do nome podemos fazer assim: `find . type d -name "*da*"`.

## Ver conteúdo de arquivos com cat e less

Podemos ver o conteúdo de um arquivo usando o comando `less` em seguida adicionamos o nome do arquivo. (o arquivo será aberto e para fechar o arquivo precisamos usar um q).

E para dar um print na tela e em seguida fechar a operação podemos usar o comando `cat`.

## Editando arquivos

Podemos usar o comando `nano` em seguida o nome do arquivo que desejamos editar, precisamos usar as setas do teclado para navegar entre o documento pois o mouse não funciona. (CTRL + O salva o arquivo e CTRL + X para fechar)

Também podemos usar o comando `vim` é um editor de texto mais avançado.