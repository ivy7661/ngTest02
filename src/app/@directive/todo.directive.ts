import { Directive, ElementRef, HostBinding, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Directive({
  selector: '[appTodo]',
  standalone: true
})
export class TodoDirective {
  // @Input() todo!: string;
  // @Input('status') _status!: boolean;

  // @Output() onEventChange = new EventEmitter();

  // constructor(el: ElementRef) {
  //   if(this._status) {
  //     el.nativeElement.classList.add('hasCompleted');
  //   } else {
  //     el.nativeElement.classList.remove('hasCompleted');
  //   }
  // }

  @Input('status') @HostBinding('class.completed') _status!: boolean;

  constructor(el: ElementRef) {};
}

