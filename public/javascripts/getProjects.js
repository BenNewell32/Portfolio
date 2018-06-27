var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var request = require('request');
var fetch = require('node-fetch');
var allProjects = [{title: 'Refresh the page!', desc: 'Please :)'}];

function data(){

  fetch('http://localhost:3000/api')
    .then(
      function(response){
        return response.json();
      }
    )
    .then(
      function(myJson){
        // console.log('then: '+JSON.stringify(myJson));
        allProjects=myJson;
        // console.log("set variable: "+allProjects)
        return allProjects
      }
    )
    return allProjects
}

module.exports = {data}