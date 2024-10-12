import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GrandsonComponent } from '../grandson/grandson.component';
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { MethodComponent } from '../method/method.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, GrandsonComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, MethodComponent, NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})

export class ChildComponent {
  @Input() public name!: string;
  @Output() public nameChange = new EventEmitter<string>();

  public onNameChange(name: string) {
    this.nameChange.emit(name);
  }
}
