import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IRuleItemContainer } from '../@models/product.model';
import { ISilkscreenData } from '../@models/rule.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public ruleSubject = new Subject();

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

  public emitMode() {
    this.ruleSubject.next('edit');
  }

  public silkscreenData: ISilkscreenData = {
    ConditionList: [],
    Name: 'Silkscreen1',
    ObjectType: 'Line',
    Layer: {
      MainLayer: 'PACKAGE GEOMETRY',
      SubLayer: 'SILKSCREEN_TOP'
    },
    LineWidth: {
      Method: 'ConstantValue',
      Value: 0
    },
    LineFont: 'Solid',
    FillStyle: 'Null',
    ObjectForm: 'Normal',
    ConerLMarkCornerList: [
      'LeftUp',
      'LeftDown',
      'RightUp',
      'RightDown'
    ],
    CornerLMarkSize: 0.2,
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
      PadStackList: [
        {
          PadLayer: {
            MainLayer: 'BeginLayer',
            SubLayer: 'RegularPad'
          },
          PadType: 'ALLTYPE',
          Method: 'AirGap',
          Value: {
            Method: 'ConstantValue',
            Value: 0.2
          }
        }
      ],
    },
    KeepDistanceFromPadstackList: [
      {
        PadLayer: {
          MainLayer: 'BeginLayer',
          SubLayer: 'RegularPad'
        },
        PadType: 'ALLTYPE',
        Method: 'AirGap',
        Value: {
          Method: 'ConstantValue',
          Value: 0.2
        }
      }
    ],
    SilkscreenPin1Mark: {
      Style: 'Semicircle',
      ChamferSize: {
        Method: 'ConstantValue',
        Value: 0.2,
        GradeLevelList: []
      },
      RadiusSize: {
        Method: 'ConstantValue',
        Value: 0.2,
        GradeLevelList: []
      }
    }
  };
}
