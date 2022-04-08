# Função Construtora (Constructor Function)

Criar um objeto é bem tranquilo:

```js
produto1 = {
    type: 'Processador',
    mark: 'AMD',
    model: 'Ryzen 5 5600G',
    price: 1608.05,
    cashDiscount() {
        const priceFull = this.price;
        const discountPercentage = 0.13;
        return {
            discount: priceFull * discountPercentage,
            discountPrice: priceFull - priceFull * discountPercentage
        };
    },
};
```

E para fazer um segundo produto com o mesmo cálculo de desconto?

```js
produto2 = {
    type: 'Processador',
    mark: 'AMD',
    model: 'Ryzen 5 5600X',
    price: 1665.52,
    cashDiscount() {
        const priceFull = this.price;
        const discountPercentage = 0.13;
        return {
            discount: priceFull * discountPercentage,
            discountPrice: priceFull - priceFull * discountPercentage
        };
    },
};
```

Perceba que estamos repetindo exatamente as mesmas chaves e o mesmo código do método dentro do objeto, só estamos alterando alguns valores. Agora imagine que precisamos fazer isso para 100 produtos, o arquivo ficaria gigante e a maioria do código seria repetido e correndo o risco de digitá-los errados.

Para resolver esse problema podemos usar uma função construtora. Ela será responsável por criar um molde do objeto que desejamos, então ela irá conter todas as propriedades que esse objeto irá precisar ter.

A função construtora é basicamente uma função normal, mas precisamos ficar atentos a algumas coisas:

* Por boas praticas usamos a primeira letra do nome de una função construtora seja maiúscula.
* Precisamos usar a palavra `this` na hora de definir as propriedades para referenciar ao contexto do objeto criado.
* Precisamos usar o operador `new` para instanciar um novo objeto.

```js
function Produto(type, mark, model, price) {
    this.type = type;
    this.mark = mark;
    this.model = model;
    this.price = price;
    this.cashDiscount = function() {
        const priceFull = this.price;
        const discountPercentage = 0.13;
        return {
            discount: priceFull * discountPercentage,
            discountPrice: priceFull - priceFull * discountPercentage
        };
    }
}
```

## Instanciando um novo Produto

Agora que a estrutura foi criada, vamos instancias os dois produtos que usamos como exemplo, para fazer isso iremos usar o operador `new`. ele é responsável por criar uma nova instancia de um tipo de objeto, ou seja, ele irá criar um objeto com os dados que serão passados na função produto.

Vamos instanciar o produto1, para fazer isso, vamos criar uma variável com o nome produto1 e atribuir a ela o operador `new` seguido da função Produto e dentro dos parênteses iremos passar as propriedades do produto como argumento:

```js
const produto1 = new Produto('Processador', 'AMD', 'Ryzen 5 5600G', 1608.05);
```

Agora vamos instanciar o produto2:

```js
const produto2 = new Produto('Processador', 'AMD', 'Ryzen 5 5600X', 1665.52);
```

Viu como ficou mais fácil? Agora podemos criar vários produtos de uma maneira mais simples.