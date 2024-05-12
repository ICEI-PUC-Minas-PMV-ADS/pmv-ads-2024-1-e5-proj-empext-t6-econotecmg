# Especificações do Projeto

As especificações abordadas nesse projeto estão detalhadas a seguir.

## Arquitetura e Tecnologias

O modelo de arquitetura escolhido para esse projeto é o MVC. Seguindo as seguintes tecnologias.
|Função | Tecnologia utilizada|
|-----|-----|
|IDE | Visual Studio|
|Front-end | React|
|Back-end| Node.Js |
|Frameworks | Bootstrap, |
|Banco de dados | postgresql |

![Subcabeçalho](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t6-econotecmg/assets/103226164/c0c85c9a-e4c0-46f6-8dad-e4fbb659254a)

## Project Model Canvas

![Diagrama de caso de uso (4)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t6-econotecmg/assets/103226164/e50aa290-ec89-4b86-83f7-ba85a2650caa)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir ao gestor realizar o cadastro de produtos vendidos pela loja. | ALTA | 
|RF-002| O sistema deve permitir ao gestor excluir ou modificar os produtos já adicionados.   | ALTA |
|RF-003| O sistema deve permitir ao usuário que adicione produtos ao carrinho.    | MÉDIA |
|RF-004| Após o cliente finalizar as escolhas dos produtos o sistema deve informar a loja os produtos selecionados pelo cliente.    | MÉDIA |
|RF-005| O sistema deve informar aos usuário o valor dos produtos somados no carrinho.    | MÉDIA |
|RF-006| O sistema deve calcular o frete da distância para a entrega do produto e informar o cliente.  | BAIXO |
|RF-007| O sistema deve permitir que o usuário entre em contato com a empresa.    | MÉDIA |
|RF-008| Deve conter informações de horário de funcionamento, telefone de contato e endereço.    | MÉDIA |
|RF-009| O sistema deve permitir que o usuario se cadastre-se.    | ALTA  |
|RF-010| O sistema deve permitir que o usuario faça login em sua conta.    | ALTA  |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 5s |  BAIXA |
|RNF-003| A aplicação será compatível com os principais navegadores do mercado. |  ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre. |
|02| A equipe não pode subcontratar terceiros para o desenvolvimento do trabalho.        |


## Diagrama de Casos de Uso

![1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t6-econotecmg/assets/103226164/a744156c-1900-439e-8aa4-1fccb71ef261)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

| ID |RF01|RF02|RF03|RF04|RF05|RF06|RF07|RF08|
|----|----|----|----|----|----|----|----|----|
|RF01|    | x  |    |    |    |    |    |    | 
|RF02| x  |    |    |    |    |    |    |    | 
|RF03| x  |    |    | x  |    |    |    |    |    
|RF04|    |    |    |    | x  |    |    |    |
|RF05|    |    |    | x  |    |    |    |    | 
|RF06|    |    |    |    | x  |    |    |    |  
|RF07|    |    |    |    |    |    |    | x  |  
|RF08|    |    |    |    |    |    | x  |    |   

## Modelo ER (Entidades relacional)

O Modelo ER representa através de um diagrama como as entidades se relacionam entre si na aplicação interativa.

![Problemas  (3)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t6-econotecmg/assets/103226164/1cc1a335-d28c-4fd6-9bed-3d5ae0a864f9)




## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.

![_Fluxograma (6)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t6-econotecmg/assets/103226164/61f0580d-baf7-4bcf-802a-d6b56d418955)


