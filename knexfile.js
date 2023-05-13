module.exports = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: './data/db.sqlite3'
  },
  migrations: {
    tableName: "knex_migrations",
  }
}
