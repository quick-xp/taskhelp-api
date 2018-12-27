import { Task } from '../../domain/models/Task'
import pool from './DbConnection'
// let pool = require('./DbConnection')

export class TaskRepository {
  find(id: number) {
    pool.query(
      'select * from tasks where id = 1',
      (error: any, results: any, fields: any) => {
        if (error) throw error
        return results[0]
      }
    )
  }

  persist(task: Task) {
    let r = pool.query(
      'insert into tasks SET ?',
      task,
      (error: any, result: any) => {
        if (error) throw error
        return task
      }
    )
    return r
  }
}
