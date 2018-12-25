import express from 'express'
import pool from './interfaces/database/DbConnection'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  pool.query(
    'select id from tasks',
    (error: string, results: any, fields: any) => {
      if (error) throw error
      console.log(results)
    }
  )
  return res.send('Hello Node')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

export default app
