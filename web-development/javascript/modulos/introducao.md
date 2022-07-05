# Modules ES6

## Introdução

À medida que nosso código cresce, queremos dividi-lo em vários arquivos, facilitando o processo de manutenção e reusabilidade dos códigos em outras partes do projeto. E os módulos permitem que blocos de códigos como funções, classes e constantes sejam separados em arquivos e que possam ser importados quando necessário.

Por muito tempo, o JavaScript existiu sem uma sintaxe de módulo em nível de linguagem. Isso não foi um problema, porque inicialmente os scripts eram pequenos e simples, então não havia necessidade.

Antes desse recurso era necessário declarar variáveis globais em arquivos .js que. quando adicionados a mesma página, permitiam que essas variáveis passassem a fazer parte do mesmo contexto. Mas isso gerava problemas quando os scripts eram muito complexos, pois era difícil de prever os nomes de variáveis já existentes (Poluição do namespace global), e acabava ocorrendo a sobrescrita de variáveis com o mesmo nome.

Mas eventualmente os scripts se tornaram cada vez mais complexos, então a comunidade inventou uma variedade de maneiras de organizar o código em módulos, bibliotecas especiais para carregar módulos sob demanda.

Para citar alguns (por razões históricas):

* `AMD` - É a sigla para Definição de Módulos Assíncronos (ou Asynchronous Module Definition), ele é um sistema de módulos mais antigos, implementado inicialmente pela biblioteca `require.js`.
* `CommonJS` - O sistema de módulos criado para o servidor Node.js.
* `UMD`- é a sigla para Definição de Módulo Universal (ou Universal Module Definition), a ideia por trás do UMD é prover uma forma de importar/exportar módulos que funcionasse tanto em ambientes com `AMD` quanto com `CommonJS`.

Agora, tudo isso lentamente está se tornando parte da história, mas ainda podemos encontrá-los em scripts antigos.

O sistema utilizado atualmente é o de módulos em nível de linguagem ou como é comumente chamado (Módulo ES6) apareceu no padrão do ECMAScript em 2015, e evoluiu gradualmente desde então e agora é suportado por todos os principais navegadores e no Node.js. Então vamos focar nos módulos ES6.

## O que é um módulo?

Os módulos em JavaScript são arquivos que possuem uma forma de compartilhar informações entre outros arquivos, dessa forma, todos os arquivos que realizarem a importação desse módulo poderão utilizar e usufruir de suas funções ou informações que foram expostas.

E podemos fazer o compartilhamento de informações com outros arquivos usando as palavras-chave : `export` e `import`.

* `export`: é usada para definir quais partes do códigos poderão ser acessíveis a partir de outros arquivos.
* `import`: permite a importação de funcionalidades de outros módulos

***NOTA: Essa forma de utilizar os módulos só funciona usando um servidor, se tentar usar usando o node ou abrindo o arquivo.html diretamente no navegador não irá funcionar.***

## Criando os arquivos para a base do exemplo

Vamos criar os arquivos base do exemplo que iremos usar tanto para exportar como para importar módulos, vamos criar uma pasta que irá conter todos os arquivos, dentro dessa pasta vamos criar o arquivo `index.html`, um arquivo chamado de `main.js` e por ultimo um arquivo chamado de `module.js`.

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

## Exportando módulos

Existem algumas formas de exporta e importar arquivos e vamos ver algumas dessas formas, iremos usar o arquivo `module.js` para criar alguns códigos e exporta-los para o arquivo `main.js`.

Há duas formas em que podemos exportar nossos módulos utilizando `export`, através da exportação explícita (Named Exports) e da exportação padrão (Default Exports).

### Exportação explícita (Named Exports)

Podemos utilizar a exportação explícita diversas vezes no mesmo arquivo e podemos exportar vários tipos de dados.

Para exportar um conteúdo no momento de sua criação só precisamos adicionar a palavra-chave `export` antes do seu conteúdo, exemplo:

```js
export const valor = 20;
```

Para exportar um conteúdo que já foi declarado precisamos usar a palavra-chave `export` seguido de um par de chaves `{ }` e adiciona o nome do conteúdo dentro das chaves, exemplo:

```js
export {valor01};

const valor01 = 100;
```

#### Exportar variáveis e constantes

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

#### Exportar funções

```js
export function myFunction() {
    console.log('Minha Função');
}
```

#### Exportar classes

```js
export class MyClass {
    constructor(text) {
        this.text = text;
    }
    printMyClass() {
        console.log(this.text);
    }
}
```

#### Exportar uma lista de exportações

Se possuirmos vários dados para exporta, podemos fazer uma lista com todos os itens ao invés de exportar um por um, vamos fazer um exemplo usando as quatro operações matemática básica: somar, subtrair, multiplicar e dividir, para criar essa lista de exportações iremos adicionar os nomes de todos os conteúdos que desejamos exportar dentro de um par de chaves e separa-los usando vírgula:

```js
export { somar, subtrair, multiplicar, dividir };

function somar(valorA, valorB) {
    const resultado = valorA + valorB;
    console.log(resultado);
}

function subtrair(valorA, valorB) {
    const resultado = valorA - valorB;
    console.log(resultado);
}

function multiplicar(valorA, valorB) {
    const resultado = valorA * valorB;
    console.log(resultado);
}

function dividir(valorA, valorB) {
    const resultado = valorA / valorB;
    console.log(resultado);
}
```

#### Renomear as exportações

Também podemos renomear as exportações quando usamos a lista de exportações, para fazer isso precisamos adicionar o nome do dado original, após o nome vamos adicionar a palavra-chave `as` e para finalizar iremos adicionar o novo nome para a exportação:

```js
export { constante01 as resultado01, constante02 as resultado02 };

const constante01 = 'Aprovado';
const constante02 = 'Reprovado';
```

#### Exportação através da atribuição de desestruturação de objeto

Podemos fazer a exportação usando a atribuição de desestruturação, caso não lembre como a atribuição de desestruturação é feita, precisamos criar uma variável ou constante em seguida usamos um par de chaves `{ }`, dentro do par de chaves iremos adicionar os nomes das propriedades do objeto em seguida iremos atribuir o objeto a essa variável ou constante e para exportar iremos adicionar a palavra-chave `export` no inicio:

```js
const myObject = {
    nome: 'Smartphone',
    marca: 'Samsung',
    modelo: 'S20 FE',
    cor: 'Preto'
}; // Objeto

export const {nome, marca, modelo, cor} = myObject;
```

Também podemos renomear os nomes das propriedades, para fazer isso precisamos usar dois pontos `:` após o nome da propriedade e em seguida adicionar o novo nome da propriedade:

```js
const myPhone = {
    nome: 'Smartphone',
    marca: 'Samsung',
    modelo: 'S10 FE',
    cor: 'Azul'
};
export const {nome: name, marca: mark, modelo: model, cor: color} = myPhone;
```

### Exportação padrão (Default Exports)

Diferente da exportação explícita, a exportação padrão só pode ser usada uma vez no mesmo arquivo e também podemos exportar vários tipos de dados.

Para fazer a exportação `default` iremos precisar usar duas palavras-chave, a palavra `export` e a palavra `default`.

#### Exportar variáveis e constantes usando default

Diferente da exportação explícita, na exportação padrão não podemos exportar uma variável ou constante no momento de sua criação `export`:

```js
export default const valorDefault = 'Valor Default 01'; // Forma Errada

const valorDefault = 'Valor Default 01';
export default valorDefault; // Forma Certa
```

Também podemos fazer a exportação usando as chaves, mas precisamos atribuir a opção `default` ao nome do dado que desejamos exportar usando a palavra-chave `as`, como o exemplo a seguir:

```js
const valorDefault = 'Valor Default 01';
export { valorDefault as default};
```

#### Exportando função em default

Podemos fazer a exportação padrão no momento da criação da função:

```js
export default function myFunctionDefault() {
    console.log('Minha Função Padrão')
}
```

Também podemos fazer o uso de funções anônimas, pois só podemos ter uma exportação default por arquivo e na hora de fazer a importação em outro arquivo existe uma maneira diferente de fazer essa importação, então podemos ter acesso a essa função mesmo que ela não possua um nome:

```js
export default function () {
    console.log('Minha Função Padrão')
}
```

#### Exportando classe em default

Também podemos exportar uma classe no momento da sua criação:

```js
export default class MyClassDefault {
    constructor(text) {
        this.text = text;
    }
    printMyClass() {
        console.log(this.text);
    }
}
```

E também podemos exportar uma classe sem nome como default:

```js
export default class {
    constructor(text) {
        this.text = text;
    }
    printMyClass() {
        console.log(this.text);
    }
}
```

#### Exportando uma função default em uma lista de exportação

Também podemos exportar uma lista de exportação usando as chaves `{ }`, contendo uma exportação `default`, mas como foi dito antes, só podemos ter uma exportação `default` por arquivo.

Para conseguirmos fazer isso precisamos adicionar o nome do dado que desejamos enviar como padrão e atribuir `default` usando a palavra-chave `as`, também vamos precisar usar esse método no momento em que fizermos a importação.

```js
const valorDefault01 = 'Valor Padrão 01';
const texto01 = 'Texto 01';
const texto02 = 'Texto 02';
const texto03 = 'Texto 03';

export {valorDefault01 as default, texto01, texto02, texto03};
```

### Importando módulos

A declaração estática `import` é usada para importar vínculos que são exportados por um outro módulo. Os módulos importados estão em `strict mode`,  declarado como tal ou não. A declaração `import` não pode ser usada em scripts embutidos, a menos que tal script tenha um `type="module"`.

Há também uma função dinâmica `import()`, que não requer scripts de `type="module"`.

Agora vamos ver algumas maneiras de fazer a importação de exportações de módulos.

***NOTA: Os exemplos utilizados da importação das exportações dos módulos serão dos mesmo exemplos criados na explicação sobre as exportações***

#### Importar uma única exportação de um módulo de forma explicita

Para fazer uma importação de um exportação de um módulo precisamos usar a palavra-chave `import`, também iremos precisar do nome da exportação, caminho do arquivo do módulo e o nome do módulo.

Sintaxe:

```js
import {nomeDaExportação} from "caminhoDoMódulo/nomeDoMódulo.js";
```

Exemplo:

```js
import { name1 } from "./module.js";

console.log(name1); // saída: Nome 01
```

#### Importar de várias exportações de um módulo de forma explicita

Também podemos fazer a importação de várias exportações de forma explicita usando vírgula na hora de adicionar os nomes das exportações dentro das chaves:

```js
import { name1, name2, name3 } from "./module.js";

console.log(name1, name2, name3); // saída: Nome 01 Nome 02 Nome 03
```

#### Importar todas as exportações disponíveis em um módulo

Podemos importar todas as exportações de um módulo usando o símbolo `*` e a palavra-chave `as`.

Sintaxe:

```js
import * as nomeQueRepresentaOMódulo from "caminhoDoMódulo/nomeDoMódulo.js";
```

Para conseguirmos acessar as exportações iremos usar o nome que escolhemos para representar o módulo que inserimos após o `as` e vamos ter acesso as exportações como se fossem métodos através da notação por ponto:

```js
nomeQueRepresentaOMódulo.NomeDaExportação
```

Exemplo:

```js
import * as myModule from "./module.js";

console.log( myModule.name1 ); // saída: Nome 01
```

#### Alterando o nome da exportação no arquivo de importação

Vimos como alterar o nome de uma exportação quando vimos sobre como fazer as exportações, mas também podemos alterar o nome da exportação no arquivo de importação, como podemos ver a seguir:

```js
import { name1 as nome } from "./module.js";

console.log(nome); // saída: Nome 01
```

Também podemos renomear várias exportações em uma única importação, só precisamos separa-los com vírgula:

```js
import { name1 as nome01, name2 as nome02 } from "./module.js";

console.log(nome01, nome02); // saída: Nome 01 Nome 02
```

#### Importar exportação Default (Padrão)

A importação de exportação Default é bem parecida com a importação explicita, a principal diferença é que não utilizamos as chaves e também podemos adicionar qualquer nome para a exportação.

Sintaxe:

```js
import nomeDaExportação from "caminhoDoMódulo/nomeDoMódulo.js";
```

Exemplo:

```js
// Arquivo module.js
const valorDefault01 = 'Valor Padrão 01';

export default valorDefault01;
```

```js
//Arquivo main.js
import valueDefault from "./module.js";

console.log(valueDefault); // saída: Valor Padrão 01
```
