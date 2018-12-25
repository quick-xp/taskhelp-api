import mysql from 'mysql'
import app from '../../server'

// let env = app.get('env')
let config
// if (env === 'development') {
config = require('../../../database.json') || {}
console.log(config)
// }

let pool = mysql.createPool({
  connectionLimit: 10,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

export default pool
