import { Component, OnInit } from '@angular/core';
import { Observable,Subscription,timer,map } from 'rxjs';
import { CommonModule } from '@angular/common';

interface PadLayer {
  MainLayer: string;
  ItemLayer: string;
}

interface Value {
  Value: number;
}

interface ValueWithMethod extends Value {
  Method?: string;
}

interface GradeLevel {
  // Define properties for GradeLevel if any
}

interface ValueWithGradeLevel extends ValueWithMethod {
  GradeLevelList: GradeLevel[];
}

interface KeepDistanceFromPadstack {
  PadLayer: PadLayer;
  Value: Value;
}

interface RuleItem {
  Name: string;
  Value: number;
}

interface BaseObjectItem {
  PadLayer: PadLayer;
  Value: ValueWithMethod;
}

interface BaseObject {
  RuleItemList: RuleItem[];
  PadStackList: BaseObjectItem[];
}

interface SilkScreenPinMark {
  Style: string;
  ChamferSize: ValueWithGradeLevel;
}

interface SilkscreenData {
  KeepDistanceFromPadstackList: KeepDistanceFromPadstack[];
  BaseObject: BaseObject;
  SilkScreenPin1Mark: SilkScreenPinMark;
  ObjectForm: string;
  ConerLMarkCornerList?: string[];
  CornerLMarkSize?: number;
}
@Component({
  selector: 'app-eletronic-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eletronic-clock.component.html',
  styleUrl: './eletronic-clock.component.scss'
})
export class EletronicClockComponent implements OnInit{
  today: Date = new Date();
  public timeObservable$: Observable<Date>= new Observable;
  private subscription: Subscription;

  public silkscreenData: SilkscreenData = {
    KeepDistanceFromPadstackList: [
      {
        PadLayer: {
          MainLayer: 'BeginLayer',
          ItemLayer: 'RegularPad'
        },
        Value: {
          Value: 0.2
        }
      }
    ],
    BaseObject: {
      RuleItemList: [
        {
          Name: 'Outline',
          Value: 0.2
        }
      ],
      PadStackList: [
        {
          PadLayer: {
            MainLayer: 'BeginLayer',
            ItemLayer: 'RegularPad'
          },
          Value: {
            Method: 'ConstantValue',
            Value: 0.2
          }
        }
      ]
    },
    SilkScreenPin1Mark: {
      Style: 'Chamfer',
      ChamferSize: {
        Method: 'ConstantValue',
        Value: 0.2,
        GradeLevelList: []
      }
    },
    ObjectForm: 'CornerLMark',
    ConerLMarkCornerList: [
      'LeftUp',
      'LeftDown',
      'RightUp',
      'RightDown'
    ],
    CornerLMarkSize: 0.2,
  }

  constructor() {
    this.subscription = this.timeObservable$.subscribe();
  }

  ngOnInit(): void {
    this.timeObservable$ = timer(0, 1000).pipe(
      map(() => new Date())
    );

    // 訂閱 Observable 以便可以在 ngOnDestroy 中取消訂閱
    this.subscription = this.timeObservable$.subscribe();
  }

}
