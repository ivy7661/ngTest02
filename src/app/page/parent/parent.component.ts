import { AfterViewInit, Component, HostBinding, HostListener, inject, Input, OnInit, signal, viewChild, ViewChild } from '@angular/core';
import { ChildComponent } from '../../component/child/child.component';
import { UserService } from '../../user.service';
import { ProductService } from './../../@service/product.service';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/product.model';
import { Signal } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  @Input() productService = inject(ProductService);
  @ViewChild(ChildComponent) child!: ChildComponent;
  public count = signal(0);

  public parentCount = 0;
  public value = '';

  public productData: IProduct= {
    id: null,
    name: '',
    method:''
  };
  public parentClerk = {
    name:'',
    sales: 0
  };


  ngOnInit(): void {
  }



}
