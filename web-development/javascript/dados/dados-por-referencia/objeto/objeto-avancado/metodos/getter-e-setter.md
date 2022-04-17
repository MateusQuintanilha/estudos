# Getter e Setter

No JavaScript existem dois tipo de propriedades de objetos:

* Propriedades de dados: são as propriedades em si (chave:valor).
  * um exemplo de propriedade de dados:

    ```js
    const pessoa = {
        nome: 'Cameron',
        sobrenome: 'Moore',
        peso: 78,
     };
    ```

* Propriedades de acessador: São métodos que obtêm ou definem o valor de um objeto. Para isso, usamos essas duas palavras-chave:
  * `get` - Para definir um método getter para obter o valor da propriedade.
  * `set` - Para definir um método setter para definir o valor da propriedade.

---