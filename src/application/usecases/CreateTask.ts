import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../repositories/ITaskRepository'
import moment from 'moment'

export class CreateTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute(title: string, description: string) {
    let task = new Task(title, description)
    task.createdAt = moment()
    task.updatedAt = moment()
    return this.taskRepository.persist(task)
  }
}
