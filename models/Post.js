const Sequelize = require('sequelize');
const database = require('../db');
 
const Post = database.define('Post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
 
module.exports = Post;