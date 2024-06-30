import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-driven-form',
  standalone: true,
  imports: [FormsModule,JsonPipe,NgIf],
  templateUrl: './driven-form.component.html',
  styleUrl: './driven-form.component.scss'
})
export class DrivenFormComponent {
  public myEmail:string = '123@gmail.com'
  public myPassword:string = '12345678'
}
