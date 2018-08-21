
exports.seed = function(knex, Promise) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {id: 1, username: 'ed@swf.com', password: 'guest', alias: 'like2stroke', name: 'Ed Pantzer', admin: true},
        {id: 2, username: 'amanda@swf.com', password: 'guest', alias: 'strokesalot', name: 'Amanda Rutherfoord', admin: true},
        {id: 3, username: 'jake@swf.com', password: 'guest', alias: 'jew stroke', name: 'Jake Lewis', admin: true},
        {id: 4, username: 'dirk@swf.com', password: 'guest', alias: 'menonlystrokes', name: 'Dirk Ruschhaupt', admin: true},
        {id: 5, username: 'dave@example.com', password: 'guest', alias: 'Dave', name: 'Dave Miller', admin: false},
        {id: 6, username: 'marc@example.com', password: 'guest', alias: 'Jeff Goldblum', name: 'Marc Majcher', admin: false},
        {id: 7, username: 'louis@example.com', password: 'guest', alias: 'Louis', name: 'Louis Daily', admin: false},
        {id: 8, username: 'ryder@example.com', password: 'guest', alias: 'ryder', name: 'Ryder Dale', admin: false}
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