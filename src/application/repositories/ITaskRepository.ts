import { Task } from '../../domain/models/Task'

export abstract class ITaskRepository {
  abstract async findAll(): Promise<Array<Task>>
  abstract async find(id: number): Promise<Task>
  abstract async persist(task: Task): Promise<Task>
  abstract async merge(task: Task): Promise<Task>
  abstract async delete(task: Task): Promise<Task>
}
