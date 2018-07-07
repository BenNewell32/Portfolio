var fetch = require('node-fetch');
const fs = require('fs');
const screenshot = require('screenshot-stream');

function checkImage(url,title){
    fs.exists(title+'.png', (exists) => {
        console.log(exists ? removeImage(title) : buildImg(title,url));
      });
}

function removeImage(title){
    var file=(title+'.png').toString();
    fs.unlink(file, (err) => {
        if (err) throw err;
        console.log(title+'.png'+' was deleted');
        buildImg(title);
    });
}

function buildImg(title,url){
    const stream = screenshot('http://'+url, '1024x768', {crop: true, delay:10}); 
    stream.pipe(fs.createWriteStream(title+'.png'));
    return title+'.png';
}

checkImage('www.bens.work','Portfolio');

module.exports = {checkImage}