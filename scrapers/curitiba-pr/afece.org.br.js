// const { Sequelize } = require('sequelize');
const axios = require('axios');
const cheerio = require('cheerio');

const db = require('../../models/index');

const org_name = 'Afece';
const news_list_url = 'https://afece.org.br/noticias/';


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