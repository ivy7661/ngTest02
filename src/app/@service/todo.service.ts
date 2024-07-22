import { inject, Injectable } from '@angular/core';
import { TodoApiService } from './todo-api.service';
import { Todo, TodoStatusType } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoApiService = inject(TodoApiService);

  public toggleAllBtn= false;
  public TodoStatusType = TodoStatusType;
  public nowTodoStatusType = TodoStatusType.All;
  public todoDataList: Todo[] = [];


  constructor() {
    this.getData();
  }

  public getData() {
    this.todoApiService.getData().subscribe(data => {
      this.todoDataList = data;
      console.log(data);

    })
  }

  public toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.status = this.toggleAllBtn;
    })

    this.todoApiService.changeAllStatus(this.toggleAllBtn).subscribe();
  }
  public clickCheck(todo: Todo) {
    this.todoApiService.editTodo(todo).subscribe();
    todo.status = !todo.status;
    if(this.todoCompleted.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    }else {
      this.toggleAllBtn = false;
    }
  }

  get nowTodoList() {
    let list: Todo[] = [];

    switch (this.nowTodoStatusType) {
      case TodoStatusType.Active:
        list = this.todoActive;
        break;
      case TodoStatusType.Completed:
        list = this.todoCompleted;
        break;
      default:
        list = this.todoDataList;
    }
    return list;
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter(data => {
      return !data.status
    })
  }

  get todoCompleted(): Todo[] {
    return this.todoDataList.filter(data => data.status)
  }

  deleteTodo(todo: Todo) {
    this.todoApiService.deleteTodo(todo).subscribe();
    this.todoDataList = this.todoDataList.filter(data => data !== todo);
  }

  add(inputValue: string) {
    const todo: Todo = {
      status: false,
      thing: inputValue,
      editing: false,
      todoId: new Date().getTime()
    }
    this.todoApiService.addTodo(todo).subscribe(()=> {
      this.getData();
    });
    this.todoDataList.push(todo)
  }

  edit(todo: Todo) {
    todo.editing = true;
  }

  update(todo: Todo) {
    todo.editing = false;
    this.todoApiService.editTodo(todo).subscribe();
  }

  setTodoStatusType(type: number) {
    this.nowTodoStatusType = type;
  }

  clearCompleted() {
    this.todoApiService.deleteCompletedTodo().subscribe();
    this.todoDataList = this.todoActive;
  }
}
