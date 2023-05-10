/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('friendship', (table) => {
    table.increments();
    table.string('userId1', 255).notNullable();
    table.string('userId2', 255).notNullable();
    table.integer('status', 255).notNullable();
    table.foreign('status').references('id').inTable('social_network.status');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('friendship');
};
