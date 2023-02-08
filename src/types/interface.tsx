export interface IData {
  order: number;
  data: number;
}

export interface IForm {
  [key:string]: number | "";
}

export interface IAllData {
  id: number;
  sum: number;
  avg: number;
  max: number | null;
  min: number | null;
  maxMinusMin: number | null;
  maxMinusAvg: number | null;
  avgMinusMin: number | null;
  dataCount: number;
}

export interface IAllCalData {
  allSum: number[];
  allAvg: number[];
  allMax: number[];
  allMin: number[];
  allMaxMinusMin: number;
  allMaxMinusAvg: number;
  allAvgMinusMin: number;
  allDataCount: number;
}

export interface ICount {
  comparatorList: IAllData[];
  addComparator: () => void;
  deleteComparator: (index: number) => void;
  updateComparator: (data: IAllData) => void;
}
