import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Subject,fromEvent,Subscription,of } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent implements OnInit{
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
  
  public clickSubscription!: Subscription;


  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy():void {
    
  }


}
