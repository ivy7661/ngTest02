import { style } from '@angular/animations';
import { Component,Output,EventEmitter, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, HostBinding, HostListener, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { Subject,fromEvent,Subscription,of, interval, pairwise, take } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent implements OnChanges {
  @Input() childCount!:number;
  @Input() value!:string;
  @ViewChild('hoverText') hoverText!: ElementRef;
  @ViewChild('testListen') testListen!: ElementRef;
  @Input() countNum!: Signal<number>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSignal']) {
      // 取得 signal 的最新值
      // this.countNum = this.countNum.get();
    }
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.hoverText.nativeElement.style.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverText.nativeElement.style.backgroundColor = 'lightgreen';
  }

}
