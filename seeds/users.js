
exports.seed = function(knex, Promise) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {username: 'ed@swf.com', password: 'guest', alias: 'like2stroke', name: 'Ed Pantzer', admin: true},
        {username: 'amanda@swf.com', password: 'guest', alias: 'strokesalot', name: 'Amanda Rutherfoord', admin: true},
        {username: 'jake@swf.com', password: 'guest', alias: 'jew stroke', name: 'Jake Lewis', admin: true},
        {username: 'dirk@swf.com', password: 'guest', alias: 'menonlystrokes', name: 'Dirk Ruschhaupt', admin: true},
        {username: 'dave@example.com', password: 'guest', alias: 'Dave', name: 'Dave Miller', admin: false},
        {username: 'marc@example.com', password: 'guest', alias: 'Jeff Goldblum', name: 'Marc Majcher', admin: false},
        {username: 'louis@example.com', password: 'guest', alias: 'Louis', name: 'Louis Daily', admin: false},
        {username: 'ryder@example.com', password: 'guest', alias: 'ryder', name: 'Ryder Dale', admin: false}
      ]);
    })
    .then(function () {
      return knex('groups').insert([

      ]);
    })
    .then(function () {
      return knex('joinUserGroups').insert([

      ]);
    });
};