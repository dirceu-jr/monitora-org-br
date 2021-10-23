# monitora-org-br

Aprenda sobre organizações. Descubra o máximo que puder sobre caridades e ONGs da região.

Agregador de conteúdo feito em [Node.js®](https://nodejs.org/), com [ORM](https://pt.wikipedia.org/wiki/Mapeamento_objeto-relacional) [Sequelize](https://sequelize.org/).

No momento, é gerada uma base de dados SQLite ao executar `npx sequelize-cli db:migrate` e alguns dados iniciais são preenchidos ao executar `npx sequelize-cli db:seed:all`.

Para coletar o conteúdo `node ./scrapers/all.js`. Por enquanto tem um script de coleta.

Para gerar a lista `node ./scrapers/to-static.js`.
