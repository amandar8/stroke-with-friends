var express = require('express');
var router = express.Router();
const knex = require('knex')(config);
const config = require('../knexfile')[env];
const env = process.env.NODE_ENV || 'development';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {

});

module.exports = router;
