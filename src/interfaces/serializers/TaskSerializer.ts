import { Task } from '../../domain/models/Task'

const _serializeSingleTask = (task: Task) => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    createdAt: task.getFormatCreatedAt(),
    updatedAt: task.getFormatUpdatedAt()
  }
}

export class TaskSerializer {
  serialize(data: any) {
    if (!data) {
      throw new Error('expect data to be not undefined nor null')
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTask)
    }
    return _serializeSingleTask(data)
  }
}
