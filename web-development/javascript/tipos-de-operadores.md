# Tipos de Operadores

O JavaScript possui vários tipos de operadores, vamos começar essa lista com os operadores aritméticos.

## Operadores Aritméticos

Os operadores aritméticos são utilizados para fazer cálculos simples.

### `+`	Adição/soma

```js
let adicao = 100 + 100; // saída: 200
```

### `-`	Subtração

```js
let subtracao = 150 - 50; // saída: 100
```

### `*`	Multiplicação

```js
let multiplicacao = 100 * 10; // saída: 1000
```

### `/`	Divisão

```js
let divisao = 200 / 4; // saída: 50
```

### `**` Expoente

O primeiro valor sera multiplicado por ele mesmo por x vezes, no exemplo a seguir o valor 10 será multiplicado por ele mesmo 4 vezes, dando um resultado de 10.000

```js
let expoente = 10 ** 4; // saída: 10000
```

### `%`	Módulo

Irá retornar o resto da divisão, ex: temos 29 maçãs para dividir para 2 pessoas, quantas maçãs cada pessoa irá ter e quantas irão sobrar?
cada pessoa irá receber 14 maçãs e irá sobrar uma maçã.

```js
let modulo = 29 % 2; // saída: 1
```

## A ordem Importa

OS começam com multiplicação e divisão, depois vão para soma e subtração

```js
let calculo = 20 + 10 * 2; // saída: 40
```
nesse caso o calculo não será 20 + 10 e depois multiplica por 2,mas sim 10 * 2 + 20

Para priorizar uma parte do calculo utilizamos parenteses.

```js
let calculo = (20 + 10) * 2; // saída: 60
```
Agora irá calcular 20 + 10 e depois irá multiplicar por 2

---

## Operadores Unários
São operadores que conseguem fazer cálculos usando apenas um valor

### `+` Unário Mais (Unary plus)

Converte um operando em um número sem alterar seu valor, então se ele é positivo vai continuar sendo positivo e o mesmo vale caso ele seja um valor negativo.

Se tentarmos concatenar um valor em uma string com um valor do tipo number irá retornar a junção dos dois valores e não o calculo dos dois, como no exemplo a seguir.

```js
let x = '10';
let resultado = x + 10;
console.log(resultado); // saída: 1010
```

Mas se adicionarmos o `+` na frente da variável `x` no momento da concatenação irá converter o tipo da variável de string para number e será feito a soma dos dois valores.

```js
let x = '10';
let resultado = +x + 10;
console.log(resultado); // saída: 20
```

### `-` Unário Mais (Unary plus)

Converte um operando em um número e irá inverter o seu valor de positivo para negativo ou de negativo para positivo.

```js
let x = '10';
let resultado = -x;
console.log(resultado); // -10
```

No exemplo acima ele trocou o tipo string da variável `x` para number e converteu o valor de positivo para negativo.

```js
let x = '-10';
let resultado = -x
console.log(resultado); // 10
```

No exemplo acima ele trocou o tipo string da variável `x` para number e converteu o valor de negativo para positivo.

### `++` Incremento

Adiciona um ao seu operando, Podemos adicionar o incremento antes da variável e também podemos adicionar o incremento após a variável, vamos ver exemplo dessa duas maneiras.

#### pre-incremento

Adicionando o incremento antes da variável, o valor será calculado e exibido nessa própria linha.

```js
let x = 10
console.log(++x) // saída: 11
```

#### pós-incremento

Mas se adicionarmos o incremento após a variável o valor será atualizado na variável mas só será exibido na proxima execução da mesma.

```js
let x = 10
console.log(x++) // 10
// Mostrou 10 porque o valor da variável foi exibido primeiro e depois foi feito a soma.
// mas se chamarmos a variável (x) veremos que o valor foi atualizado
console.log(x) // 11
```

### `--` Decremento

Funciona praticamente igual ao incremento mas ao invés de adicionar um valor ao operando, ele retira um do operando e também pode ser adicionado antes ou após a variável.

#### pre-decremento

```js
let x = 10
console.log(--x) // saída: 9
```

#### pós-decremento

```js
let x = 10
console.log(x--) // 10

console.log(x) // 9
```

---

## Operadores de Atribuições

Um operador de atribuição atribui um valor ao operando à sua esquerda baseado no valor do operando à direita. O operador de atribuição básico é o igual (=), que atribui o valor do operando à direita ao operando à esquerda. Isto é, x = y atribui o valor de y a x.

|  Símbolo  |   é Igual a   |   também é igual a    |
|   :--:    |   :--:        |         :--:          |
|   `=`     |   `x = y`     |       `x = y`         |
|   `+=`    |   `x += y`    |       `x = x + y`     |
|   `-=`    |   `x -= y`    |       `x = x - y`     |
|   `*=`    |   `x *= y`    |       `x = x * y`     |
|   `/=`    |   `x /= y`    |       `x = x / y`     |
|   `%=`    |   `x %= y`    |       `x = x % y`     |

---
