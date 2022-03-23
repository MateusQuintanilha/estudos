# for...of

O (for...of) cria um loop de iteração sobre objetos iteráveis como:

* Objetos construídos com Array, String, Map, Set,...
* Objetos semelhantes a Arrays, como argumentos ou `NodeList`.
* Objetos definidos pelo usuário que implementam o protocolo iterador.

Ele irá retornar o valor do elemento no lugar do índice

Vamos criar uma variável que contem uma string para usar como exemplo:

```js
const nome = 'Fernando Fernandes';
```

Agora vamos criar um exemplo com o for clássico:

```js
const nome = 'Fernando Fernandes';

for (let i = 0; i < nome.length; i++) {
console.log(i); // saída 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
}
```

Podemos ver que o for clássico retornou o índice de cada caractere da variável nome, para retornar o cada elemento da variável precisamos usar o nome da variável e usar a notação por colchetes com o índice para conseguir acessar o valor do elemento:

```js
const nome = 'Fernando Fernandes';

for (let i = 0; i < nome.length; i++) {
console.log(nome[i]); // saída: F e r n a n d o  F e r n a n d e s
}
```

O mesmo vale para o for...in, para conseguir acessar o valor do elemento precisamos usar o nome da variável e usar a notação por colchetes com o índice para conseguir acessar o valor do elemento:

```js
const nome = 'Fernando Fernandes';

for (const i in nome) {
    console.log(i); // saída 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
    console.log(nome[i]); // saída: F e r n a n d o  F e r n a n d e s
}
```

Já com o for...of isso não é necessário, pois o for...of retorna o valor do elemento daquele índice e não o valor do índice em sí:

```js
const nome = 'Fernando Fernandes';

for (const i of nome) {
    console.log(i); // saída: F e r n a n d o  F e r n a n d e s
}
```

Agora vamos usar um array com nome de animais como exemplo:

```js
let animais = ['Gato', 'Cachorro', 'Cavalo', 'Porco', 'Galinha', 'Pato']

for(const animal of animais) {
 console.log(animal); // saída: Gato Cachorro Cavalo Porco Galinha Pato
}
```
