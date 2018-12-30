import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../repositories/ITaskRepository'

export class DeleteTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute(id: number) {
    let task = await this.taskRepository.find(id)
    return this.taskRepository.delete(task)
  }
}
