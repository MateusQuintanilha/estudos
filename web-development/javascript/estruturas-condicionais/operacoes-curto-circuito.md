# Operações de curto-circuito

Podemos fazer operações de curto-circuito usando os operadores lógicos.

Vamos fazer uma operação de curto-circuito que irá deixar o usuário escolher uma cor, mas como padrão será a cor preta, então se o usuário não escolher nem uma cor, será mostrado a cor preta, mas caso o usuário escolha uma cor essa cor será mostrada.

Para fazer isso podemos usar o operador lógico or, pois ele irá retornar o primeiro valor verdadeiro que encontrar, vamos usar a cor do usuário como null até que o usuário escolha uma cor, e como null é considerado false então o operador irá retornar a outra opção que será a cor padrão que escolhemos.

Exemplo em que o usuário não escolheu uma cor:

```js
const corUsuario = null;
const corPadrao = 'preto';
const cor = corUsuario || corPadrao;

console.log(cor) // saída: preto
```

Exemplo em que o usuário escolheu a cor azul:

```js
const corUsuario = 'azul';
const corPadrao = 'preto';
const cor = corUsuario || corPadrao;

console.log(cor) // saída: azul
```
