import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityButtonDirective } from '../../@directive/utility-button.directive';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ProductService } from '../../@service/product.service';
import { ISilkscreenData } from '../../@models/product.model';

interface IBaseOnItem {
  Name: string;
  Method: string;
  Value: IValueDetail;
}

interface IValueDetail {
  Method: string;
  Value: number;
}


@Component({
  selector: 'app-system-group',
  standalone: true,
  imports: [UtilityButtonDirective, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, NgFor],
  templateUrl: './system-group.component.html',
  styleUrl: './system-group.component.scss'
})
export class SystemGroupComponent implements OnInit{
  public productService = inject(ProductService);
  public basedOnList = [
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
  ]

  public silkscreenData: ISilkscreenData = {
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
        // {
        //   Name: 'secondOutline',
        //   Method: 'AirGap',
        //   Value: {
        //     Method: 'ConstantValue',
        //     Value: 0.2
        //   }
        // }
      ],
    }
  }

  ngOnInit(): void {
    this.silkscreenData = this.productService.ruleItem.silkscreenData;
  }

  public setBasedOn(item: IBaseOnItem) {
    // 需再確認 basedOn option 格式 (baseObject)

    this.silkscreenData.BaseObject.RuleItemList.push(item);
    // this.showAlert.basedOn = false;
  }

  public removeBasedOn(optionItem: string) {
    const index = this.silkscreenData.BaseObject.RuleItemList.findIndex(item => item.Name === optionItem);
    if (index !== -1) {
      this.silkscreenData.BaseObject.RuleItemList.splice(index, 1);
    }
  }

  public hasBasedOnItem(optionItem: string): boolean {
    return this.silkscreenData.BaseObject.RuleItemList.some(item => item.Name === optionItem);
  }

}
