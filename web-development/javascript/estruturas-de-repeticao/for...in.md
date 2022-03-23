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
