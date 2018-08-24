var express = require('express');
var router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above
const bcrypt = require('bcryptjs');

router.post('/register', (req, res, next) => {
  delete req.body.confirm_password;
  let password = req.body.password;

  knex('users')
    .where('username', req.body.username)
    .then((user) => {
      if (user.length > 0) {
        //user already exists
        let usernameTaken = new Error('Username is already taken!');
        return Promise.reject(usernameTaken);
      } else {
        return bcrypt.hash(req.body.password, 8)
      }
    })
    .then((hashed_password) => {
      req.body.password = hashed_password;
      return knex('users').insert({
        username: req.body.username,
        password: hashed_password,
        alias: req.body.alias,
        name: req.body.name,
        admin: false
      })
      .returning('*');
    })
    .then(newUser => {
          res.send(newUser);
        })
    .catch( (error) => {
      if(error.message ==='Username is already taken!') {
      }
      console.error(error);
      res.status(500).send(error);
    })
  });


module.exports = router;