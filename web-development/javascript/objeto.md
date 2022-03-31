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

## Editando dados de um objeto

Podemos alterar o valor de uma propriedade, adicionar uma nova uma propriedade, excluir uma propriedade e verificar se uma propriedade existe ou não. Vamos ver sobre cada um a seguir:

### Alterando o valor de uma propriedade

Para alterar o valor de uma propriedade, utilize o nome do objeto, a notação, o nome da propriedade que deseja alterar e utilize o operador de atribuição com o novo valor desejado, Exemplo:

```js
nomeDoObjeto.nomeDaPropriedade = novoValorDaPropriedade
```

Vamos continuar utilizando o objeto contato como exemplo:

```js
let contato = {
  nome: 'Irineu',
  email: 'irineuvocenaosabenemeu@irineu.com',
  tel: '(00)-0-0000-0000'
}
```

Vamos alterar a propriedade ***tel***, vamos trocar todos os dígitos ***0*** por ***9***

```js
contato.tel = '(99)-9-9999-9999'
```

Resultado:

```js
console.log(contato.tel) // saída: (99)-9-9999-9999
```

Se tentar acessar uma propriedade que não existe resultará em `undefined`, como no exemplo a seguir:

```js
console.log(contato.sobreNome) // saída: undefined
```

### Adicionando uma nova propriedade em um objeto

Para criar uma nova propriedade iremos usar o nome do objeto, a notação, o nome da nova propriedade em seguida iremos atribuir um valor para a nova propriedade, como no exemplo a seguir:

```js
nomeDoObjeto.NomeDoNovoAtributo = ValorDoNovoAtributo
```

Iremos adicionar a propriedade instagram para o objeto contato.

```js
contato.instagram = '@irineuvocenaosabe'
```

Resultado:

```js
console.log(contato)
/* saída:
 *  {
 *    nome: 'Irineu',
 *    email: 'irineuvocenaosabenemeu@gmail.com',
 *    tel: '(99)-9-9999-9999',
 *    instagram: '@irineuvocenaosabe'
 *  }
 */
```

### Excluir uma propriedade de um objeto

Para excluir uma propriedade de um objeto, use o operador `delete`:

```js
delete.NomeDoObjeto.NomeDaPropriedade
```

Vamos continuar utilizando o objeto do exemplo anterior, Vamos excluir a propriedade instagram do objeto contato:

```js
delete contato.instagram
```

Resultado:

```js
console.log(contato)
/* saída:
 *  {
 *    nome: 'Irineu',
 *    email: 'irineuvocenaosabenemeu@gmail.com',
 *    tel: '(99)-9-9999-9999',
 *  }
 */
```

### Verificando se uma propriedade existe

Utilizamos o operador `in` para verificar se uma propriedade existe em um objeto:

```js
nomeDaPropriedade in nomeDoObjeto
```

Vamos verificar se as propriedades ***tel*** e ***instagram*** existem no objeto ***contato***:

```js
'tel' in contato
'instagram' in contato
```

Resultado:

```js
console.log('tel' in contato) // saída: true
console.log('instagram' in contato) // saída: false
```

### Iterar sobre um objeto usando loop for...in

Vamos imprimir no console todos os dados do objeto contato:

```js
for (const propriedade in contato) {
  console.log(contato[propriedade])
}
```

Resultado:

```js
Irineu
irineuvocenaosabenemeu@irineu.com
(00)-0-0000-0000
```

---

## Métodos

Um método é uma função associada a um objeto, ou, uma função que é valor de uma propriedade de um objeto. Exemplo:

```js
let nomeDoObjeto = {
  nomeDoMetado: function (parametros) {
    // ... faça algo
  }
}
```

Para chamar o método no contexto do objeto, podemos fazer da seguinte forma:

```js
nomeDoObjeto.nomeDoMetado(argumentos)
```

Vamos utilizar um personagem fictício como exemplo:

```js
let personagemFicticio = {
  filme: 'Falcão: o campeão dos campeões',
  nome: 'Lincoln',
  sobrenome: 'Falcão',
  profissao: 'Caminhoneiro',
  interesses: ['Caminhão', 'Quedas de Braço']
}
```

Vamos criar um método que retorne a frase ***Virando o boné***.

```js
let personagemFicticio = {
  filme: 'Falcão: o campeão dos campeões',
  nome: 'Lincoln',
  sobrenome: 'Falcão',
  profissao: 'Caminhoneiro',
  interesses: ['Caminhão', 'Quedas de Braço'],
  virandoBone: function () {
    console.log('Virando o boné')
  }
}
```

Vamos chamar o método e ver qual foi o resultado.

```js
personagemFicticio.frase()
```

Resultado:

Virando o boné

### Adicionando uma função externa no objeto

Também podemos criar a função fora do objeto e depois atribuir a função a uma propriedade do objeto.

```js
nomeDoObjeto.nomeDaPropriedade = nomeDaFuncao
```

```js
let personagemFicticio = {
  filme: 'Falcão: o campeão dos campeões',
  nome: 'Lincoln',
  sobrenome: 'Falcão',
  profissao: 'Caminhoneiro',
  interesses: ['Caminhão', 'Quedas de Braço']
}

function virandoBone() {
  console.log('Virando o boné')
}
```

Podemos adicionar em uma propriedade existente, ou criar uma nova, vamos criar em uma nova propriedade com o mesmo nome da função:

```js
personagemFicticio.virandoBone = virandoBone
```

Vamos chamar a função e ver o resultado:

```js
personagemFicticio.virandoBone() // saída: Virando o boné
```

Também podemos criar uma propriedade com o nome diferente:

```js
personagemFicticio.chapeu = virandoBone
```

Vamos chamar a função, mas lembre-se que devemos utilizar o nome da propriedade e não da função:

```js
personagemFicticio.chapeu() // saída: Virando o boné
```

### Método Abreviado

Podemos utilizar o método abreviado que surgiu na versão ES6, essa forma de escrita pode tornar o código mais curto:

Método usando a sintaxe literal:

```js
let personagemFicticio = {
  filme: 'Falcão: o campeão dos campeões',
  nome: 'Lincoln',
  sobrenome: 'Falcão',
  profissao: 'Caminhoneiro',
  interesses: ['Caminhão', 'Quedas de Braço'],
  virandoBone: function () {
    console.log('Virando o boné')
  }
}
```

Método usando a sintaxe abreviado:

```js
let personagemFicticio = {
  filme: 'Falcão: o campeão dos campeões',
  nome: 'Lincoln',
  sobrenome: 'Falcão',
  profissao: 'Caminhoneiro',
  interesses: ['Caminhão', 'Quedas de Braço'],
  virandoBone: function () {
    console.log('Virando o boné')
  }
}
```

### O valor `this`

Normalmente os métodos precisam acessar os dados armazenado no objeto, Por exemplo, você pode desenvolver um método que retorne o nome completo do ***personagemFicticio***, concatenando ***nome*** e ***sobrenome***.

Dentro do método, o valor `this` faz referência ao objeto que contém o método, então podemos acessar uma propriedade do objeto usando a notação por ponto.

```js
this.nomeDaPropriedade
```

Vamos utilizar o objeto anterior como exemplo e vamos fazer um método que retorne o nome completo.

```js
let personagemFicticio = {
  filme: 'Falcão: o campeão dos campeões',
  nome: 'Lincoln',
  sobrenome: 'Falcão',
  profissao: 'Caminhoneiro',
  interesses: ['Caminhão', 'Quedas de Braço'],
  virandoBone: function () {
    console.log('Virando o boné')
  },
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  }

}
```

Vamos chamar a função usando um console.log para imprimir o valor no console:

```js
console.log(personagemFicticio.nomeCompleto()) // saída: Lincoln Falcão
```
