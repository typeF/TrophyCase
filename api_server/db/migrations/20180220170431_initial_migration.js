exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('testing', (table) => {
      table.increments();
      table.string('user');
      table.boolean('active');
      table.date('created_date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('testing')
  ])
};
