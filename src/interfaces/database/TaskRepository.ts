import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../../application/repositories/ITaskRepository'
import pool from './DbConnection'

export class TaskRepository extends ITaskRepository {
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
      let task = new Task()

      task.setId(m.id)
      task.setTitle(m.title)
      task.setDescription(m.description)

      return task
    })

    return results
  }

  async persist(task: Task): Promise<Task> {
    let result = await pool.query('insert into tasks SET ?', task)
    task.setId(result.insertId)
    return task
  }
}
