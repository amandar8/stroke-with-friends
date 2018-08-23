var express = require('express');
var router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above
const bcrypt = require('bcryptjs');

router.post('/register', (req, res, next) => {
  console.log('In the register user route', req.body);
  delete req.body.confirm_password;
  let password = req.body.password;

  bcrypt.hash(password, 8)
  .then(hashed_password => {
    req.body.password = hashed_password;
    console.log('Req body', req.body);
    return knex('users').insert(req.body).returning('*');
  })
  .then(newUser => {
    console.log('new user', newUser);
    
    res.send(newUser);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send(error);
  })
});



router.post('/register', (req, res, next) => {
  if (req.body.username && req.body.password) {
    let enterUsername = new Error('Please enter username and password')
    knex('users')
    .where('username', req.body.username)
    .then((user) => {
      if (user[0].password === req.body.password){
        res.redirect('http://localhost:3000');
      }
    })
  }
  else {
    return Promise.reject(enterUsername);
  }
});

/* POST user listing. */
router.post('/register', (req, res, next) => {
  let usernameTaken = new Error('Username is already taken');
  const user = {};

  if (req.body.username && req.body.password) {
    knex('users')
    .where('username', req.body.username)
    .then((exists) => {
      console.log(exists);
      if (exists.length > 0) {
        return Promise.reject(usernameTaken);
      }
      else {
        for (let key in req.body) {
          user[key] = req.body[key];
        }
        return knex('users')
        .insert(user)
        .then((user) => {
          res.redirect('/users');
        });
      }
    });
  }
  else {
    res.render('error');
  }
});


module.exports = router;