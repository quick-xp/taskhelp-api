import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../../application/repositories/ITaskRepository'
import { IDBConnection } from './IDBConnection'
import moment from 'moment-timezone'

export class TaskRepository extends ITaskRepository {
  private connection: any

  constructor(connection: IDBConnection) {
    super()
    this.connection = connection
  }

  private convertModel(r: any) {
    let task = new Task()

    task.id = r.id
    task.title = r.title
    task.description = r.description
    task.createdAt = moment.tz(r.created_at, 'UTC')
    task.updatedAt = moment.tz(r.updated_at, 'UTC')

    return task
  }

  async find(id: number): Promise<Task> {
    let queryResults = await this.connection.execute(
      'select * from tasks where id = ? limit 1',
      id
    )
    return this.convertModel(queryResults[0])
  }

  async findAll(): Promise<Array<Task>> {
    let queryResults = await this.connection.execute('select * from tasks')
    let results = []
    results = queryResults.map((m: any) => {
      return this.convertModel(m)
    })

    return results
  }

  async persist(task: Task): Promise<Task> {
    let result = await this.connection.execute(
      'insert into tasks (title, description, created_at, updated_at) values (?, ?, ?, ?)',
      [
        task.title,
        task.description,
        task.getUTCCreatedAt(),
        task.getUTCUpdatedAt()
      ]
    )
    task.id = result.insertId
    return task
  }

  async merge(task: Task): Promise<Task> {
    let result = await this.connection.execute(
      'update tasks set title = ?, description = ?, updated_at = ? where id = ?',
      [task.title, task.description, task.getUTCUpdatedAt(), task.id]
    )
    return task
  }

  async delete(task: Task): Promise<Task> {
    let queryResults = await this.connection.execute(
      'delete from tasks where id = ?',
      task.id
    )
    return this.convertModel(task)
  }
}
