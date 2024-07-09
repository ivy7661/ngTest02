import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public title:string='OneTodo';
  public placeholder:string = "What needs to be done?";
  public toggleAllBtn= false;
  public check1= false;
  public check2= false;

  public toggleAll() {

  }
}
