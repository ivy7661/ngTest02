import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRuleItemContainer } from '../@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productData = {
    id: 1,
    name: 'wine'
  }

  public clerk = {
    name:'John',
    sales: 100
  }

  public ruleItem: IRuleItemContainer = {
    env: {},
    silkscreenData : {
      BaseObject: {
        RuleItemList: [
          {
            Name: 'Outline',
            Method: 'AirGap',
            Value: {
              Method: 'ConstantValue',
              Value: 0.2
            }
          },
          {
            Name: 'secondOutline',
            Method: 'AirGap',
            Value: {
              Method: 'ConstantValue',
              Value: 0.2
            }
          }
        ],
      }
    }
  }

  public getProductData(): Observable<any> {
    return of(this.productData)
  }

}
