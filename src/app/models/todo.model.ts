export interface Todo {
  status: boolean;
  thing: string;
  editing: boolean;
  todoId: number;
}

export class TodoClass {
  status: boolean;
  thing: string;

  constructor(_thing: string, _status: boolean = false) {
    this.thing = _thing;
    this.status = _status
  }

  toggle() {
    this.status = !this.status;
  }
}

export enum TodoStatusType {
  All,
  Active,
  Completed
}
