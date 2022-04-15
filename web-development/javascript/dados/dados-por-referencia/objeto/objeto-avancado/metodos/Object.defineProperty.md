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