import express = require('express')
import { TasksController } from '../interfaces/controllers/TasksController'

const tasksController = new TasksController()
let router = express.Router()

router.post('/task', (req: express.Request, res: express.Response) => {
  console.log(req.body)
  tasksController.createTask(req, res)
})

export default router
