
# Operadores Unários

São operadores que conseguem fazer cálculos usando apenas um valor

## `+` Unário Mais (Unary plus)

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

## `-` Unário Mais (Unary plus)

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

## `++` Incremento

Adiciona um ao seu operando, Podemos adicionar o incremento antes da variável e também podemos adicionar o incremento após a variável, vamos ver exemplo dessa duas maneiras.

### pre-incremento

Adicionando o incremento antes da variável, o valor será calculado e exibido nessa própria linha.

```js
let x = 10
console.log(++x) // saída: 11
```

### pós-incremento

Mas se adicionarmos o incremento após a variável o valor será atualizado na variável mas só será exibido na proxima execução da mesma.

```js
let x = 10
console.log(x++) // 10
// Mostrou 10 porque o valor da variável foi exibido primeiro e depois foi feito a soma.
// mas se chamarmos a variável (x) veremos que o valor foi atualizado
console.log(x) // 11
```

## `--` Decremento

Funciona praticamente igual ao incremento mas ao invés de adicionar um valor ao operando, ele retira um do operando e também pode ser adicionado antes ou após a variável.

### pre-decremento

```js
let x = 10
console.log(--x) // saída: 9
```

### pós-decremento

```js
let x = 10
console.log(x--) // 10

console.log(x) // 9
```
