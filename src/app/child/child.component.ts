import { Component,Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  @Output() rxMessageEvent = new Subject<string>();

  public isTrue:boolean=false;

  sendMessage() {
    this.messageEvent.emit('Hello from child!')
  }
  useRxMessage() {
    this.rxMessageEvent.next('Rx message!')
  }
  changeColor() {
    this.isTrue=true;
  }
}
