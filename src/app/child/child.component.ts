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
  
  public source:Subject<string>;
  public clickSubscription!: Subscription;


  constructor() {
    this.source = new Subject<string>();
  }

  ngOnInit(): void {
    this.source.subscribe({
      next:value =>console.log(value),
      error:err => console.log('Error:',err),
      complete:() => console.log('complete')
    })

    this.source.next('hello');
    this.source.next('world');

    this.source.complete;


    const source = fromEvent(document, 'click');
    this.clickSubscription = source.subscribe((event: Event) => {
      console.log('Document clicked!', event);
    });
  }

  ngOnDestroy():void {
    this.source.unsubscribe();
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }


}
