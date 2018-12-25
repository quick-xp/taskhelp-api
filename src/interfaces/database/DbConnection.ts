import mysql from 'mysql'
import app from '../../server'

let config = {}

app.configure('development', () => {
  config = require('../../../database.json').dev
})

let pool = mysql.createPool({
  connectionLimit: 10,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})
