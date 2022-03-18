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

### Calculando minutos, horas e dias em milissegundos
* 1s são 1000 milissegundos, então 1s é a mesma coisa que 1 * 1000
* 1min são 60s, então 1min é a mesma coisa que 60 * 1000
* 1h são 60 min, então 1h é a mesma coisa que 60 * 60 * 1000
* 1 dia são 24h. então 1 dia é a mesma coisa que 60 * 60 * 24 * 1000

### String de data

Podemos passar uma string como argumento:

```js
const data = new Date('March 17, 2022 16:13:23.700');
console.log(data); // saída: 2022-03-17T19:13:23.700Z
```

```js
const data = new Date('2022-03-17 16:13:23.700');
console.log(data); // saída: 2022-03-17T19:13:23.700Z
```

```js
const data = new Date('2022-03-17T16:13:23.700');
console.log(data); // saída: 2022-03-17T19:13:23.700Z
```

### Números

Podemos passar números como argumentos n a seguente ordem: ano, mes, dia, hora, minuto, segundo, milissegundo.

```js
const data = new Date(2022,2,17);
console.log(data); // saída: 2022-03-17T03:00:00.000Z
```

ou

```js
const data = new Date(2011,11,17,5,24,0);

console.log(data); // saída: 2011-12-17T07:24:00.000Z
```

## Métodos mais usados

### Converter a data em uma string legível

Usamos o método `toString()` para converte a data em uma string que facilita a leitura humana.

```js
const data = new Date('2022-03-17 16:13:23.700');
console.log(data); // saída: 2022-03-17T19:13:23.700Z

let dataEmString = data.toString();
console.log(dataEmString); // saída: Thu Mar 17 2022 16:13:23 GMT-0300 (Horário Padrão de Brasília)
```

### Dia do mês

Usamos o método `getDate()` para pegar o dia do mês. Retorna um valor inteiro entre 1 e 31. Não confundir com `getDay()` que retorna o dia da semana.

```js
const data = new Date('2022-03-17 16:13:23.700');
let diaDoMes = data.getDate();
console.log(diaDoMes); // saída: 17
```

### Dia da semana

Usamos o método `getDay()` para pegar o dia da semana. Retorna o dia da semana, inteiro entre 0 e 6 (0 para Domingo).

```js
const data = new Date('2022-03-17 16:13:23.700');
let diaDaSemana = data.getDay();
console.log(diaDaSemana); // saída: 4
```

### Mês

Usamos o método `getMonth()` para pegar o mês. Retorna um valor inteiro entre 0 e 11 (0 para Janeiro).

```js
const data = new Date('2022-03-17 16:13:23.700');
let mes = data.getMonth();
console.log(mes); // saída: 2
```

### Ano

Usamos o método `getFullYear()` para pegar o ano. Retorna o ano com 4 dígitos.

```js
const data = new Date('2022-03-17 16:13:23.700');
let ano = data.getFullYear();
console.log(ano); // saída: 2022
```

### Hora

Usamos o método `getHours()` para pegar a hora. Retorna um valor inteiro entre 0 e 23.

```js
const data = new Date('2022-03-17 16:13:23.700');
let hora = data.getHours();
console.log(hora); // saída: 16
```

### Minuto

Usamos o método `getMinutes()` para pegar os minutos. Retorna um valor inteiro entre 0 e 59.

```js
const data = new Date('2022-03-17 16:13:23.700');
let minuto = data.getMinutes();
console.log(minuto); // saída: 13
```

### Segundo

Usamos o método `getSeconds()` para pegar os segundos. Retorna um valor inteiro entre 0 e 59.

```js
const data = new Date('2022-03-17 16:13:23.700');
let segundos = data.getSeconds();
console.log(segundos); // saída: 23
```

### Milissegundo

Usamos o método `getMilliseconds()` para pegar os milissegundos. Retorna um valor inteiro entre 0 e 999.

```js
const data = new Date('2022-03-17 16:13:23.700');
let milissegundos = data.getMilliseconds();
console.log(milissegundos); // saída: 700
```

### Data Atual

Podemos usar o método `Date.now()` para pegar a data atual em milissegundos. Retorna os milissegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC até agora como um  Number.

```js
let dataAtual = Date.now()
console.log(); // saída: 1647543756616
```
