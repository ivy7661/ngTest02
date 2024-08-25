import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, FormsModule],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss'
})
export class MethodComponent {
  @Input() public method: string = '';
  @Input() public width?: number | null = null;
  @Input() public height?: number | null = null;

  @Output() widthChange = new EventEmitter<number | null>();
  @Output() heightChange = new EventEmitter<number | null>();

  public onInputChange(type: 'width' | 'height', value: number | null) {
    if (type === 'width') {
      this.widthChange.emit(value);
    } else if (type === 'height') {
      this.heightChange.emit(value);
    }
  }
}
