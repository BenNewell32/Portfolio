var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var request = require('request');
var fetch = require('node-fetch');

var githubProjects = require('../public/javascripts/githubProjects.js')

// Homepage for the route "/api"
  router.get('/', function(req, res, next) {
    res.send(githubProjects.data());
  });

// Ben - simply add another route "/api/user"
  // router.get('/user', function(req, res, next) {
  //   res.send(githubProjects.data());
  // });

module.exports = router;
