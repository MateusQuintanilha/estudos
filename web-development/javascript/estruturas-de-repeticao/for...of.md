# for...of

A instrução (for...of) é uma forma um pouco mais nova e mais elegante de se percorrer um objeto iterativo (Array, Map, Set) e executar um bloco de código.

Essa instrução cria um loop assim como o for, porém à diferença são os parâmetros passados para a função, o (for...of) sempre percorrerá o array por completo, sem você precisar fazer uma verificação de tamanho do array, ou colocar alguma condição específica.

```js
let animais = ['Gato', 'Cachorro', 'Cavalo', 'Porco', 'Galinha', 'Pato']
for(const animal of animais) {
 console.log(animal)
} // saída: Gato Cachorro Cavalo Porco Galinha Pato
```

Essa forma tem uma escrita mais simples e mais limpa, e possui o mesmo resultado do for convencional.
Repare que o primeiro parâmetro “animal” receberá todas as posições do array, uma de cada vez, primeiro foi o 'Gato', depois o 'Cachorro' e assim foi até chegar no 'Pato', ele sempre receberá todas as posições, ao final de todas instruções para uma posição, ele pula para a próxima posição e faz tudo de novo.
