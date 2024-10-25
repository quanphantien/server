require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: `${process.env.POSTGRES_DB}`,
      user:     `${process.env.POSTGRES_USER}`,
      password: `${process.env.POSTGRES_PASSWORD}`
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
}