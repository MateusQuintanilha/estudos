# Object.create

O método `Object.create()` cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.

Sintaxe:

```js
Object.create(proto, propertiesObject)
```

## Parâmetros

* `proto` - O objeto que deve ser o protótipo do objeto recém-criado.
* `propertiesObject` (opcional) - Um objeto cujas próprias propriedades enumeráveis ​​especificam descritores de propriedade a serem adicionados ao objeto recém-criado. Essas propriedades correspondem ao segundo argumento de Object.defineProperties().

## Valor de Retorno do `Object.create()`

* Retorna um novo objeto com o objeto de protótipo especificado.

**Nota: Será lançada uma exceção `typeError` se o proto não for `null` ou `object`.**
