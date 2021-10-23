const db = require('../models/index');
const fs = require('fs');
const moment = require('moment');
require('moment/locale/pt-BR');

// will load database and create static files into firebase/public/index.html
(async() => {
  // const city = await db.City.findOne({ where: { name: org_city } });
  const organization = await db.Organization.findOne({ where: { id: 1 } });
  const posts = await db.Post.findAll({ where: { organizationId: 1 }, order: [['date', 'DESC']] });

  let list = [];
  
  for (post in posts) {
    list.push('<a href="', posts[post].url,'" target="_blank" class="message">');
    list.push('<span><img height="16" width="16" src="', organization.favicon, '" /> Afece</span>');
    list.push('<h1>', posts[post].title,'</h1>');
    list.push('<p>', posts[post].digest.replace(/\n/, '').trim().slice(0, 256), '&hellip;</p>');
    list.push('<span>', moment(posts[post].date).format('ll'), '</span>');
    list.push('</a>');
  }

  fs.readFile('./firebase/public/template.html', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace('{{ content }}', list.join(''));
  
    fs.writeFile('./firebase/public/index.html', result, 'utf8', function(err) {
       if (err) return console.log(err);
    });
  });

})();