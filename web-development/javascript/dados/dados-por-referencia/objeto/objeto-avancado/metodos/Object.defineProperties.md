# Object.defineProperties

O método `Object.defineProperties()` define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

**Nota: O método `Object.defineProperty()` é usado apenas para uma propriedade por vez (Singular), caso queira usar em várias propriedades(Plural) use o método `Object.defineProperties()`**

Sintaxe:

```js
Object.defineProperty(objeto, {
    propriedade: {descritor}
});
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

**Caso queira ver Exemplos sobre cada propriedade do descritor olhe no arquivo do método `Object.defineProperty`**

## Exemplo 1

Vamos criar uma função construtora chamada Carro e nela vamos passar os parâmetros fabricante, modelo e ano em seguida vamos criar uma variável e atribuir o `new` e a invocação da função com alguns argumentos e por ultimo vamos imprimir os dados no console.

```js
function Carro(fabricante, modelo, ano){

}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro {}
```

### Adicionando todas as propriedades no método `Object.defineProperties`

```js
function Carro(fabricante, modelo, ano){
    Object.defineProperties(this, {
        fabricante:{
            enumerable: true,
            value: fabricante
        },
        'modelo':{
            enumerable: true,
            value: modelo
        },
        "ano":{
            enumerable: true,
            value: ano
        },
        motor:{
            enumerable: true,
            value: '2JZ'
        },
    });
}

const carro1 = new Carro('Chevrolet ', 'Opala', 1979);

console.log(carro1); // saída: Carro { fabricante: 'Chevrolet ', modelo: 'Opala', ano: 1979, motor: '2JZ' }
```

Podemos adicionar todas as propriedades em um único método, podemos adicionar as propriedades usando o nome sem aspas ou com aspas simples ou duplas e também podemos criar uma nova propriedade.
