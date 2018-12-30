export class Task {
  private id: number
  private title: string
  private description: string

  getId() {
    return this.id
  }

  setId(id: number) {
    this.id = id
  }

  getTitle() {
    return this.title
  }

  setTitle(title: string) {
    this.title = title
  }

  getDescription() {
    return this.description
  }

  setDescription(description: string) {
    this.description = description
  }

  constructor(title: string = null, description: string = null) {
    this.title = title
    this.description = description
  }
}
