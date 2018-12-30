import { TaskSerializer } from '../serializers/TaskSerializer'
import { CreateTask } from '../../application/usecases/CreateTask'
import { ListTasks } from '../../application/usecases/ListTasks'
import { TaskRepository } from '../database/TaskRepository'

export class TasksController {
  private taskSerializer: TaskSerializer
  private taskRepository: TaskRepository

  constructor() {
    this.taskSerializer = new TaskSerializer()
    this.taskRepository = new TaskRepository()
  }

  async findAllTasks(req: any, res: any) {
    const useCase = new ListTasks(this.taskRepository)
    let results = await useCase.execute()
    return this.taskSerializer.serialize(results)
  }

  async createTask(req: any, res: any) {
    const { title, description } = req.body
    const useCase = new CreateTask(this.taskRepository)
    let result = await useCase.execute(title, description)
    return this.taskSerializer.serialize(result)
  }
}
