# Date()

O objeto Date() é uma função construtora que usamos para criar uma instância que irá representar um momento no tempo, como uma data ou hora. Objetos Date são baseados no valor de tempo em milissegundos desde 1º de Janeiro de 1970 00:00:00 (UTC). Mas dependendo do fuso horário esse valor pode mudar, como por exemplo aqui no Brasil que é o (UTC-03:00), com o UTC sendo -03:00 essa data de 1970 passa a ser 31 de Dezembro de 1969 21:00:00 (UTC-03:00).

## Usando o objeto Date()

O objeto Date() é uma função construtora e para começar a trabalhar com ele precisamos instancia-lo, para instancia-lo precisamos começar usando a palavra reservada new em seguida usamos o nome do objeto com a primeira letra em maiúsculo.

Se usarmos o objeto Date() sem passar argumentos ele irá retornar a a data e a hora do computador no momento em que o script foi executado.

Sintaxe:

```js
const dataHoje = new Date();
console.log(dataHoje); // saída: 2022-03-17T16:13:23.005Z
```

Agora vamos ver alguns dos argumentos que podemos passar no Date();

* Todos os argumentos com exceção do string_de_data devem ser passados como tipo numérico.
* Com relação ao argumento mês, o número 0 representa Janeiro e o 11 representa Dezembro.
* Se não for passada a hora, o objeto iniciará com a hora 00:00:00.

```js
new Date(); // data atual
new Date(milissegundos); // data em milissegundos
new Date(ano, mes, dia, hora, minuto, segundo, milissegundo); // data em números, cortamos o 0 a esquerda.
new Date(ano, mes); // o máximo que conseguimos simplificar é ano e mês.
new Date(string_de_data) // data em formato de string
```

### Milissegundos

Podemos passar o calculo do tempo em milissegundos, se passarmos 0 será mostrado o valor 1º de Janeiro de 1970 00:00:00 (UTC). Caso queira acessar uma data anterior a essa, utilize valores negativos

```js
const dataInicio = new Date(0);
console.log(dataInicio); // saída: 1970-01-01T00:00:00.000Z
```

Podemos usar valores negativos

```js
const data = new Date(-400000000000);

console.log(data); // saída: 1843-03-31T16:53:20.000Z
```
