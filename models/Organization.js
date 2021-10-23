'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.City);
      this.hasMany(models.Post);
    }
  };
  Organization.init({
    name: DataTypes.STRING,
    favicon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};