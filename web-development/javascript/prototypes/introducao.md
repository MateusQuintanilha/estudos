# Protótipo (Prototype)

O JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outros.

Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (`__proto__`) que vem da propriedade `prototype` da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JavaScript vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usado até o topo (`null`) até encontrar (ou não) tal membro.
