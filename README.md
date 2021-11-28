# PhotosData

Este projeto foi utilizado para construção de uma API, disponibilizada através do [Express](https://www.npmjs.com/package/express)  para realização de chamadas http para um banco de dados de fotos, tramento dos dados retornados e reenvio para o cliente final. Foi o padrão [Adapter](https://refactoring.guru/pt-br/design-patterns/adapter) para desacoplar o uso de clientes http, aqui estando disponível a biblioteca [axios](https://github.com/axios/axios).

Também foram utilizados os padrões de projeto [FactoryMethod](https://refactoring.guru/pt-br/design-patterns/factory-method) e [Facade](https://refactoring.guru/pt-br/design-patterns/facade). Foi aplicado o conceito de [Injeção de Dependência](https://martinfowler.com/articles/injection.html). Além disso, foi desenvolvido com [Test Driven Development](https://dl.acm.org/doi/10.5555/579193) utilizando a biblioteca [Jest](https://jestjs.io/pt-BR/) para a criação, mock e execução dos testes.

O projeto também conta com um serviço de log utilizando-se do [Winston](https://www.npmjs.com/package/winston) e do [Elasticsearch](https://www.elastic.co/pt/what-is/elasticsearch), sendo possível visualizar os logs através do [Kibana](https://www.elastic.co/pt/kibana/). Ambos são disponibilizados para Api através do [Docker](https://www.docker.com/).

# Tecnologias

O projeto utiliza as seguintes tecnologias:
[NodeJs](https://nodejs.org/en/)
[Ts-Node](https://github.com/TypeStrong/ts-node)
[Typescript](https://www.typescriptlang.org/)
[Express](https://www.npmjs.com/package/express)
[Cors](https://www.npmjs.com/package/cors)
[Axios](https://github.com/sindresorhus/got)
[Winston](https://www.npmjs.com/package/winston)
[Jest](https://jestjs.io/pt-BR/)
[Ts-Jest](https://github.com/kulshekhar/ts-jest)
[Eslint](https://eslint.org/)
[Express-Rate-Limit](https://www.npmjs.com/package/express-rate-limit),
[http-status-codes](https://www.npmjs.com/package/http-status-codes),
[Husky](https://www.npmjs.com/package/husky)
[Elasticsearch](https://www.elastic.co/pt/what-is/elasticsearch)
[Kibana](https://www.elastic.co/pt/kibana/)
[Docker](https://www.docker.com/)


# Instalação

- Disponibilize os serviços Elasticsearch e Kibana

```
  $ docker-compose up -d
```

- Para instalar todas as dependências do projeto

```
  $ yarn install
```

- Para rodar o projeto em ambiente local

```
  $ yarn dev
```

A API se encontrará disponível na porta **8080**

# Utilização

## Rotas

----
- [/photosurls](./markdown/photosurls.md)
- [/filterproprieties](./markdown/filterproprieties.md)
- [/patterntitle](./markdown/patterntitle.md)
- [/formated](./markdown/formated.md)

---
---