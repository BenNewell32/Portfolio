var express = require('express');
var router = express.Router();
var linkedin = require('../public/javascripts/linkedin.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(linkedin.data());
});

module.exports = router;
