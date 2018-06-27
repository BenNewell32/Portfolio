var express = require('express');
var router = express.Router();
var getProjects = require('../public/javascripts/getProjects.js')

router.get('/', function(req, res, next) {
  console.log(getProjects.data())
  res.render('projects', { title: 'Projects', projects: getProjects.data() })
});

module.exports = router;