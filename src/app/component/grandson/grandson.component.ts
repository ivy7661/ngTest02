import { Component, DestroyRef, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, } from '@angular/forms';
import { Subject } from 'rxjs';
import { ISilkscreenData } from '../../@models/rule.model';
import { NgIf } from '@angular/common';
import { ProductService } from '../../@service/product.service';

@Component({
  selector: 'app-grandson',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule, NgIf],
  templateUrl: './grandson.component.html',
  styleUrl: './grandson.component.scss'
})
export class GrandsonComponent implements OnInit {
  @Input() public grandsonProductData:IProduct = {
    id: null,
    name: '',
    method: ''
  }

  @Input() public isSkipped!: boolean;
  @Input() public silkscreenUnit = 'mm';
  public currentMode = 'edit';
  public styleForm!: FormGroup;
  public productService = inject(ProductService);
  // public setRuleItemEdit$ = this.ruleItemService.setRuleItemEdit$;
  private destroyRef = inject(DestroyRef);
  private destroyed$ = new Subject();
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
        Value: 0.9,
        GradeLevelList: []
      },
      RadiusSize: {
        Method: 'ConstantValue',
        Value: 0.2,
        GradeLevelList: []
      }
    }
  };

  public chamferSizeValue!: number;
  public radiusSizeValue!: number;
  public ruleSubject = this.productService.ruleSubject;

  ngOnInit(): void {


    this.setStyleRule();
    this.updateFormControlState();
    this.chamferSizeValue = this.silkscreenData.SilkscreenPin1Mark?.ChamferSize?.Value || 0;
    this.radiusSizeValue = this.silkscreenData.SilkscreenPin1Mark?.RadiusSize?.Value || 0;

    this.destroyRef.onDestroy(() => {
      this.destroyed$.next('');
      this.destroyed$.complete();
    });

    this.ruleSubject.subscribe(res => {
      this.silkscreenData = this.productService.silkscreenData;
      this.setStyleRule();
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentMode']) {
      this.updateFormControlState();
    }
  }

  // public setCurrentMode() {
  //   this.setRuleItemEdit$.pipe(takeUntil(this.destroyed$)).subscribe(res => {
  //     this.currentMode = res;
  //   });
  // }

  private updateFormControlState() {
    const isEditMode = this.currentMode === 'edit';
    const controls = ['lineWidth', 'expand', 'airGap', 'chamfer', 'semicircle', 'length'];

    controls.forEach(controlName => {
      const control = this.styleForm.get(controlName);
      isEditMode ? control?.enable() : control?.disable();
    });
  }



  // public setMarkStyle(style: string) {
  //   if (!this.silkscreenData.SilkscreenPin1Mark) {
  //     this.silkscreenData.SilkscreenPin1Mark = {
  //       Style: '',
  //     };
  //   }
  //   this.silkscreenData.SilkscreenPin1Mark.Style = style;
  // }

  public onChamferSizeValueChange(value: number) {
    if (this.silkscreenData.SilkscreenPin1Mark && this.silkscreenData.SilkscreenPin1Mark.ChamferSize) {
      this.silkscreenData.SilkscreenPin1Mark.ChamferSize.Value = value;
    }

    console.log(this.silkscreenData.SilkscreenPin1Mark.ChamferSize.Value);
  }

  public onRadiusSizeValueChange(value: number) {
    if (this.silkscreenData.SilkscreenPin1Mark && this.silkscreenData.SilkscreenPin1Mark.RadiusSize) {
      this.silkscreenData.SilkscreenPin1Mark.RadiusSize.Value = value;
    }
  }

  public setStyleRule(): void {
    this.styleForm = new FormGroup({
      chamfer: new FormControl(
        this.silkscreenData.SilkscreenPin1Mark?.ChamferSize?.Value, [
          this.greaterThanZeroValidator()
      ]),
      semicircle: new FormControl(
        this.silkscreenData.SilkscreenPin1Mark?.RadiusSize?.Value, [
          this.greaterThanZeroValidator()
      ]),
    });
  }

  public greaterThanZeroValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value > 0 ? null : { greaterThanZero: true };
    };
  }

  public logValue() {


  }
}
