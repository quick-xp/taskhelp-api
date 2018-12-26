import { TaskSerializer } from '../serializers/TaskSerializer'
import { CreateTask } from '../../usecases/CreateTask'
import { TaskRepository } from '../database/TaskRepository'

export class TasksController {
  private _taskSerializer: any
  private _taskRepository: any

  constructor() {
    this._taskSerializer = new TaskSerializer()
    this._taskRepository = new TaskRepository()
  }

  createTask(request: any, response: any) {
    // const { title, description } = request.payload
    const useCase = new CreateTask(this._taskRepository)
    return useCase
      .execute('test', 'hoge')
      .then((task: any) => this._taskSerializer.serializer(task))
  }
}
