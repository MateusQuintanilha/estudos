# for...in

O `for...in` é usado para ler os índices de um array ou as chaves de um objeto.

## Usando for...in em um array

Ao usar o for...in em um array ele irá ler e retornar o índice do array, vamos criar um o nome de algumas frutas para usar como exemplo:

```js
    // índice       0         1       2        3       4
const frutas = ['Morango', 'Maçã', 'Pera', 'Banana', 'Uva'];
```

Usando o `for` clássico para imprimir no console o índice e conteúdo de cada elemento de um array ficaria assim:

```js
const frutas = ['Morango', 'Maçã', 'Pera', 'Banana', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i);  // saída: 0 1 2 3 4
    console.log(frutas[i]); // saída: Morango Maçã Pera Banana Uva
}
```

Usando o `for...in`o código ficará assim:

```js
for (const i in frutas) {
    console.log(i); // saída: 0 1 2 3 4
    console.log(frutas[i]); // saída: Morango Maçã Pera Banana Uva
}
```

A diferença do `for` clássico para o `for...in` é que no clássico precisamos criar uma variável para fazer a contagem e depois verificar a quantidade de itens com o length, já o for...in lê o índice diretamente, então não precisamos criar uma variável para fazer essa contagem.

### Mas tome cuidado ao utilizar o for...in em array, pois ele pode retornar valores diferentes do esperado

Vamos fazer um teste com o for clássico:

```js
Array.prototype.foo = 1;
let testandoArray = [];
testandoArray[3] = "abc";

let contador = 0;
for (let i = 0; i < testandoArray.length; i++) {
    console.log(contador + ":", testandoArray[i]);
    contador++;
} // saída:   0: undefined  1: undefined  2: undefined  3: abc
```

Foi mostrado 4 resultados:  
0: undefined  
1: undefined  
2: undefined  
3: abc

Agora usar o mesmo exemplo mas usando o for...in:

```js
Array.prototype.foo = 1;
let testandoArray = [];
testandoArray[3] = "abc";

contador = 0;
for (let item in testandoArray) {
    console.log(contador + ":", item);
    contador++;
} // saída:     0: 3  1: foo
```

Foi mostrado 2 resultados:  
0: 3  
1: foo  
