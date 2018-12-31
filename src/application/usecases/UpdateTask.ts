import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../repositories/ITaskRepository'
import moment from 'moment'

export class UpdateTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute(id: number, title: string, description: string) {
    let task = await this.taskRepository.find(id)
    task.title = title
    task.description = description
    task.updatedAt = moment()
    return this.taskRepository.merge(task)
  }
}
