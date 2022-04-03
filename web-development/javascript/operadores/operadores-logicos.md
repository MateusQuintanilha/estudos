# Operadores Lógicos

O JavaScript fornece esses operadores lógicos.

## `&&` AND

O operador lógico E utiliza dois sinais tironiano também conhecido como ‘e’ comercial (&&) como símbolo, possui a função de verificar e comparar se duas ou mais expressões são verdadeiras, se as duas forem verdadeiras  irá retornar (true) e se uma ou ambas forem falsas irá retornar (false).

Se ambos os valores forem (true) ele irá retornar o último valor verificado. Se algum valor for (false) ele irá retornar o mesmo e não irá continuar a verificar os próximos.

```js
let teste = true && true; // true
let teste = true && false; // false
let teste = false && true; // false
let teste = 'Gato' && 'Cão'; // 'Cão'
let teste = (5 - 5) && (5 + 5); // 0
let teste = 'Gato' && false; // false
let teste = (5 >= 5) && (3 < 6); // true
```

## `||` OR

O operador lógico OU utiliza duas barras vertical (||) como símbolo e possui a função de comprar duas expressões e se uma ou as duas for verdadeira irá retornar (true), agora se as duas forem falsas irá retornar (false)

```js
let teste = true || true; // true
let teste = true || false; // true
let teste = false || true; // true
let teste = false || false; // false
let teste = 'Gato' || 'Cão'; // Gato
let teste = (5 - 5) || (5 + 5); // 10
let teste = 'Gato' || false; // Gato
let teste = (5 >= 5) || (3 < 6); // true
```

Retorna o primeiro valor (true) que encontrar

## `!` NOT

O operador (!), irá trocar o valor de uma operação boolean. Ou seja, (!true) o valor true agora passa a valer (false)

```js
if(!true) // false
if(!false) // true
```

Você pode utilizar o (!!) para verificar se uma expressão é true ou false
