import express = require('express')
import { TasksController } from '../interfaces/controllers/TasksController'

const tasksController = new TasksController()
let router = express.Router()

router.post('/task', async (req: express.Request, res: express.Response) => {
  let result = await tasksController.createTask(req, res)
  res.send(result)
})

export default router
