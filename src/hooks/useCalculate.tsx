import { useEffect } from "react";
import { useCompareStore } from "../store/configureStore";
import { IAllData, IData } from "../types/interface";

const useCalculate = (data: IData[], id: number) => {
  const updateComparator = useCompareStore(state => state.updateComparator);
  
  const dataCount: number = data.length;
  
  const calData: IAllData = {
    id,
    sum: 0,
    avg: 0,
    max: 0,
    min: 0,
    maxMinusMin: 0,
    maxMinusAvg: 0,
    avgMinusMin: 0,
    dataCount,
  };

  if (dataCount) {
    data.forEach(data => calData.sum += +data.data.toFixed(2));
    calData.avg = +(calData.sum / dataCount).toFixed(2);
    calData.max = +Math.max.apply(Math, data.map(data => data.data)).toFixed(2);
    calData.min = +Math.min.apply(Math, data.map(data => data.data)).toFixed(2);
    calData.maxMinusMin = calData.max - calData.min;
    calData.maxMinusAvg = calData.max - calData.avg;
    calData.avgMinusMin = calData.avg - calData.min;
  }

  useEffect(() => {
    updateComparator(calData);
  }, [data]);
  return calData;
}

export default useCalculate;
