import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgModel, ValidationErrors } from '@angular/forms';
import { JsonPipe, NgClass, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { NgIf } from '@angular/common';
import { ISilkscreenData, IRuleItem } from '../../@models/method-data.interface';
import { MethodComponent } from "../../component/method/method.component";
import { SetMethodService } from '../../@service/set-method.service';

interface IData {
  padstackList?: IPadstackItem;
}

interface IPadstackItem {
  padstack: string;
  airGap: number;
}
interface IShowAlert {
  mainLayer: boolean;
  basedOn: boolean;
  normalAirGap: boolean;
  rectangleAirGap: boolean;
  length: boolean;
  chamferSize: boolean;
  radiusSize: boolean;
}

@Component({
  selector: 'app-driven-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, MethodComponent],
  templateUrl: './driven-form.component.html',
  styleUrl: './driven-form.component.scss'
})
export class DrivenFormComponent implements OnInit {
  public setMethodService = inject(SetMethodService);
  public methodSubject$ = this.setMethodService.methodSubject$
  public currentMode = 'edit';
  public showAlert = {
    mainLayer: false,
    basedOn: false,
    normalAirGap: false,
    rectangleAirGap: false,
    length: false,
    chamferSize: false,
    radiusSize: false,
  }
  public method = 'CornerLMark'; // Normal, Rectangle, CornerLMark
  public mainLayerList = [
    'Package Geometry',
    'Package Geometry02'
  ];

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
      ConditionList: [],
      Name: 'Silkscreen1',
      ObjectType: 'Line',
      Layer: {
        MainLayer: 'PACKAGE GEOMETRY',
        SubLayer: 'SILKSCREEN_TOP'
      },
      LineWidth: {
        Method: 'ConstantValue',
        Value: 0.02
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
          }
        ],
        PadStackList: [
          {
            PadLayer: {
              MainLayer: 'BeginLayer',
              ItemLayer: 'RegularPad'
            },
            PadType: 'ALLTYPE',
            Method: 'AirGap',
            Value: {
              Method: 'ConstantValue',
              Value: 0.7
            }
          }
        ],
      },
      KeepDistanceFromPadstackList: [
        {
          PadLayer: {
            MainLayer: 'BeginLayer',
            ItemLayer: 'RegularPad'
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
        Style: 'Chamfer',
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
    }

    ngOnInit(): void {
      this.methodSubject$.subscribe(res => {
        this.method = res as string;
      })
    }


  public validateNegative(model: NgModel, controlName: keyof IShowAlert): void {
    const value = model.value;

    if (value < 0) {
      model.control.setErrors({ min: { value } });
    } else if (value >= 0 && model.control.hasError('min')) {
      model.control.setErrors(null);
    }

    this.setAlertError(model.errors, controlName);
  }

  public validateZeroAndNegative(model: NgModel, controlName: keyof IShowAlert): void {
    const value = model.value;

    if (value <= 0) {
      model.control.setErrors({ positive: { value } });
    } else if (value > 0 && model.control.hasError('positive')) {
      model.control.setErrors(null);
    }

    this.setAlertError(model.errors, controlName);
  }

  public setAlertError(errors: ValidationErrors | null, controlName: keyof IShowAlert): void {
    this.showAlert[controlName] = !!errors;
  }

  public isInputInvalid(errors: any): boolean {
    return errors !== null;
  }

  get normalAirGap() {
    return this.silkscreenData.KeepDistanceFromPadstackList[0].Value.Value as number;
  }

  set normalAirGap(value: number) {
    if (this.silkscreenData.KeepDistanceFromPadstackList[0]) {
      this.silkscreenData.KeepDistanceFromPadstackList[0].Value.Value = value;
    }
  }

  get rectangleAirGap() {
    return this.silkscreenData.BaseObject.PadStackList[0].Value.Value as number;
  }

  set rectangleAirGap(value: number) {
    if (this.silkscreenData.BaseObject.PadStackList[0]) {
      this.silkscreenData.BaseObject.PadStackList[0].Value.Value = value;
    }
  }

  get lengthAirGap() {
    return this.silkscreenData.CornerLMarkSize as number;
  }

  set lengthAirGap(value: number) {
    if (this.silkscreenData.CornerLMarkSize) {
      this.silkscreenData.CornerLMarkSize = value;
    }
  }

  get chamferSizeValue() {
    return this.silkscreenData.SilkscreenPin1Mark.ChamferSize?.Value as number;
  }

  set chamferSizeValue(value: number) {
    if (this.silkscreenData.SilkscreenPin1Mark.ChamferSize) {
      this.silkscreenData.SilkscreenPin1Mark.ChamferSize.Value = value;
    }
  }

  public setMarkStyle(style: string) {
    this.silkscreenData.SilkscreenPin1Mark = {
      Style: style
    };
  }

  public setProperty(property: string, value: string) {
    switch (property) {
      case 'mainLayer':
        this.silkscreenData.Layer.MainLayer = value;
        this.showAlert.mainLayer = false;
        break;
    }
  }

  public setBasedOn(optionItem: IRuleItem) {
    // 需再確認 basedOn option 格式 (baseObject)
    this.silkscreenData.BaseObject.RuleItemList.push(optionItem);
    this.showAlert.basedOn = false;
  }

  public removeBasedOn(optionItemName: string) {
    const index = this.silkscreenData.BaseObject.RuleItemList.findIndex(item => item.Name === optionItemName);
    if (index !== -1) {
      this.silkscreenData.BaseObject.RuleItemList.splice(index, 1);
    }
  }

  public hasBasedOnItem(optionItem: string): boolean {
    return this.silkscreenData.BaseObject.RuleItemList.some(item => item.Name === optionItem);
  }
}
