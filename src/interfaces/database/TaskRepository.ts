import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../../application/repositories/ITaskRepository'
import pool from './DbConnection'

export class TaskRepository extends ITaskRepository {
  private convertModel(r: any) {
    let task = new Task()

    task.setId(r.id)
    task.setTitle(r.title)
    task.setDescription(r.description)

    return task
  }

  find(id: number): any {
    pool.query(
      'select * from tasks where id = 1',
      (error: any, results: any, fields: any) => {
        if (error) throw error
        return results[0]
      }
    )
  }

  async findAll(): Promise<Array<Task>> {
    let queryResults = await pool.query('select * from tasks')

    let results = []
    results = queryResults.map((m: any) => {
      return this.convertModel(m)
    })

    return results
  }

  async persist(task: Task): Promise<Task> {
    let result = await pool.query('insert into tasks SET ?', task)
    task.setId(result.insertId)
    return task
  }
}
