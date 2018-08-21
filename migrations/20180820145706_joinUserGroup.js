exports.up = function(knex, Promise) {
    return knex.schema.createTable('joinUserGroup', (table) => {
        table.integer('users_id').unsigned().notNullable();
        table.foreign('users_id').references('users.id');
        table.integer('groups_id').unsigned().notNullable();
        table.foreign('groups_id').references('groups.id');
    });
    
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('joinUserGroup');
  };