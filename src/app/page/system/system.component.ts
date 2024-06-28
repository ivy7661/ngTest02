import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [FormsModule],
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
