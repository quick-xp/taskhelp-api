import { Task } from '../../domain/models/Task'

export abstract class ITaskRepository {
  abstract async persist(task: Task): Promise<Task>
  abstract async find(id: number): Promise<Task>
  abstract async findAll(): Promise<Array<Task>>
}
