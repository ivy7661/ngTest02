import { style } from '@angular/animations';
import { Component,Output,EventEmitter, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, HostBinding, HostListener, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/product.model';
import { log } from 'console';
import { Subject,fromEvent,Subscription,of, interval, pairwise, take } from 'rxjs';
import { GrandsonComponent } from '../grandson/grandson.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, GrandsonComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent implements OnInit, OnChanges {
  @Input() public productData: IProduct = {
    id: null,
    name: ''
  };

  ngOnInit(): void {
    // console.log(this.productData);
  }

  ngOnChanges(): void {
    // console.log(this.productData);
  }

}
