export interface IAllData {
  id: number;
  sum: number;
  avg: number;
  max: number;
  min: number;
  maxMinusMin: number;
  maxMinusAvg: number;
  avgMinusMin: number;
  dataCount: number;
}

export interface IData {
  x: number;
  y: number;
}

export interface IForm {
  [key:string]: number | "";
}

export interface ICalData {
  id: number
  sum: number;
  avg: number;
  max: number;
  min: number;
  maxMinusMin: number;
  maxMinusAvg: number;
  avgMinusMin: number;
  dataCount: number;
}

export interface IAllCalData {
  allSum: number;
  allAvg: number;
  allMax: number;
  allMin: number;
  allMaxMinusMin: number;
  allMaxMinusAvg: number;
  allAvgMinusMin: number;
}

export interface ICount {
  count: number;
  data: IAllData[];
  inc: () => void;
  del: (index: number) => void;
  updateData: (data: IAllData) => void;
  resetData: (data: IAllData) => void;
}

export interface IChoice {
  isChoice: boolean;
  toggleChoice: () => void;
}
