import express = require('express')
import { TasksController } from '../interfaces/controllers/TasksController'

const tasksController = new TasksController()
let router = express.Router()

router.get('/tasks', async (req: express.Request, res: express.Response) => {
  let results = await tasksController.findAllTasks(req, res)
  res.send(results)
})

router.post('/tasks', async (req: express.Request, res: express.Response) => {
  let result = await tasksController.createTask(req, res)
  res.send(result)
})

export default router
