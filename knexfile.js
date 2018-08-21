// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_DEVELOPMENT
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};