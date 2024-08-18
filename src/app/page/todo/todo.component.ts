import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodoStatusType } from '../../models/todo.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoService } from '../../@service/todo.service';
import { TodoDirective } from '../../@directive/todo.directive';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf ,FormsModule,HttpClientModule, TodoDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  private todoService = inject(TodoService);
  public title:string='OneTodo';
  public placeholder:string = "What needs to be done?";
  public TodoStatusType = TodoStatusType;
  public todoInputModel = '';

  constructor () {}

  public getData() {
    this.todoService.getData();
  }

  public toggleAll() {
    this.todoService.toggleAll();
  }
  public clickCheck(todo: Todo) {
    this.todoService.clickCheck(todo);
  }

  get nowTodoList() {
    return this.todoService.nowTodoList;
  }

  get todoActive(): Todo[] {
    return this.todoService.todoActive;
  }

  get todoCompleted(): Todo[] {
    return this.todoService.todoCompleted;
  }

  get toggleAllBtn() {
    return this.todoService.toggleAllBtn;
  }

  get nowTodoStatusType() {
    return this.todoService.nowTodoStatusType
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  add() {
    this.todoService.add(this.todoInputModel);
    this.todoInputModel = '';
  }

  edit(todo: Todo) {
    todo.editing = true;
  }

  update(todo: Todo) {
    this.todoService.update(todo);
  }

  setTodoStatusType(type: number) {
    this.todoService.setTodoStatusType(type);
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }


}
