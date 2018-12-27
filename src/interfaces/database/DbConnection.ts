import mysql from 'mysql'
import dotenv from 'dotenv'
import util from 'util'
// import app from '../../server'

// let env = app.get('env')
let config
let pool: any
dotenv.config()

// if (env === 'development') {
pool = mysql.createPool({
  connectionLimit: 5,
  host: process.env.DB_HOST_DEV,
  user: process.env.DB_USER_DEV,
  password: process.env.DB_PASSWORD_DEV,
  database: process.env.DB_NAME_DEV
})

pool.query = util.promisify(pool.query)
// } else if (env === 'test') {
//  pool = mysql.createPool({
//    connectionLimit: 5,
//    host: env.DB_HOST_TEST,
//    user: env.DB_HOST_TEST,
//    password: env.DB_PASSWORD_TEST,
//    database: env.DB_NAME_TEST
//  })
// }

// pool event
pool.on('connection', (connection: any) => {
  console.log('mysql connection create')
})

export default pool
