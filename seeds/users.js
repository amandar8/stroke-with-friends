
exports.seed = function(knex, Promise) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {username: 'amandaruth08@gmail.com', password: 'password1', alias: 'strokesalot', first: 'Amanda', last: 'Rutherfoord'},
        {username: 'edpantzar@gmail.com', password: 'password2', alias: 'like2stroke', first: 'Ed', last: 'Pantzar'},
        {username: 'jakeaustinlewis@gmail.com', password: 'password3', alias: 'constantstroking', first: 'Jake', last: 'Lewis'},
        {username: 'dirk@gmail.com', password: 'password4', alias: 'menonlystrokes', first: 'Dirk', last: 'Ruschhuapt'}       
      ]);
    });
};