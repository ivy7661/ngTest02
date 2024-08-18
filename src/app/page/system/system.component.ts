import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [FormsModule,NgIf, NgClass],
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
