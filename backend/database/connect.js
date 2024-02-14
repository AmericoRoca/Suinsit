const { Pool } = require('pg');

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Predeterminada", //Contraseña predeterminada, hay que cambiarla en Postgres para que no cambie con cada pull
  database: "postgres"
});

module.exports = pool;