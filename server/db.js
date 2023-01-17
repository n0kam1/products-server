const { Pool } = require('pg')

const pool = new Pool({
  user: "aristotle",
  database: "products"
})

module.exports = pool;