/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.string('postId', 255).unique();
    table.string('userId', 255).notNullable();
    table.string('image', 255).notNullable();
    table.string('description', 255).notNullable();
    table.integer('likes', 255).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};
