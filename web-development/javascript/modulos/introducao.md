# Modules ES6

## Introdução

À medida que nosso código cresce, queremos dividi-lo em vários arquivos, facilitando o processo de manutenção e reusabilidade dos códigos em outras partes do projeto. E os módulos permitem que blocos de códigos como funções, classes e constantes sejam separados em arquivos e que possam ser importados quando necessário.

Por muito tempo, o JavaScript existiu sem uma sintaxe de módulo em nível de linguagem. Isso não foi um problema, porque inicialmente os scripts eram pequenos e simples, então não havia necessidade.

Antes desse recurso ra necessário declarar variáveis globais em arquivos .js que. quando adicionados a mesma página, permitiam que essas variáveis passassem a fazer parte do mesmo contexto. Mas isso gerava problemas quando os scripts eram muito complexos, pois era difícil de prever os nomes de variáveis já existentes (Poluição do namespace global), e acabava ocorrendo a sobrescrita de variáveis com o mesmo nome.

Mas eventualmente os scripts se tornaram cada vez mais complexos, então a comunidade inventou uma variedade de maneiras de organizar o código em módulos, bibliotecas especiais para carregar módulos sob demanda.

