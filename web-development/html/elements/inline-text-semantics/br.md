## Quebra de Linha

`<br>` - Possui a função de quebrar a linha. É útil para escrever poemas ou um endereço, onde a divisão de linha é significante.

Não use `<br>` para aumentar o espaço entre as linhas de texto ou separar os textos; para isso use a propriedade CSS margin ou o elemento `<p>`.

```html
<p>
    Não sei nem mais dizer
    O que sinto por você...
    Se é amor...
    Se é amizade...
    Se é paixão...
    Mas suspeito fortemente
    Que seja tudo isso junto!
</p>
```

Sem o elemento `<br>` o texto fica assim:

> <p>
>       Não sei nem mais dizer
>       O que sinto por você...
>       Se é amor...
>       Se é amizade...
>       Se é paixão...
>       Mas suspeito fortemente
>       Que seja tudo isso junto!
> </p>

---

Agora vamos ver como fica utilizando o elemento `<br>`

```html
<p>
    Não sei nem mais dizer <br>
    O que sinto por você... <br>
    Se é amor... <br>
    Se é amizade... <br>
    Se é paixão... <br>
    Mas suspeito fortemente <br>
    Que seja tudo isso junto!
</p>
```

Utilizando o elemento `<br>` o texto fica assim:

> <p>
>    Não sei nem mais dizer <br>
>    O que sinto por você... <br>
>    Se é amor... <br>
>    Se é amizade... <br>
>    Se é paixão... <br>
>    Mas suspeito fortemente <br>
>    Que seja tudo isso junto!
> </p>
