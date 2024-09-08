import { NgIf } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'inside-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './inside-form.component.html',
  styleUrl: './inside-form.component.scss'
})
export class InsideFormComponent {
  @Input() value02!: string;
}
