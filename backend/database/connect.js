const { Pool } = require('pg');

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "29101991Am", 
  database: "postgres",
  port: 5432,
});

module.exports = pool;