const axios = require('axios');
const cheerio = require('cheerio');
// const extractor = require('unfluff');
const sharp = require('sharp');

const db = require('../../models/index');

const org_name = 'Afece';
const org_city = 'Curitiba';

const news_list_url = 'https://afece.org.br/noticias/';

axios(news_list_url).then(response => {
  const html = response.data;
  const $html = cheerio.load(html);
  const articles = $html('section > article');

  // to be able to use await
  (async() => {
    const city = await db.City.findOne({ where: { name: org_city } });
    const organization = await db.Organization.findOne({ where: { name: org_name, cityId: city.id } });

    articles.each(function() {
      const id = $html(this).attr('id').replace('post-', '');
      const json_url = 'https://afece.org.br/wp-json/wp/v2/posts/' + id;

      axios(json_url).then(async json_response => {
        const parsed = json_response.data;
        const link = parsed.link;
        const date = parsed.date;
        const title = parsed.title.rendered;
        const content = parsed.content.rendered;
        const html_content = cheerio.load(content);
        const text_content = html_content.text().replace(/\s+/g, ' ');

        const image_src = html_content('img:first').attr('src');

        let image_base64 = '';
        let imageResponse;

        // download image, resize and return base64
        if (image_src && image_src.length > 0) {
          try {
            imageResponse = await axios({ url: image_src, responseType: 'arraybuffer' });
          } catch (err) {}

          if (imageResponse !== undefined) {
            const resized_image = await sharp(imageResponse.data).resize(112, 112, {
              fit: 'cover',
              position: sharp.strategy.attention,
              withoutEnlargement: true
            }).jpeg({ quality: 80 }).toBuffer();

            // position: sharp.strategy.attention
            
            image_base64 = 'data:image/jpeg;base64,' + resized_image.toString('base64');
          }
        }

        const post = await db.Post.findOne({ where: { organizationId: organization.id, url: link } });

        if (post == null) {
          await db.Post.create({
            organizationId: 1,
            title: title,
            url: link,
            digest: text_content,
            date: new Date(date),
            image: image_base64
          }).catch(console.error);
        }
      });
    });
  })();
}).catch(console.error);
