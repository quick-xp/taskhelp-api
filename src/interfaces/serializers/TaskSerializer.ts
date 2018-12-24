const _serializeSingleTask = task => {
  return {
    id: task.getId,
    title: task.getTitle,
    description: task.getDescription
  }
}

export class TaskSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('expect data to be not undefined nor null')
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTask)
    }
    return _serializeSingleTask
  }
}
