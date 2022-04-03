# Funções anônimas

Funções anônimas são funções que não possuem nome, elas geralmente são usadas em:

* Métodos como o addEventListener

    ```js
    document.addEventListener('click', function() {/* Função anônima*/});
    ```

* Também são usadas como expressão de função

    ```js
    const somar = function(valorX, valorY) {
        return valorX + valorY
    };
    ```
