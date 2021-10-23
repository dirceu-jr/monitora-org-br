// const typeorm = require('typeorm');

module.exports = {
  type: 'sqlite',
  database: 'monitora.sqlite',
  entities: [
      require("../entities/Org"),
      require("../entities/Post"),
  ],
  synchronize: true
}