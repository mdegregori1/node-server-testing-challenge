exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments();
        
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.integer('year', 4).notNullable();

    });
  };
  
  exports.down = function(knex) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('cars');
  };
  