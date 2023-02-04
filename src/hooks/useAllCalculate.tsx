import { IAllCalData, IAllData } from "../types/interface";


const useAllCalculate = (allData: IAllData[]) => {
  let allSum: number = 0;
  let allAvg: number;
  let allMax: number;
  let allMin: number;
  let allDataCount: number = 0;
  let allMaxMinusMin: number;
  let allMaxMinusAvg: number;
  let allAvgMinusMin: number;

  allData.map((data) => {
    allSum += data.sum as number;
    allDataCount += data.dataCount as number;
    return null;
  });

  allAvg = (allSum === 0) ? 0 : allSum / allDataCount;
  allMax = Math.max.apply(Math, allData.map(data => data.max ? data.max : -1/0));
  allMin = Math.min.apply(Math, allData.map(data => data.min ? data.min : 1/0));
  allMaxMinusMin = allMax - allMin;
  allMaxMinusAvg = allMax - allAvg;
  allAvgMinusMin = allAvg - allMin;

  const allCalData: IAllCalData = {
    allSum,
    allAvg,
    allMax,
    allMin,
    allMaxMinusMin,
    allMaxMinusAvg,
    allAvgMinusMin,
  };

  return allCalData;
}

export default useAllCalculate;
