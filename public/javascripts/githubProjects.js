var request = require('request');
var cheerio = require('cheerio');
var projects=[];
var getImages = require('../javascripts/getImages.js');

function beginScrape(){
    request('https://github.com/BenNewell32?tab=repositories', function(err, resp, html) {
            if (!err){
            const $ = cheerio.load(html);
            projects=[];
            $('li','#user-repositories-list').each(function(i, element) {

                var title = $(element).children().first().text().replace('\n      ','').replace('\n      ','').replace('\n      ','').replace('    ','').replace('  ','').replace('\n    \n\n\n    ','').replace('\n\n    \n    ','').replace('\n','').replace('    \n\n        \n          ','').replace('\n        \n\n    ','');
                var fulldesc = $(element).children().eq(1).text().replace('\n      ','').replace('\n      ','').replace('\n      ','').replace('    ','').replace('  ','').replace('\n    \n\n\n    ','').replace('  \n\n      \n        \n        \n      \n    ','').replace('\n\n    \n    ','').replace('\n','');
                var desc = fulldesc.split(" URL - ")[0];
                var url = fulldesc.split(" URL - ")[1];
                projects.push({
                    title: title,
                    desc: desc,
                url:'http://'+url,
                gitUrl: 'https://github.com/BenNewell32/'+title      
                });
            });
        }
    });
}

beginScrape();

function data(){
    beginScrape();
    return projects;  
}

module.exports = {data}