import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productData = {
    id: 1,
    name: 'wine'
  }

  public getProductData(): Observable<any> {
    return of(this.productData)
  }

}
