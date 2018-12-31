export class Task {
  private _id: number
  private _title: string
  private _description: string

  get id(): number {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get title(): string {
    return this._title
  }

  set title(title: string) {
    this._title = title
  }

  get description(): string {
    return this._description
  }

  set description(description: string) {
    this._description = description
  }

  constructor(title: string = null, description: string = null) {
    this._title = title
    this._description = description
  }
}
