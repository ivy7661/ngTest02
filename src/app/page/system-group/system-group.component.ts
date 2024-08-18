import { Component, DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityButtonDirective } from '../../@directive/utility-button.directive';


@Component({
  selector: 'app-system-group',
  standalone: true,
  imports: [UtilityButtonDirective],
  templateUrl: './system-group.component.html',
  styleUrl: './system-group.component.scss'
})
export class SystemGroupComponent {

}
