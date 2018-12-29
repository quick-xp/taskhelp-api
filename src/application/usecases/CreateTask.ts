import { Task } from '../../domain/models/Task'
import pool from '../../interfaces/database/DbConnection'
import { ITaskRepository } from '../repositories/ITaskRepository'

export class CreateTask {
  private _taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this._taskRepository = taskRepository
  }

  execute(title: string, description: string) {
    let task = new Task(title, description)
    return this._taskRepository.persist(task)
  }
}
