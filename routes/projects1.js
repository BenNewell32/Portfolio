var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var request = require('request');
var fetch = require('node-fetch');

var allProjects=[];

function fetchProjects(){
  allProjects=[];
  fetch('http://www.bens.work/api')
      .then(
          function(response){
              return response.json();
          }
      )
      .then(
          function(myJson){
              allProjects=myJson;
              console.log('')
              console.log(allProjects);
          }
      )
  }

fetchProjects();


router.get('/', function(req, res, next) {
    setTimeout(()=>{
        res.render('projects1', { 
            title: 'Projects1', 
            projects: allProjects 
        })
    },3000)
})
module.exports = router;
