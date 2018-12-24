export class Task {
  private _id: number
  private _title: string
  private _description: string

  getTitle() {
    return this._title
  }

  getDescription() {
    return this._description
  }

  constructor(title: string, description: string) {
    this._title = title
    this._description = description
  }
}
