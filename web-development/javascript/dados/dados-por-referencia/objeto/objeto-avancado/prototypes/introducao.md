# Protótipo (Prototype)

Protótipo é o termo usado para se referir a algo que foi criado com o propósito de ser um modelo ou molde para futuras produções.

Todos os objetos em JavaScript possui uma referência interna `__proto__` que faz referencia ao `[[prototype]]`. O protótipo em si é um objeto, então o protótipo terá o seu próprio protótipo, fazendo assim uma cadeia de protótipos. A cadeia irá terminar quando um protótipo retornar `null`.

O `__proto__` é uma propriedade de acesso (que é uma função getter e setter), ela expões o `[[Prototype]]` interno do objeto no qual foi feito o acesso.

Mas não é  aconselhado o uso do `__proto__`, como getter use: `Object.getPrototypeOf` ou `Reflect.getPrototypeOf` e para setter use: `Object.setPrototypeOf` ou `Reflect.setPrototypeOf`.

E para criar um novo objeto usando um outro objeto existente como protótipo para o novo objeto a ser criado use: `Object.create`.
