var express = require('express');
var router = express.Router();
var getProjects = require('../public/javascripts/getProjects.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  getProjects.data();
  res.render('index', { title: 'Express' });
});

module.exports = router;
