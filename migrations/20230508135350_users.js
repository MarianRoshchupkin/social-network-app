/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id', 255).unique();
    table.string('username', 255).notNullable();
    table.string('password', 255).notNullable();
    table.string('avatar', 255).notNullable().defaultTo('');
    table.integer('age', 11).notNullable().defaultTo(0);
    table.string('university', 255).notNullable().defaultTo('');
    table.string('city', 255).notNullable().defaultTo('');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
