## Lista Ordenada

Usamos o elemento `<ol>` para criar uma lista de itens ordenados por números, letras ou algorismos romanos, ou simples símbolos. As alterações serão feitas na CSS associada utilizando a propriedade `list-style-type`.

**Atributos:**  
`reversed` - É usado para inverter a ordem da da contagem da lista.   
`start=""` - É usado para definir o número inicial da contagem.

Sintaxe Básica:

```html
<ol>
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ol>
```

Resultado:

<ol>
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ol>



Exemplo usando o atributo reversed:

```html
<ol reversed>
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ol>
```

Resultado:

<ol reversed>
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ol>

Exemplo usando o atributo start:

```html
<ol start="10">
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ol>
```

Resultado:

<ol start="10">
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ol>
