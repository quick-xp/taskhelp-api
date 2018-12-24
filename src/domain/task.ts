class Task {
  private _id: number
  private _title: string
  private _description: Text

  get title() {
    return this._title
  }

  get description() {
    return this._description
  }

  constructor(id: number = null, title: string, description: Text) {
    this._id = id
    this._title = title
    this._description = description
  }
}
