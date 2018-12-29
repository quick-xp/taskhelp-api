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

  async persist(task: Task): Promise<Task> {
    let result = await pool.query('insert into tasks SET ?', task)
    task.setId(result.insertId)
    return task
  }
}
