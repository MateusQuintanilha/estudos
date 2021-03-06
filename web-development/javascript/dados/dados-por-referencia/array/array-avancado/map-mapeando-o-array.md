# Mapeando o array

O método `map()` é usado para fazer a leitura dos elementos do array em busca de um valor de referência passado por meio de uma função callback, essa função de callback poderá retornar qualquer valor e ao final o método `map()` criará um novo array, mas cuidado pois esse método também poderá modificar o array que está sendo percorrido.

Sintaxe:

```js
array.map(callback, thisContext);

function callback(valorAtual, indexAtual, arrayPercorrida) {
    
}
```

## Parâmetros do método map()

O método `map()` possui dois parâmetros:

```js
array.map(callback, thisContext);
```

* `callback` é obrigatório, é uma função que será executada para cada elemento no array original.
* `thisContext` é opcional, ele é um método iterativo no qual podemos passar valores que poderão ser referenciados usando a palavra reservada `this` dentro da função de callback.

## Parâmetros da função de callback

A função callback possui 3 parâmetros:

```js
function callback(valorAtual, indexAtual, arrayPercorrido) {}
```

* `valorAtual` é obrigatório e representa o elemento que está sendo percorrido no momento pela função de callback.
* `indexAtual` é opcional e representa o índice do elemento que está sendo percorrido no momento pela função de callback.
* `arrayPercorrido` é opcional e representa o próprio array que está sendo percorrido.

**É importante lembrar que o método `map()` poderá modifica o array percorrido e também retorna um novo array**

## Exemplos de usos do método `map()`

### 1º Exemplo

Vamos criar um array com 10 valores aleatórios que será usado como base para o exemplos:

```js
const valores = [5, 10, 7, 32, 65, 75, 234, 742, 34, 6];
```

Em seguida vamos usar o método `map()` para alterar os resultados e retornar o valor de cada elemento do array com o dobro do valor:

#### Usando uma função literal

```js
const valoresEmDobro = valores.map(callback);

function callback(valorAtual) {
    return valorAtual * 2;
}

console.log(valoresEmDobro); // saída: [10, 20, 14, 64, 130, 150, 68, 84, 68,  12]
```

#### Usando uma função anônima

```js
const valoresEmDobro = valores.map(function(valorAtual) {
    return valorAtual * 2;
});

console.log(valoresEmDobro); // saída: [10, 20, 14, 64, 130, 150, 68, 84, 68,  12]
```

#### Usando uma arrow function

```js
const valoresEmDobro = valores.map((valorAtual) => {
    return valorAtual * 2;
});

console.log(valoresEmDobro); // saída: [10, 20, 14, 64, 130, 150, 68, 84, 68,  12]
```

#### Simplificando a arrow function

Como estamos usando apenas um parâmetro na arrow function podemos retirar os parênteses:

```js
const valoresEmDobro = valores.map(valorAtual => {
    return valorAtual * 2;
});

console.log(valoresEmDobro); // saída: [10, 20, 14, 64, 130, 150, 68, 84, 68,  12]
```

E como só possuímos uma linha de código dentro da arrow function podemos retirar as chaves e a palavra return:

```js
const valoresEmDobro = valores.map(valorAtual => valorAtual * 2);

console.log(valoresEmDobro); // saída: [10, 20, 14, 64, 130, 150, 68, 84, 68,  12]
```

#### Outros valores

Também podemos adicionar outros tipos de dados nesse retorno, imagine que esse valoresEmDobro são em reais, podemos adicionar o R$ antes de cada valor:

```js
const valoresEmDobro = valores.map(valorAtual => `R$ ${valorAtual * 2}`);

console.log(valoresEmDobro);

/* saída:
    [
        'R$ 10',  'R$ 20',
        'R$ 14',  'R$ 64',
        'R$ 130', 'R$ 150',
        'R$ 68',  'R$ 84',
        'R$ 68',  'R$ 12'
    ]
*/
```

### 2º Exemplo (Mostrando Exemplo que altera o Array que está sendo percorrido)

Agora vamos criar um array que irá conter objetos, nesse objeto vamos ter nome, idade, email que será usado como base para os exemplos.

```js
const pessoas = [
    {nome: 'Earl Briggs', idade: 28, email: 'briggs@email.com'},
    {nome: 'Marvin Weber', idade: 23, email: 'weber@email.com'},
    {nome: 'Kyle Walsh', idade: 52, email: 'walsh@outroemail.com'}
];
```

#### Retornar apenas o nome de cada pessoa

```js
const nomes = pessoas.map(obj => obj.nome);

console.log(nomes);

/* saída:
    [
        'Earl Briggs',
        'Marvin Weber',
        'Kyle Walsh'
    ]
*/
```

#### Remover o email e retornar nome e idade de cada pessoa

```js
const deleteEmail = pessoas.map(obj => {
    delete obj.email;

    return obj;
});

console.log(deleteEmail);
/* saída:
    [
        { nome: 'Earl Briggs', idade: 28 },
        { nome: 'Marvin Weber', idade: 23 },
        { nome: 'Kyle Walsh', idade: 52 }
    ]
*/
```

Mas temos um problema, ao deletar o email também deletamos ele no array que está sendo percorrido, vamos imprimir o array que está sendo percorrido para ver:

```js
console.log(pessoas);
/* saída:
    [
        { nome: 'Earl Briggs', idade: 28 },
        { nome: 'Marvin Weber', idade: 23 },
        { nome: 'Kyle Walsh', idade: 52 }
    ]
*/
```

Caso o desejado seja apagar os dados no array percorrido então tudo certo, mas se esse é um comportamento não desejado podemos criar um novo objeto dentro da callback e atribuir os objetos que estão dentro do array a ser percorrido usando o operador spread `...`.

```js
const deleteEmail = pessoas.map(obj => {
    const newObj = {...obj};
    delete newObj.email;

    return newObj;
});

console.log(deleteEmail);
/* saída:
    [
        { nome: 'Earl Briggs', idade: 28 },
        { nome: 'Marvin Weber', idade: 23 },
        { nome: 'Kyle Walsh', idade: 52 }
    ]
*/
```

Agora podemos imprimir os dados do array que está sendo percorrido e veremos que nada foi alterado nele:

```js
console.log(pessoas);
/* saída:
    [
        { nome: 'Earl Briggs', idade: 28, email: 'briggs@email.com' },
        { nome: 'Marvin Weber', idade: 23, email: 'weber@email.com' },
        { nome: 'Kyle Walsh', idade: 52, email: 'walsh@outroemail.com' }
    ]
*/
```


#### Retornar apenas o nome e email de cada pessoa

Para retornar apenas o nome e email podemos deletar a idade igual fizemos com o email no exemplo anterior ou criar um novo objeto e atribuir a ele apenas o nome e o email:

```js
const nomeEmail = pessoas.map(obj => {
    return {nome: obj.nome, email:obj.email}
});

console.log(nomeEmail);
/* saída:
    [
        { nome: 'Earl Briggs', email: 'briggs@email.com' },
        { nome: 'Marvin Weber', email: 'weber@email.com' },
        { nome: 'Kyle Walsh', email: 'walsh@outroemail.com' }
    ]
*/
```

Caso tente simplificar a arrow function irá gerar um problema porque a arrow function irá reconhecer as chaves do objeto como sendo as chaves da function e não do objeto:

```js
const nomeEmail = pessoas.map(obj => {nome: obj.nome, email:obj.email});

console.log(nomeEmail); // saída: SyntaxError: Unexpected token ':'
```

para resolver esse problema só precisamos envolver o objeto com parênteses:

```js
const nomeEmail = pessoas.map(obj => ({nome: obj.nome, email:obj.email}));

console.log(nomeEmail);
/* saída:
    [
        { nome: 'Earl Briggs', email: 'briggs@email.com' },
        { nome: 'Marvin Weber', email: 'weber@email.com' },
        { nome: 'Kyle Walsh', email: 'walsh@outroemail.com' }
    ]
*/
```
