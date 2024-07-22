// json-server --watch db.json --id todoId --delay 1000
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  public url = 'http://localhost:3000/todo2_16'

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(this.url, todo);
  }

  editTodo(todo: Todo) {
    console.log(todo);

    return this.http.put(`${this.url}/${todo.todoId}`, todo)
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(`${this.url}/${todo.todoId}`)
  }

  changeAllStatus(status: boolean) {
    return this.http.put(`${this.url}/Status/${status}`, null)
  }

  deleteCompletedTodo() {
    return this.http.delete(`${this.url}/clearCompleted`)
  }
}
