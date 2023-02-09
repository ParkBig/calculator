import { IAllCalData, IAllData } from "../types/interface";

const useAllCalculate = (comparatorList: IAllData[]) => {
  const allCalData: IAllCalData = {
    allSum: [0, 0],
    allAvg: [0, 0],
    allMax: [0, 0],
    allMin: [0, 0],
    allMaxMinusMin: 0,
    allMaxMinusAvg: 0,
    allAvgMinusMin: 0,
    allDataCount: 0
  };

  const sumList = comparatorList.map(data => data.sum ? data.sum : 0);
  const avgList = comparatorList.map(data => data.avg ? data.avg : 0);
  const maxList = comparatorList.map(data => data.max ? data.max : 0);
  const minList = comparatorList.map(data => data.min ? data.min : 0);


  comparatorList.forEach((data) => {
    allCalData.allSum[0] += +data.sum.toFixed(2);
    allCalData.allDataCount += data.dataCount;
  });

  if (allCalData.allDataCount) {
    allCalData.allSum[1] = +Math.max.apply(Math, sumList).toFixed(2)
    allCalData.allSum[2] = sumList.findIndex(element => element === allCalData.allSum[1]);

    allCalData.allAvg[0] = +(allCalData.allSum[0] / allCalData.allDataCount).toFixed(2);
    allCalData.allAvg[1] = +Math.max.apply(Math, avgList).toFixed(2)
    allCalData.allAvg[2] = avgList.findIndex(element => element === allCalData.allAvg[1]);

    allCalData.allMax[0] = +Math.max.apply(Math, maxList).toFixed(2);
    allCalData.allMax[1] = maxList.findIndex(element => element === allCalData.allMax[0]);

    allCalData.allMin[0] = +Math.min.apply(Math, minList.filter(element => element !== 0)).toFixed(2);
    allCalData.allMin[1] = minList.findIndex(element => element === allCalData.allMin[0]);

    allCalData.allMaxMinusMin = allCalData.allMax[0] - allCalData.allMin[0];
    allCalData.allMaxMinusAvg = allCalData.allMax[0] - allCalData.allAvg[0];
    allCalData.allAvgMinusMin = allCalData.allAvg[0] - allCalData.allMin[0];
  };

  return allCalData;
}

export default useAllCalculate;
