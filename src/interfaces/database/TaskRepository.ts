import { Task } from '../../domain/models/Task'
import pool from './DbConnection'

export class TaskRepository {
  find(id) {
    pool.query('select * from tasks where id = 1', (error, results, fields) => {
      if (error) throw error
      return results
    })
  }
}
