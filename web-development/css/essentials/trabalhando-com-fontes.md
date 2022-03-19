# Trabalhando com fontes

## font-family

A propriedade `font-family` é usada para definir a fonte do conteúdo, devemos incluir *fallback* (fontes alternativas caso a fonte que escolhemos não seja encontrada). Se a primeira fonte da lista não estiver instalada na máquina do usuário, deverá ser usada a segunda e assim por diante até ser encontrada uma fonte instalada. 

### Classificações das Famílias de Fontes

As 5 principais classificações são:

* serif  
    * As serifadas (serif) são caracterizadas pelos pequenos detalhes nas extremidades dos caracteres.
    * Geralmente é usada no Corpo de texto e títulos.
    * Exemplo: <span style="font-family: Georgia, 'Times New Roman', times, serif; font-size: 1.5rem;">O rato roeu a roupa do rei de Roma</span>
    * CSS:
        ```css
        .exemplo-serif {
            font-family: Georgia, 'Times New Roman', times, serif;
        }
        ```
* sans-serif  
    * As sem serifas (sans-serif) são caracterizadas pelas suas formas neutras e pela ausência das serifas.
    * Geralmente é usada no Corpo de texto, títulos e texto funcional (botões, links, abas).
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem">O rato roeu a roupa do rei de Roma</span>
    * CSS:
        ```css
        .exemplo-sans-serif {
            font-family: Helvetica, Arial, Verdana, sans-serif;
        }
        ```
* monospace  
    * As monoespaçadas (monospace) possuem todos os seus caracteres com a mesma largura, permitindo que linhas de texto se alinhem perfeitamente uma abaixo da outra.
    * Geralmente é usada em Dados, tabelas e código.
    * Exemplo: <span style="font-family: 'Lucida Console', Courier, monospace; font-size: 1.5rem">O rato roeu a roupa do rei de Roma</span>
    * CSS
        ```css
        .exemplo-monospace {
            font-family: 'Lucida Console', Courier, monospace;
        }
        ```
* cursive  
    * As cursivas (script|handwriting) tentam imitar a escrita ocidental com formas orgânicas e geralmente ligadas entre si.
    * Geralmente é usada em Títulos e pequenos textos.
    * Exemplo: <span style="font-family: sacramento, dancing script, cursive; font-size: 1.5rem">O rato roeu a roupa do rei de Roma</span>
    * CSS
        ```css
        .exemplo-cursive {
            font-family: sacramento, dancing script, cursive;
        }
        ```
* fantasy  
    * As decorativas (display|fantasy) são todas aquelas que possuem características fortes que as tornam distintas de qualquer outra tipografia. Elas podem dar vida ou arruinar um projeto.
    * Geralmente é usada em Títulos e pequenos textos.  
    * Exemplo: <span style="font-family: fantasy; font-size: 1.5rem">O rato roeu a roupa do rei de Roma</span>
    * CSS
        ```css
        .exemplo-fantasy {
            font-family: fantasy;
        }
        ```

### web-fonts

Podemos usar fontes diretamente da web usando uma das opções abaixo:
* @font-face
    * pode passar a fazer referencia a uma fonte hospedada em um servidor.
    * CSS:
        ```css
        @font-face {
            font-family: DeliciousRoman;
            src: url(http://www.font-face.com/fonts/delicious/Delicious-Roman.otf);
        }
        ```
* @import
    * Importando a fonte de um site como o https://fonts.google.com/ diretamente no arquivo css.
    * CSS:
        ```css
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        ```

* link
    * Podemos importar a fonte de um site como o https://fonts.google.com/ no arquivo html.
    * HTML:
        ```html
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        </head>
        ```

---

## color

Podemos usar a propriedade `color` para alterar a cor da fonte.

* Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem; color: red;">O rato roeu a roupa do rei de Roma</span>
* CSS
    ```css
    color: red;
    color: #FF0000;
    color: rgb(255,0,0);
    color: hsl(0, 100%, 50%);
    ```

---

## font-size

Podemos usar a propriedade `font-size` para alterar o tamanho da fonte.

### Valores

As medidas adotados podem ser qualquer uma utilizada no css, vamos ver algumas a seguir:

#### Valores `<absolute-size>`
* small
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: small;">O rato roeu a roupa do rei de Roma</span>
* x-small
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: x-small;">O rato roeu a roupa do rei de Roma</span>
* xx-small
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: xx-small;">O rato roeu a roupa do rei de Roma</span>
* medium
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: medium;">O rato roeu a roupa do rei de Roma</span>
* large
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: large;">O rato roeu a roupa do rei de Roma</span>
* x-large
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: x-large;">O rato roeu a roupa do rei de Roma</span>
* xx-large
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: xx-large;">O rato roeu a roupa do rei de Roma</span>

#### Valores `<relative-size>`
* smaller
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: smaller;">O rato roeu a roupa do rei de Roma</span>
* larger
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: larger;">O rato roeu a roupa do rei de Roma</span>

#### Valores `<length>`
* pixel
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 16px;">O rato roeu a roupa do rei de Roma</span>
* pontos
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 12pt;">O rato roeu a roupa do rei de Roma</span>
* em
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1em;">O rato roeu a roupa do rei de Roma</span>
* rem
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.2rem;">O rato roeu a roupa do rei de Roma</span>
* Entre outros...

#### Valores `<percentage>`
* porcentagem (%)
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 100%;">O rato roeu a roupa do rei de Roma</span>

#### Valores Globais
* inherit
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: inherit;">O rato roeu a roupa do rei de Roma</span>
* initial
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: initial;">O rato roeu a roupa do rei de Roma</span>
* unset
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: unset;">O rato roeu a roupa do rei de Roma</span>

Agora vamos ver a sintaxe de cada valor usado nos exemplos:

Sintaxe:

```css
/* Valores <absolute-size> */
font-size: small;
font-size: x-small;
font-size: xx-small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* Valores <relative-size> */
font-size: smaller;
font-size: larger;

/* Valores <length> */
font-size: 16px;
font-size: 12pt;
font-size: 1em;
font-size: 1rem;

/* Valores <percentage> */
font-size: 100%;

/* Valores Globais */
font-size: inherit;
font-size: initial;
font-size: unset;
```

---

## font-weight

A propriedade `font-weight` é responsável pela espessura da fonte. Ela pode receber os valores normal que a deixa com a espessura padrão, lighter que deixa a fonte mais fina (raramente funciona corretamente, deve ser evitado), bold que deixa a fonte em negrito e bolder que deixa ela mais realçada ainda (como o lighter, raramente funciona corretamente).

### Valores

* `normal`  
    * Peso normal. O mesmo que 400.
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem; font-weight: normal;">O rato roeu a roupa do rei de Roma</span>
* `bold`  
    * Peso negrito. O mesmo que 700.
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem; font-weight: bold;">O rato roeu a roupa do rei de Roma</span>
* `lighter`  
    * Um peso de fonte mais claro que o elemento pai (dentre os pesos disponíveis da fonte).
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem; font-weight: lighter;">O rato roeu a roupa do rei de Roma</span>
* `bolder`  
    * Um peso de fonte mais escuro que o elemento pai (dentre os pesos disponíveis da fonte).
    * Exemplo: <span style="font-family: Helvetica, Arial, Verdana, sans-serif; font-size: 1.5rem; font-weight: bolder;">O rato roeu a roupa do rei de Roma</span>

Sintaxe:

```css
font-weight: normal;
font-weight: bold;

/* Relativo ao elemento pai */
font-weight: lighter;
font-weight: bolder;

font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;

/* Valores globais */
font-weight: inherit;
font-weight: initial;
font-weight: unset;
```

Também podemos usar valores numéricos como podemos ver a seguir:

| Número  | Nome  |
| :--: | :-- |
|100| Thin (Hairline)
|200| Extra Light (Ultra Light, Ultra Fino)
|300| Light (Fino)
|400| Normal
|500| Medium (Médio)
|600| Semi Bold (Demi Bold, Semi Negrito)
|700| Bold (Negrito)
|800| Extra Bold (Ultra Bold, Super Negrito)
|900| Black (Heavy)
