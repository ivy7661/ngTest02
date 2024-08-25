import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grandson',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grandson.component.html',
  styleUrl: './grandson.component.scss'
})
export class GrandsonComponent {
  @Input() public grandsonProductData:IProduct = {
    id: null,
    name: ''
  }

}
