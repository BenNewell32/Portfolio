const fs = require('fs');
const screenshot = require('screenshot-stream');
 

function checkImage(url){
    fs.exists(url+'-1024x768.png', (exists) => {
        console.log(exists ? removeImage(url) : buildImg(url));
      });
}

function removeImage(url){
    var file=(url+'-1024x768.png').toString();
    fs.unlink(file, (err) => {
        if (err) throw err;
        console.log(url+'-1024x768.png'+' was deleted');
        buildImg(url);
    });
}

function buildImg(url){
    const stream = screenshot('http://'+url, '1024x768', {crop: true, delay:10}); 
    stream.pipe(fs.createWriteStream(url+'-1024x768.png'));
    return url+'-1024x768.png';
}

module.exports = {checkImage}