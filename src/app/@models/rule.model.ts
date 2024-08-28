export interface ISilkscreenData {
  ConditionList: any[]; // 如果有特定的條件結構，則將 `any` 替換為正確的類型
  Name: string;
  ObjectType: string;
  Layer: ILayer;
  LineWidth: ILineWidth;
  LineFont: string;
  FillStyle: string;
  ObjectForm: string;
  ConerLMarkCornerList: string[];
  CornerLMarkSize: number;
  BaseObject: IBaseObject;
  KeepDistanceFromPadstackList: IPadstackDistance[];
  SilkscreenPin1Mark: IPinMark;
}

export interface ILayer {
  MainLayer: string;
  SubLayer: string;
}

export interface ILineWidth {
  Method: string;
  Value: number;
}

export interface IBaseObject {
  RuleItemList: IRuleItem[];
  PadStackList: IPadstack[];
}

export interface IRuleItem {
  Name: string;
  Method: string;
  Value: IConstantValue;
}

export interface IPadstack {
  PadLayer: ILayer;
  PadType: string;
  Method: string;
  Value: IConstantValue;
}

export interface IPadstackDistance {
  PadLayer: ILayer;
  PadType: string;
  Method: string;
  Value: IConstantValue;
}

export interface IConstantValue {
  Method: string;
  Value: number;
}

export interface IPinMark {
  Style: string;
  ChamferSize: ISizeDetail;
  RadiusSize: ISizeDetail;
}

export interface ISizeDetail {
  Method: string;
  Value: number;
  GradeLevelList: any[]; // 如果有具體的等級層級結構，可以替換 `any` 為具體的類型
}
