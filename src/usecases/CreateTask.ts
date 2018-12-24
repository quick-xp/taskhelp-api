import {Task} from '../domain/models/Task'

export class CreateTask {
  private _taskRepository

  constructor(taskRepository) {
    this._taskRepository = taskRepository
  }

  execute(title, description) {
    let task = new Task(title, description)
    return this._taskRepository.persist(task)
  }
}