import { Task } from '../../domain/models/Task'

export abstract class ITaskRepository {
  abstract persist(task: Task): any
  abstract find(id: number): Task
}
