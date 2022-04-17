# Object.defineProperty()

O método `Object.defineProperty()` define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

**Nota: O método `Object.defineProperty()` é usado apenas para uma propriedade por vez (Singular), caso queira usar em várias propriedades(Plural) use o método `Object.defineProperties()`**

Sintaxe:

```js
Object.defineProperty(objeto, propriedade, {descritor})
```

## Parâmetros do Método

* `objeto`: O objeto no qual será definida a propriedade.
* `propriedade`: O nome da propriedade que será definida ou modificada.
* `descritor` O descritor para a propriedade que será definida ou modificada.

## Propriedades do Descritor

* `enumerable`: Use `true` para que a chave seja visível externamente e `false` para que não seja visível (Essa propriedade por padrão é `false`).
* `value`: O valor da chave inserida no parâmetro do método.
* `writable`: Use `true`para que o valor da chave possa ser alterado usando um operador de atribuição e `false` para que isso não seja possível. (Essa propriedade por padrão é `false`).
* `configurable`: Use `true` para liberar a reconfiguração, alteração ou a exclusão da chave e `false` para que isso não seja possível.

* `get`: O método getter é usado para receber/mostrar o valor de uma propriedade.
* `set`: O método setter é usado para adicionar ou alterar o valor de uma propriedade.

## Exemplo 1

Vamos criar uma função construtora chamada Carro e nela vamos passar os parâmetros fabricante, modelo e ano em seguida vamos criar uma variável e atribuir o `new` e a invocação da função com alguns argumentos e por ultimo vamos imprimir os dados no console.

```js
function Carro(fabricante, modelo, ano){

}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro {}
```

### Adicionando o método `Object.defineProperty()`

Agora vamos adicionar o método `Object.defineProperty()` dentro da função e em seguida vamos adicionar as informações nos parâmetros, o primeiro será o objeto, então podemos usar o `this`, já que ele representa o objeto e em seguida vamos adicionar a propriedade, vamos adicionar a fabricante e para finalizar vamos imprimir os dados no console.

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro {}
```

A propriedade fabricante não foi exibida, vamos fazer essa alteração a seguir

### Adicionando a propriedade `enumerable`

Como vimos anteriormente, a propriedade `enumerable` serve para enumerar a chave da propriedade, ou seja, deixar ela visível ou invisível, para isso podemos usar `true` para torna-la visível ou `false` para deixa-la invisível (Padrão).

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro { fabricante: undefined }
```

Agora a chave foi mostrada, mas o valor está sendo mostrado como `undefined`, isso acontece porque não adicionamos o valor da propriedade, vamos fazer isso a seguir.

### Adicionando a propriedade `value`

Podemos usar a propriedade `value` para inserir o valor da propriedade que foi passada no parâmetro do método `Object.defineProperty()`. Esse valor pode ser qualquer tipo de dado, vamos usar o próprio parâmetro como o valor, para receber o valor do argumento desse parâmetro.

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro { fabricante: 'Chevrolet ' }
```

### Adicionando a propriedade `writable`

Podemos usar a propriedade `writable` com o valor boolean `true` permitir que o valor da chave possa ser alterado usando um operador de atribuição ou `false` para não permitir que o valor da chave possa ser alterado (Esse valor vem como padrão).

Vamos tentar alterar o valor da chave `fabricante`.

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,

    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

carro1.fabricante = 'Ford'

console.log(carro1); // saída: Carro { fabricante: 'Chevrolet ' }
```

Não foi possível fazer essa alteração porque por padrão a propriedade `writable` usa o seu valor como `false`, agora vamos adiciona-la com o valor `true`.

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,
        writable: true
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

carro1.fabricante = 'Ford'

console.log(carro1); // saída: Carro { fabricante: 'Ford' }
```

Agora conseguimos alterar o valor da chave `fabricante`.

### Adicionando a propriedade `configurable`

Podemos usar a propriedade `configurable` com o valor `true` para permitir que possa ser feita alterações nas configurações e com o valor `false` para travar as configurações feitas, ou seja, não permitir que as configurações sejam alteradas, também não irá permitir a exclusão da propriedade.

Vamos duplicar o conteúdo do método `Object.defineProperty` e fazer alterações no conteúdo do método que foi duplicado e adicionar a propriedade `configurable` como `true` no primeiro método.

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,
        writable: false,
        configurable: true
    });
    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: 'Nissan',
        writable: true,
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);
carro1.fabricante = 'Ford'
console.log(carro1); // saída: Carro { fabricante: 'Ford' }

```

Perceba que que no primeiro método a propriedade `writable` está como `false`, então o valor da propriedade não poderia ser alterado usando o operador de atribuição, mas na segunda vez que usamos o método, alteramos essa propriedade para `true` e com isso liberamos para que essa alteração possa ser feita.

Agora vamos trocar o valor da propriedade `configurable` para `false`

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,
        writable: true,
        configurable: false
    });
    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: 'Nissan',
        writable: true,
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);
carro1.fabricante = 'Ford'
console.log(carro1); // saída: TypeError: Cannot redefine property: fabricante
```

A propriedade `configurable` que está com o valor `false` não permitiu que essa reconfiguração fosse feita e gerou um erro.

Mas se todas as propriedades possuírem o mesmo valor o conteúdo da propriedade `value` poderá ser trocado, caso a propriedade `writable` estiver com o valor `true`:

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,
        writable: true,
        configurable: false
    });
    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: 'Nissan',
        writable: true,
        configurable: false
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro { fabricante: 'Nissan' }
```

## Criando uma nova propriedade usando o método `Object.defineProperty`

Para criar uma nova propriedade só precisamos passar o nome de uma propriedade que não existe como parâmetro para o método `Object.defineProperty`.

```js
function Carro(fabricante, modelo, ano){
    
    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,
    });

    Object.defineProperty(this, 'motor',{
        enumerable: true,
        value: '2JZ',
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro { fabricante: 'Chevrolet ', motor: '2JZ' }
```

Na segunda vez que usamos o método usamos um nome que não existia `motor`, então o método criou essa propriedade.

## Getter e Setter

Vamos usar esse código como exemplo:

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        value: fabricante,
        writable: false,
        configurable: false
    });
    Object.defineProperty(this, 'modelo',{
        enumerable: true,
        value: modelo,
        writable: true,
        configurable: false
    });
    Object.defineProperty(this, 'ano',{
        enumerable: true,
        value: ano,
        writable: true,
        configurable: false
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro { fabricante: 'Chevrolet ', modelo: 'Opala', ano: 1979 }
```

Vamos retirar as propriedades `value` e `writable` do `defineProperty` pois não faz sentido usa-las, pois vamos usar o getter e setter para trabalhar com a legibilidade e modificação dos valores.

Agora o código ficou assim:

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        configurable: false,
    });
    Object.defineProperty(this, 'modelo',{
        enumerable: true,
        configurable: false,
    });
    Object.defineProperty(this, 'ano',{
        enumerable: true,
        configurable: false,
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);
```

### Getter

O getter é usado para exibir/retornar o valor de uma propriedade, ele deverá ser usado junto de uma função.

A sintaxe do getter no método `defineProperty` é a seguinte:

```js
get: function() {
    return propriedadeQueSeraRetornada;
}
```

Vamos adicionar um getter para cada propriedade do exemplo:

```js
function Carro(fabricante, modelo, ano){

    Object.defineProperty(this, 'fabricante',{
        enumerable: true,
        configurable: false,
        get: function() {
            return fabricante;
        },
    });
    Object.defineProperty(this, 'modelo',{
        enumerable: true,
        configurable: false,
        get: function() {
            return modelo;
        },
    });
    Object.defineProperty(this, 'ano',{
        enumerable: true,
        configurable: false,
        get: function() {
            return ano;
        },
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);
```

Ao tentar exibir o objeto `carro1` veremos que os valores não serão exibidos:

```js
console.log(carro1); // saída: Carro { fabricante: [Getter], modelo: [Getter], ano: [Getter] }
```

Ao usar o getter a função passará a ser tratada como uma propriedade, então precisamos invocar o método sem usar os parênteses.

```js
console.log(carro1.fabricante); // saída: Chevrolet
console.log(carro1.modelo); // saída: Opala
console.log(carro1.ano); // saída: 1979
```
