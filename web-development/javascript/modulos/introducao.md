# Modules ES6

## Introdução

À medida que nosso código cresce, queremos dividi-lo em vários arquivos, facilitando o processo de manutenção e reusabilidade dos códigos em outras partes do projeto. E os módulos permitem que blocos de códigos como funções, classes e constantes sejam separados em arquivos e que possam ser importados quando necessário.

Por muito tempo, o JavaScript existiu sem uma sintaxe de módulo em nível de linguagem. Isso não foi um problema, porque inicialmente os scripts eram pequenos e simples, então não havia necessidade.

Antes desse recurso ra necessário declarar variáveis globais em arquivos .js que. quando adicionados a mesma página, permitiam que essas variáveis passassem a fazer parte do mesmo contexto. Mas isso gerava problemas quando os scripts eram muito complexos, pois era difícil de prever os nomes de variáveis já existentes (Poluição do namespace global), e acabava ocorrendo a sobrescrita de variáveis com o mesmo nome.

Mas eventualmente os scripts se tornaram cada vez mais complexos, então a comunidade inventou uma variedade de maneiras de organizar o código em módulos, bibliotecas especiais para carregar módulos sob demanda.

Para citar alguns (por razões históricas):

* `AMD` - Um sistema de módulos mais antigos, implementado inicialmente pela biblioteca `require.js`.
* `CommonJS` - O sistema de módulos criado para o servidor Node.js.
* `UMD`- mais um sistema de módulos, sugerido como universal, compatível com `AMD` e `CommonJS`.

Agora, tudo isso lentamente está se tornando parte da história, mas ainda podemos encontrá-los em scripts antigos.

O sistema utilizado atualmente é o de módulos em nível de linguagem ou como é comumente chamado (Módulo ES6) apareceu no padrão em 2015, e evoluiu gradualmente desde então e agora é suportado por todos os principais navegadores e no Node.js. Então vamos estudar os módulos JaVaScript modernos a partir de agora.

