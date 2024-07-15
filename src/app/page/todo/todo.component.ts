import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodoStatusType } from '../../models/todo.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf ,FormsModule,HttpClientModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  public title:string='OneTodo';
  public placeholder:string = "What needs to be done?";
  public toggleAllBtn= false;
  public nowTodoStatusType = TodoStatusType.All;
  public TodoStatusType = TodoStatusType;
  public todoInputModel = '';
  public todoDataList: Todo[] = [];

  constructor (private http:HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    this.http.get<Todo[]>('/assets/todo.json').subscribe(data => {
      this.todoDataList = data;
    })
  }

  public toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.status = this.toggleAllBtn;
    })

    this.http.put('/assets/todo.json' + this.toggleAllBtn, null).subscribe();
  }
  public clickCheck(todo: Todo) {
    this.http.put('/assets/todo.json' + todo.todoId, todo).subscribe();
    todo.status = !todo.status;
    if(this.todoCompleted.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    }else {
      this.toggleAllBtn = false;
    }
  }

  delete(todo: Todo) {
    this.http.delete('/assets/todo.json' + todo.todoId).subscribe();
    this.todoDataList = this.todoDataList.filter(data => data !== todo);
  }

  add() {
    const todo: Todo = {
      status: false,
      thing: this.todoInputModel,
      editing: false,
      todoId: new Date().getTime()
    }
    this.http.post('/assets/todo.json', todo).subscribe(()=> {
      this.getData();
    });
    this.todoDataList.push(todo)
    this.todoInputModel = '';
  }

  edit(todo: Todo) {
    todo.editing = true;
  }

  update(todo: Todo) {
    todo.editing = false;
    this.http.put('/assets/todo.json' + todo.todoId, todo).subscribe();
  }

  setTodoStatusType(type: number) {
    this.nowTodoStatusType = type;
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
      console.log(!data.status);
      return !data.status
    })
  }

  get todoCompleted(): Todo[] {
    return this.todoDataList.filter(data => data.status)
  }

  clearCompleted() {
    this.todoDataList = this.todoActive;
  }
}
