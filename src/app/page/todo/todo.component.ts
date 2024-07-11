import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public title:string='OneTodo';
  public placeholder:string = "What needs to be done?";
  public toggleAllBtn= false;
  public check1= false;
  public check2= false;
  public todoDataList = [
    {
      status:true,
      thing:'刷牙',
    },
    {
      status:true,
      thing:'洗臉',
    },
    {
      status:true,
      thing:'吃早餐',
    }
  ]

  public toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.status = this.toggleAllBtn;
    })
  }
  public clickCheck(item: any) {
    item.status = !item.status;
  }
}
