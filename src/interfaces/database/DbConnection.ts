import mysql from 'mysql'
import dotenv from 'dotenv'
import app from '../../server'

let env = app.get('env')
let config
let pool
dotenv.config()
if (env === 'development') {
  let pool = mysql.createPool({
    connectionLimit: 5,
    host: env.DB_HOST_DEV,
    user: env.DB_HOST_USER,
    password: env.DB_PASSWORD_DEV,
    database: env.DB_NAME_DEV
  })
} else if (env === 'test') {
  let pool = mysql.createPool({
    connectionLimit: 5,
    host: env.DB_HOST_TEST,
    user: env.DB_HOST_TEST,
    password: env.DB_PASSWORD_TEST,
    database: env.DB_NAME_TEST
  })
}

export default pool
