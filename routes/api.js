var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var fetch = require('node-fetch');
var request = require('request');
var cheerio = require('cheerio');
var projects = [];

function beginScrape(){
    request('https://github.com/BenNewell32?tab=repositories', function(err, resp, html) {
        if (!err){
            const $ = cheerio.load(html);
            console.log('Clearing projects array. -api.js');
            projects=[];
            $('li','#user-repositories-list').each(function(i, element) {
                var title = $(element).children().first().text().replace('\n      ','').replace('\n      ','').replace('\n      ','').replace('    ','').replace('  ','').replace('\n    \n\n\n    ','').replace('\n\n    \n    ','').replace('\n','').replace('    \n\n        \n          ','').replace('\n        \n\n    ','');
                var fulldesc = $(element).children().eq(1).text().replace('\n      ','').replace('\n      ','').replace('\n      ','').replace('    ','').replace('  ','').replace('\n    \n\n\n    ','').replace('  \n\n      \n        \n        \n      \n    ','').replace('\n\n    \n    ','').replace('\n','');
                var desc = fulldesc.split(" URL - ")[0];
                var url = fulldesc.split(" URL - ")[1];
                var img = urlExists(url);
                projects.push({
                    title: title,
                    desc: desc,
                    url:'http://'+url,
                    gitUrl: 'https://github.com/BenNewell32/'+title,
                    img: img 
                });
            });
            console.log('Array has been built. -api.js');
            return projects;
        }
    })
}

function urlExists(url){
    if (url == null){
        console.log('Null');
        console.log(url);
        img=''
        return img;
    } else {
        console.log('Exists');
        console.log(url);
        img= 'background-repeat: no-repeat; background-size: 50%; background-image: url(../images/'+url+'.png)'
        return img;
    }
}

  router.get('/', function(req, res, next) {
    beginScrape();
    setTimeout(()=>{res.send(projects)},3000);
  })

module.exports = router;
