var express = require('express');
var router = express.Router();
const knex = require('knex')(config); // define database based on above
const config = require('../knexfile')[env]; // pull in correct db with env configs
const env = process.env.NODE_ENV || 'development'; // set environment

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  if (req.body.username && req.body.password && req.body.alias) {
    knex('users')
    .where('username', req.body.username)
    .then((user) => {
        res.render('profile', {user: user});
    })
  }
});

router.post('/', function(req, res, next) {
  const user = {}
});

module.exports = router;
