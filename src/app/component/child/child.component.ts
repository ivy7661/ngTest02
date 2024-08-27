import { style } from '@angular/animations';
import { Component,Output,EventEmitter, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, HostBinding, HostListener, Signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/product.model';
import { log } from 'console';
import { Subject,fromEvent,Subscription,of, interval, pairwise, take } from 'rxjs';
import { GrandsonComponent } from '../grandson/grandson.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { MethodComponent } from '../method/method.component';
import { ProductService } from '../../@service/product.service';

type IMethodMode = 'new' | 'view' | 'edit';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, GrandsonComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, MethodComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent implements OnInit, OnChanges {
  @Input() public productData: IProduct = {
    id: null,
    name: '',
    method: '',
    width: null,
    height: null
  };
  public productService = inject(ProductService);
  public childClerk = {
    name:'',
    sales:0
  }

  @Input() public currentMode: IMethodMode = 'edit';

  ngOnInit(): void {
    // console.log(this.productData);
    this.childClerk = this.productService.clerk;
  }

  ngOnChanges(): void {
    // console.log(this.productData);
  }

  public setMethod(method: string) {
    this.productData.method = method;
  }



}
