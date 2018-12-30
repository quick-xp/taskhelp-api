import { Task } from '../../domain/models/Task'

export abstract class ITaskRepository {
  abstract async persist(task: Task): Promise<Task>
  abstract find(id: number): Task
}
