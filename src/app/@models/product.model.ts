export interface IValue {
  Method: string;
  Value: number;
}

export interface IRuleItem {
  Name: string;
  Method: string;
  Value: IValue;
}

export interface IBaseObject {
  RuleItemList: IRuleItem[];
}

export interface ISilkscreenData {
  BaseObject: IBaseObject;
}

export interface IRuleItemContainer {
  env: object;  // 如果有具體型別，可以替換 `any`
  silkscreenData: ISilkscreenData;
}


export interface IProduct {
  id: number;
  name: string;
}
