var express = require('express');
var router = express.Router();
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
