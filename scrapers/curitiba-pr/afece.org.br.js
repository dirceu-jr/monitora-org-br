const { Sequelize } = require('sequelize');
const axios = require('axios');
const cheerio = require('cheerio');

const database = require('../../db');
const Organization = require('../../models/Organization');
const Post = require('../../models/Post');

Post.belongsTo(Organization);
Organization.hasMany(Post);

// create tables if not exists
database.sync();

const org_name = 'Afece';
const news_list_url = 'https://afece.org.br/noticias/';



// const connection_config = require('../connection_config.js');

// initialize Organization in DB
// typeorm.createConnection(connection_config).then(async connection => {
//   let orgRepository = connection.getRepository("Org");
//   let org = await orgRepository.find({ name: org_name });
//   if (org.length == 0) {
//     var new_org = { name: org_name };
//     orgRepository.save(new_org);
//   }
// }).catch(error => console.log(error));

// axios(news_list_url).then(response => {
//   const html = response.data;
//   const $ = cheerio.load(html);
//   const titles = $('header > h2 > a');

//   // https://afece.org.br/noticias/5-coisas-que-voce-pode-doar-e-nao-sao-dinheiro/feed/
//   typeorm.createConnection(connection_config).then(function (connection) {

//     console.log(connection);

//   }).catch(function(error) {
//     console.log("Error: ", error);
//   });


//   console.log(titles);
// }).catch(console.error);