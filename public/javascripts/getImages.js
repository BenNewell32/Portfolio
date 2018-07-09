var fetch = require('node-fetch');
const fs = require('fs');
const screenshot = require('screenshot-stream');

testArray=[
    {
        title: 'Portfolio',
        url: 'www.bens.work'
    },
    {
        title: 'Bananashop',
        url: 'bananashopv1.herokuapp.com/',
    }
]

function checkImage(projectWebsites){
    projectWebsites.forEach(element => {    
        fs.exists('./public/images/'+element.title+'.png', (exists) => {
            console.log(exists ? removeImage(element.title) : buildImg(element.title,element.url));
        });
    });
}

function removeImage(title){
    var file=('./public/images/'+title+'.png').toString();
    fs.unlink(file, (err) => {
        if (err) throw err;
        console.log('./public/images/'+title+'.png'+' was deleted');
        buildImg(title);
    });
}

function buildImg(title,url){
    const stream = screenshot('http://'+url, '1024x768', {crop: true, delay:5}); 
    stream.pipe(fs.createWriteStream('./public/images/'+title+'.png'));
    return './public/images/'+title+'.png';
}

checkImage(testArray);

module.exports = {checkImage}