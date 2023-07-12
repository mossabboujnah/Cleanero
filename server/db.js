const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'kennwort1',
  host: 'localhost',
  port: 5432,
  database: 'cleanero'
});

module.exports = pool;
