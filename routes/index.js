var express = require('express');
var router = express.Router();
var getProjects = require('../public/javascripts/getProjects.js')
var githubProjects = require('../public/javascripts/githubProjects.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  getProjects.data();
  githubProjects.data();
  res.render('index', { title: 'Express' });
});

module.exports = router;
