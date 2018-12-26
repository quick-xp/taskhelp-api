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
}
