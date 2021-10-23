'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Organization);
    }
  };
  Post.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    digest: DataTypes.TEXT,
    date: DataTypes.DATE,
    organizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};