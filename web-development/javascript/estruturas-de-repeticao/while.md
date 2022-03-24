# while

A instrução (while) cria um loop que executa um bloco de código enquanto uma condição de teste for validada como (true). Ela é muito utilizada quando não se tem noção de quantas vezes se precisa executar um código.

sintaxe:

```js
while(condicao) {
 // Conteúdo e iteração
}
```

Vamos fazer alguns exemplos simples para entender o seu funcionamento:

Esse exemplo irá contar de 0 a 5

```js
let contador = 0
while(contador <= 5) {
 console.log(contador)
 ++contador
} // saída: 0 1 2 3 4 5
```

Esse exemplo irá gerar 6 números aleatórios

```js
let contador = 0
while(contador <= 5) {
 console.log(Math.round(Math.random() * 10 ))
 ++contador
} // Resultado: irá gerar 6 resultados aleatórios
```

Agora vamos fazer um exemplo mais "real", nesse exemplo vamos criar um função que sorteia um número aleatório entre 0 e 20, e queremos saber quantas vezes será necessário para chegar no valor 10:

```js
function random(min, max) {
    const numberRandom = Math.random() * (max - min) + min;
    return Math.floor(numberRandom);
}

const [min, max] = [0, 50];
let numberRandom = random(min, max);

while (numberRandom !== 10) {
    numberRandom = random(min, max);
    console.log(numberRandom) // saída: Os valores serão gerados aleatoriamente até sair o valor 10
}
```
