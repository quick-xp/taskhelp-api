import { TaskSerializer } from '../serializers/TaskSerializer'
import { CreateTask } from '../../usecases/CreateTask'
import { TaskRepository } from '../database/TaskRepository'

export class TasksController {
  private _taskSerializer: TaskSerializer
  private _taskRepository: any

  constructor() {
    this._taskSerializer = new TaskSerializer()
    this._taskRepository = new TaskRepository()
  }

  async createTask(request: any, response: any) {
    // const { title, description } = request.payload
    const useCase = new CreateTask(this._taskRepository)
    let result = await useCase.execute('test', 'hoge')
    console.log(result)
    return this._taskSerializer.serialize(result)
  }
}
