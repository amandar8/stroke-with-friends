exports.up = function(knex, Promise) {
    return knex.schema.createTable('groups', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('password').notNullable();
    });
    
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('groups');
  };