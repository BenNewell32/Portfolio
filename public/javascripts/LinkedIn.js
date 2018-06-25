var request = require('request');
var cheerio = require('cheerio');
var projects='Add web scrape'

request('https://github.com/BenNewell32?tab=repositories', function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          console.log(html); 
          projects=html;
      }
});

function data(){
    return projects
}

module.exports = {data}