import express from 'express'
import { CreateTask } from './usecases/CreateTask'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  return res.send('Hello Node')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

export default app
