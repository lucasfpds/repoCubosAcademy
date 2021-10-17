// const { Pool } = require('pg');
require("dotenv").config();

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'market_cubos',
//     password: process.env.PASSWORD,
//     port: 5432
// });

// const query = (text, param) => {
//     return pool.query(text, param);
// }

// module.exports = {
//     query
// }

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: process.env.PASSWORD,
        database: 'market_cubos'
    }
});

module.exports = knex;