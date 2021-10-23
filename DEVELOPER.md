# DEV?

Feito em [Node.js®](https://nodejs.org/), com [ORM](https://pt.wikipedia.org/wiki/Mapeamento_objeto-relacional) [Sequelize](https://sequelize.org/).

Atualmente é gerada uma base de dados SQLite ao executar `npx sequelize-cli db:migrate` e alguns dados iniciais são preenchidos ao executar `npx sequelize-cli db:seed:all`.

Para coletar o conteúdo `node ./scrapers/all.js`.

Por enquanto tem somente um script de coleta (Afece: `/scrapers/curitiba-pr/afece.org.br.js`).

Para gerar a lista `node ./scrapers/to-static.js`.
