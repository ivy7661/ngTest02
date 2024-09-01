export interface IRuleItemStructure {
  Environment: object;
  Direction: object;
  Outline: object;
  Padstack: object;
  Silkscreen: ISilkscreen;
  Layer: object;
  SymbolOriginal: object;
  Pin1Mark: object;
  Sign: object;
  RefText: object;
  SymInfo: object;
  Dimension: object;
  FootprintNaming: object;
  SaveFile: object;
}

export interface ISilkscreen {
  originData: ISilkscreenData;
  editData: ISilkscreenData;
}

export interface ISilkscreenData {
  ConditionList: any[];
  Name: string;
  ObjectType: string;
  Layer: ILayer;
  LineWidth: ILineWidth;
  LineFont: string;
  FillStyle: string;
  ObjectForm: string;
  ConerLMarkCornerList?: string[];
  CornerLMarkSize?: number;
  BaseObject: IBaseObject;
  KeepDistanceFromPadstackList: IKeepDistanceFromPadstack[];
  SilkscreenPin1Mark: ISilkscreenPin1Mark;
}

export interface ISilkscreenPin1Mark {
  Style: string | null;
  ChamferSize?: ISize;
  RadiusSize?: ISize;
}

export interface ISize {
  Method: 'ConstantValue';
  Value: number;
  GradeLevelList: any[];
}


export interface IKeepDistanceFromPadstack {
  PadLayer: IPadLayer;
  PadType: string;
  Method: string;
  Value: IValue;
}

export interface ILayer {
  MainLayer: string;
  SubLayer: string;
}

export interface ILineWidth {
  Method: string;
  Value: number;
}

export interface IValue {
  Method: string;
  Value: number | null;
}

export interface IRuleItem {
  Name: string;
  Method: string;
  Value: IValue;
}

export interface IPadLayer {
  MainLayer: string;
  ItemLayer: string;
}

export interface IPadStack {
  PadLayer: IPadLayer;
  PadType: string;
  Method: string;
  Value: IValue;
}

export interface IBaseObject {
  RuleItemList: IRuleItem[];
  PadStackList: IPadStack[];
}

export type IRuleItemPanelMode = 'edit' | 'view' | 'new';
