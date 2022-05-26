# Herança com Class

As classes JavaScript também suportam o recurso de herança, para conseguir usar a herança na hora da criação da classe filha precisamos usar a palavra-chave `extends` após o seu nome e em seguida adicionar o nome da classe pai (a classe filha irá herdar todos os recursos da classe pai).

## Criando a classe pai

Vamos criar uma classe chama de Dispositivo onde ela irá precisar de um parâmetro nome e também irá possuir uma propriedade chamada de ligado que será iniciada como `false`, essa classe irá possuir dois métodos, o primeiro chamado ligar que irá trocar o valor da propriedade ligado para true, e se caso o valor dessa propriedade já for true irá retornar uma mensagem avisando que o dispositivo já está ligado e também terá um método chamado desligar que fará o inverso do método ligar.

```js
class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            return console.log(`${this.nome} já está ligado!`);
        }
        
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado) {
            return console.log(`${this.nome} já está desligado!`);
        }
        
        this.ligado = false;
    }
}
```

## Criando a classe filha Smartphone

Agora vamos criar a classe filha, essa classe terá o nome de Smartphone, inicialmente vamos criar uma classe vazia, pois só vamos usar os recursos da classe pai.

```js
class Smartphone extends Dispositivo {};
```

Criamos a classe `Smartphone` e usamos a palavra-chave `extends` em seguida adicionamos o nome da classe de onde os recursos serão herdados.

## Criando uma instância da classe Smartphone

Vamos criar uma instância dessa classe para ver o resultado:

```js
const s1 = new Smartphone('Samsung Galaxy S20');
console.log(s1); // saída: Smartphone { nome: 'Samsung Galaxy S20', ligado: false }
```

Agora se essa classe filha precisar de alguma propriedade nova precisamos criar o seu constructor e para isso precisamos trazer os parâmetros que serão necessários na classe filha, para fazer isso iremos usar a função `super` no ligar do `this`.

Nesse exemplo só iremos precisar usar o `super` no parâmetro nome.

```js
class Smartphone extends Dispositivo {
    constructor(nome, modelo, cor) {
        super(nome);
        this.modelo = modelo;
        this.cor = cor;
    }
};
```

Agora vamos refazer a instância `s1`:

```js
const s1 = new Smartphone('Samsung', 'Galaxy S20', 'Preto');
console.log(s1); /* saída: 
    Smartphone {
    nome: 'Samsung',
    ligado: false,
    modelo: 'Galaxy S20',
    cor: 'Preto'
    }
*/
```
