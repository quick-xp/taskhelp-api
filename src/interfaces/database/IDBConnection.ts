export abstract class IDBConnection {
  abstract execute(query: string, params: any): any
}
