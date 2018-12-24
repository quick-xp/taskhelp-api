import { TaskSerializer } from '../serializers/TaskSerializer'
import { CreateTask } from '../../usecases/CreateTask'

export class UsersController {
  private _taskSerializer

  constructor() {
    this._taskSerializer = new TaskSerializer()
  }

  createTask(request: any) {
    const { title, description } = request.payload
  }
}
