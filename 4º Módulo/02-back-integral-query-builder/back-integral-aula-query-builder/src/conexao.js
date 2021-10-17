const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: process.env.PASSWORD,
        database: 'knexjs'
    }
});

module.exports = knex;