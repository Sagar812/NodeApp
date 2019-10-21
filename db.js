const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_project',
    password: 'sagar',
    port: '5432'
});

module.exports = {
    query: (text, params, callback) => pool.query(text, params, callback),
};