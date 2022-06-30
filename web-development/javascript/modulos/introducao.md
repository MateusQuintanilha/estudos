# Modules ES6

## Introdução

À medida que nosso código cresce, queremos dividi-lo em vários arquivos, facilitando o processo de manutenção e reusabilidade dos códigos em outras partes do projeto. E os módulos permitem que blocos de códigos como funções, classes e constantes sejam separados em arquivos e que possam ser importados quando necessário.

Por muito tempo, o JavaScript existiu sem uma sintaxe de módulo em nível de linguagem. Isso não foi um problema, porque inicialmente os scripts eram pequenos e simples, então não havia necessidade.

Antes desse recurso era necessário declarar variáveis globais em arquivos .js que. quando adicionados a mesma página, permitiam que essas variáveis passassem a fazer parte do mesmo contexto. Mas isso gerava problemas quando os scripts eram muito complexos, pois era difícil de prever os nomes de variáveis já existentes (Poluição do namespace global), e acabava ocorrendo a sobrescrita de variáveis com o mesmo nome.

Mas eventualmente os scripts se tornaram cada vez mais complexos, então a comunidade inventou uma variedade de maneiras de organizar o código em módulos, bibliotecas especiais para carregar módulos sob demanda.

Para citar alguns (por razões históricas):

* `AMD` - Um sistema de módulos mais antigos, implementado inicialmente pela biblioteca `require.js`.
* `CommonJS` - O sistema de módulos criado para o servidor Node.js.
* `UMD`- mais um sistema de módulos, sugerido como universal, compatível com `AMD` e `CommonJS`.

Agora, tudo isso lentamente está se tornando parte da história, mas ainda podemos encontrá-los em scripts antigos.

O sistema utilizado atualmente é o de módulos em nível de linguagem ou como é comumente chamado (Módulo ES6) apareceu no padrão do ECMAScript em 2015, e evoluiu gradualmente desde então e agora é suportado por todos os principais navegadores e no Node.js. Então vamos focar nos módulos ES6.

## O que é um módulo?

Os módulos em JavaScript são arquivos que possuem uma forma de compartilhar informações entre outros arquivos, dessa forma, todos os arquivos que realizarem a importação desse módulo poderão utilizar e usufruir de suas funções ou informações que foram expostas.

E podemos fazer o compartilhamento de informações com outros arquivos usando as palavras-chave : `export` e `import`.

* `export`: é usada para definir quais partes do códigos poderão ser acessíveis a partir de outros arquivos.
* `import`: permite a importação de funcionalidades de outros módulos

***NOTA: Essa forma de utilizar os módulos só funciona usando um servidor, se tentar usar usando o node ou abrindo o arquivo.html diretamente no navegador não irá funcionar.***

## Criando os arquivos para a base do exemplo

Vamos criar os arquivos base do exemplo que iremos usar tanto para exportar como para importar módulos, vamos criar uma pasta que irá conter todos os arquivos, dentro dessa pasta vamos criar o arquivo `index.html`, um arquivo chamado de `main.js` e por ultimo um arquivo chamado de `calculadora.js`.

Dentro do arquivo `index.html` vamos criar a base do html e adicionar o link para o arquivo `main.js`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./main.js"></script>
</body>
</html>
```

## Utilizando os módulos no navegador

Para que os módulos sejam carregados corretamente precisamos alterar a forma em criamos o link do arquivo `main.js` no arquivo html, para que a engine do navegador entenda que esse esse arquivo contém módulos, para fazer isso precisamos adicionar a propriedade `type` com o valor `"module"`:

Então vamos alterar na tag de abertura script:

Sem a propriedade `type`:

```html
<script src="./main.js"></script>
```

Com a propriedade `type`:

```html
<script type="module" src="./main.js"></script>
```

Então o index.html irá ficar assim:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module" src="./main.js"></script>
</body>
</html>
```

A partir deste momento, enquanto estiver em um navegador que dê suporte ao recurso será possível utilizar a sintaxe de módulos.

A seguir veremos uma tabela com as versões das engines que passaram a dar suporte aos módulos ES6:

|   Engine                          |   Versão Minima   |
|              :--:                 |       :--:        |
|   Node.JS ( V8)                   |   8.5.0           |
|   Safari ( WebKit)                |   11.4            |
|   Chrome ( V8)                    |   68              |
|   Microsoft Edge ( ChakraCore)    |   17              |
|   Firefox ( Gecko)                |   61              |

## Exportando e importando um módulo

Existem algumas formas de exporta e importar arquivos e vamos ver algumas dessas formas, iremos usar o arquivo `module.js` para criar alguns códigos e exporta-los para o arquivo `main.js`.

Há duas formas em que podemos exportar nossos módulos utilizando `export`, através da exportação explícita (Named Exports) e da exportação padrão (Default Exports).

### Exportação explícita (Named Exports)

Podemos utilizar a exportação explícita diversas vezes no mesmo arquivo e podemos exportar vários tipos de dados.

#### Podemos exportar variáveis e constantes

Podemos criar as variáveis e depois atribuir o seu valor:

```js
export let name1, name2, name3;

name1 = 'Nome 01';
name2 = 'Nome 02';
name3 = 'Nome 03';
```

Como também podemos criar variáveis ou contantes e atribuir seu valor no momento de sua criação:

```js
export const name4 = 'Nome 04', name5 = 'Nome 05', name6 = 'Nome 06';
```