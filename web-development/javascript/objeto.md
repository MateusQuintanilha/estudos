# Objetos

Um objeto é uma coleção de propriedades, cada propriedade é definida com uma sintaxe de `chave : valor`.

A `chave` pode ser uma `string` e o `valor` pode ser qualquer tipo de dados.

um ***valor*** de propriedade pode ser uma função, que é então considerada um método do objeto.

Iremos utilizar a sintaxe literal de objeto para criar um objeto. O exemplo a seguir cria um objeto vazio:

```js
let nomeDoObjeto = {}
```

Para adicionar propriedades a um objeto, use a sintaxe `chave : valor` e para separar uma propriedade de outra, utilize uma vírgula `,`.

```js
let person = {
  firstName: 'Rocky',
  'last-Name': 'Balboa',
  height: 1.78,
  weight: 93
}
```

Podemos utilizar aspas ou aspas duplas em volta do nome da propriedade caso o nome contenha um identificador que não é valido como vimos na segunda propriedade do objeto person.

Mas de preferência utilize nomes validos e escreva todos os nomes de propriedades no mesmo estilo, por exemplo, todos escritos utilizando camelCase.

---

## Acessando as propriedades

Podemos acessar uma propriedade de um objeto de duas formas, a notação por ponto e a notação por colchetes.

### Notação por ponto `.`

Utilizamos um ponto `.` para unir o nome do objeto e o nome da propriedade, como no exemplo a seguir:

```js
nomeDoObjeto.NomeDaPropriedade
```

Para acessar a propriedade `firstName` do objeto `person`, utilize a expressão a seguir:

```js
person.firstName
```

Se tentarmos acessar a propriedade `'last-Name'` vai gerar um erro:

Dessa maneira:

```js
person.'last-Name';
```

Irá gerar esse erro:

```js
SyntaxError: Unexpected string
```

E dessa maneira:

```js
person.last - Name
```

Irá gerar esse erro:

```js
ReferenceError: Name is not defined
```

A notação por ponto não aceita strings ou identificadores que não são validos, para conseguir acessar essa propriedade iremos utilizar a notação por colchetes.


### Notação por colchetes (notação do tipo array)

Para utilizar a notação por colchetes iremos utilizar o nome do objeto com um par de colchetes `[]` e dentro dos colchetes iremos colocar o nome da propriedade entre aspas simples ou duplas, como no exemplo a seguir:

```js
nomeDoObjeto['NomeDaPropriedade']
```

Geralmente utilizamos essa notação quando o nome da propriedade que possui espaço ou possui identificadores inválidos como por exemplo o hífen `-`, a seguir veremos um exemplo:

Para acessar a propriedade `last-Name` do objeto `person`, utilize a expressão a seguir:

```js
person['last-Name']
```

---

## Criando objeto usando uma função

Podemos criar vários objetos similares usando uma função, no exemplo a seguir vamos criar objetos com nome, sobrenome e idade.

Esse tipo de função damos o nome de Factory Function

```js
function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoa('Rodrigo', 'Rodrigues', 38);
const pessoa2 = criarPessoa('Fernando', 'Fernandes', 48);

console.log(pessoa1.nome, pessoa2.nome); // saída: Rodrigo Fernando
```

Quando criamos funções e retornamos um objeto, se o parâmetro e a chave da propriedade do objeto possuírem o mesmo nome, não precisamos repeti-los, ao adicionar apenas uma vez o javascript irá entender que queremos atribuir o nome ao nome.

```js
function criarPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criarPessoa('Rodrigo', 'Rodrigues', 38);
const pessoa2 = criarPessoa('Fernando', 'Fernandes', 48);

console.log(pessoa1.nome, pessoa2.nome); // saída: Rodrigo Fernando
```

---
