# while

A instrução (while) cria um loop que executa um bloco de código enquanto uma condição de teste for validada como (true).
sintaxe:

```js
while(condicao) {
 // Conteúdo e iteração
}
```

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
