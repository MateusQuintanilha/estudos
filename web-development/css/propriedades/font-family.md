# font-family

A propriedade `font-family` é usada para definir a fonte do conteúdo, devemos incluir *fallback* (fontes alternativas caso a fonte que escolhemos não seja encontrada). Se a primeira fonte da lista não estiver instalada na máquina do usuário, deverá ser usada a segunda e assim por diante até ser encontrada uma fonte instalada.

## Classificações das Famílias de Fontes

As 5 principais classificações são:

* serif  
  * As serifadas (serif) são caracterizadas pelos pequenos detalhes nas extremidades dos caracteres.
  * Geralmente é usada no Corpo de texto e títulos.
  * CSS:

    ```css
    .exemplo-serif {
        font-family: Georgia, 'Times New Roman', times, serif;
    }
    ```

* sans-serif  
  * As sem serifas (sans-serif) são caracterizadas pelas suas formas neutras e pela ausência das serifas.
  * Geralmente é usada no Corpo de texto, títulos e texto funcional (botões, links, abas).
  * CSS:

    ```css
    .exemplo-sans-serif {
    font-family: Helvetica, Arial, Verdana, sans-serif;
    }
    ```

* monospace  
  * As monoespaçadas (monospace) possuem todos os seus caracteres com a mesma largura, permitindo que linhas de texto se alinhem perfeitamente uma abaixo da outra.
  * Geralmente é usada em Dados, tabelas e código.
  * CSS

    ```css
    .exemplo-monospace {
        font-family: 'Lucida Console', Courier, monospace;
    }
    ```

* cursive  
  * As cursivas (script|handwriting) tentam imitar a escrita ocidental com formas orgânicas e geralmente ligadas entre si.
  * Geralmente é usada em Títulos e pequenos textos.
  * CSS

    ```css
    .exemplo-cursive {
        font-family: sacramento, dancing script, cursive;
    }
    ```

* fantasy  
  * As decorativas (display|fantasy) são todas aquelas que possuem características fortes que as tornam distintas de qualquer outra tipografia. Elas podem dar vida ou arruinar um projeto.
  * Geralmente é usada em Títulos e pequenos textos.  
  * CSS

    ```css
    .exemplo-fantasy {
        font-family: fantasy;
    }
    ```
