'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'Afece',
        favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcUlEQVQ4jaWTv0tCURTHP1esQRzs5xQqDdFgIBQNmaAtbWG2PBp8Uc0iTv0FFQQStkb0Jt/ywrUlHlhNBQ0tDsUrmqTAFluC2/B85Y+HSX2nwzn3fO4595wrpJSCf8jrGELVA0ACiAIWUJaaUm+JpYAwcAeY3zEppRCqvgEUgEALvA7km7ZrTGrKqSBTSgIXf+xgydukt2vMz8HyFHNB+9Lzao19494NUPBg99ym9PQ4W7EwD68NwqN+9lYi7KxF3ABRQaYke9W4MDvBVXYRs1ojudvdqdclh3R8kuP1KEO+wV5sADxAudNpbM8DECteEtzv+b5lL1DEnrGtkP1w7x+fXN++/FZA0SM1xeRn3vBUx3prEB7xYeTiGLk4ADfP9c7kvNQUUzirLFQ9hzPSUABjdYZh3wAARxWLs8pjZ/IhNDfR8QpVTwAn2CvrJgvYbFZNF6AFlAOyLSALKDq3tp3t9RuFqqcApKZ0TaovQD/6Ag45eyao4FYXAAAAAElFTkSuQmCC',
        cityId: 4,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Organizations', null, {});
  }
};
