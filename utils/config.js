require('dotenv').config()

const PORT = process.env.PORT
const MYSQL_CONFIG = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}

module.exports = {
  PORT,
  MYSQL_CONFIG
}