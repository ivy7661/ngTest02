import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {

  public data = {
    FirstName: '', LastName: '',
    Component: [],
    OtherComponent: ''
  };

}
