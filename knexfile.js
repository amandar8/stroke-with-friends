// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stroke_with_friends'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};