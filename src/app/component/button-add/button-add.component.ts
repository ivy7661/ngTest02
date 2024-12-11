import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-add',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.scss'
})
export class ButtonAddComponent {
  @Input() public btnBackground = '#fa0';
}
