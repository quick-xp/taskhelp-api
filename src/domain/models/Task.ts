export class Task {
  private id: number
  private title: string
  private description: string

  getTitle() {
    return this.title
  }

  getDescription() {
    return this.description
  }

  constructor(title: string, description: string) {
    this.title = title
    this.description = description
  }
}
