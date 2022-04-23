# Protótipo (Prototype)

Prototype é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

O JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Em JavaScript, quando um objeto é criado, uma propriedade com o nome de `__proto__` ou `[[prototype]]` é inserida automaticamente nesse objeto, essa propriedade referencia um outro objeto chamado de `prototype`.

Todo objeto em JavaScript herda propriedades e métodos do seu protótipo ascendente. Ou seja, esse objeto que acabou de ser criado poderá acessar propriedades e métodos, já existentes do seu protótipo ascendente. Essas propriedades e métodos não pertencem ao objeto em si, mas sim ao protótipo do objeto.
