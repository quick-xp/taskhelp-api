import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../repositories/ITaskRepository'

export class UpdateTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute(id: number, title: string, description: string) {
    let task = await this.taskRepository.find(id)
    task.title = title
    task.description = description
    return this.taskRepository.merge(task)
  }
}
