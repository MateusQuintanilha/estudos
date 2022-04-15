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

* `get`:
* `set`:

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