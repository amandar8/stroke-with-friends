exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('alias').notNullable();
    table.string('name');
    table.string('admin');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};