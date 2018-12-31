import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../../application/repositories/ITaskRepository'
import { IDBConnection } from './IDBConnection'

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
      'insert into tasks (title, description) values (?, ?)',
      [task.title, task.description]
    )
    task.id = result.insertId
    return task
  }

  async merge(task: Task): Promise<Task> {
    let result = await this.connection.execute(
      'update tasks set title = ?, description = ? where id = ?',
      [task.title, task.description, task.id]
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
