import { TaskSerializer } from '../serializers/TaskSerializer'
import { CreateTask } from '../../application/usecases/CreateTask'
import { TaskRepository } from '../database/TaskRepository'

export class TasksController {
  private taskSerializer: TaskSerializer
  private taskRepository: any

  constructor() {
    this.taskSerializer = new TaskSerializer()
    this.taskRepository = new TaskRepository()
  }

  async createTask(request: any, response: any) {
    const { title, description } = request.body
    const useCase = new CreateTask(this.taskRepository)
    let result = await useCase.execute(title, description)
    console.log(result)
    return this.taskSerializer.serialize(result)
  }
}
