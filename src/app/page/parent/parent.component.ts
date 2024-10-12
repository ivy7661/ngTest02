import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from '../../component/child/child.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule, NgIf, NgFor],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  public name = 'John';
}
