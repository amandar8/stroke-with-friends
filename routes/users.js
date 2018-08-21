var express = require('express');
var router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

/* GET users listing. */
router.get('/', function(req, res) {
  knex('users')
  .then((users) => {
    res.send(users);
  })
});

router.get('/id/:id', (req, res) => {
  knex('users')
  .where('id', req.params.id)
  .then((user) => {
    res.send(user)
  });
});

router.get('/username/:username', (req, res) => {
  knex('users')
  .where('username', req.params.username)
  .then((user) => {
    res.send(user);
  });
});

router.get('/alias/:alias', (req, res) => {
  knex('users')
  .where('alias', req.params.alias)
  .then((user) => {
    res.send(user);
  });
});

module.exports = router;
