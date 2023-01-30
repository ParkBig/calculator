import { useEffect } from "react";
import { compareStore } from "../../store/configureStore";
import { ICalData, IData } from "../../__interface__/interface";

const useCalculate = (data: IData[], id: number) => {
  const updateData = compareStore(state => state.updateData);

  let sum: number = 0;
  let avg: number;
  let max: number;
  let min: number;
  let maxMinusMin: number;
  let maxMinusAvg: number;
  let avgMinusMin: number;
  const dataCount: number = data.length;

  if (data.length !==0 ) {
    data.map(data => sum += data.y);
  }
  avg = (data.length === 0) ? sum : sum / data.length;
  max = (data.length === 0) ? sum : Math.max.apply(Math, data.map(data => data.y));
  min = (data.length === 0) ? sum : Math.min.apply(Math, data.map(data => data.y));
  maxMinusMin = (data.length === 0) ? 0 : max - min;
  maxMinusAvg = (data.length === 0) ? 0 : max - avg;
  avgMinusMin = (data.length === 0) ? 0 : avg - min;
  
  const calData: ICalData = {
    id,
    sum,
    avg,
    max,
    min,
    maxMinusMin,
    maxMinusAvg,
    avgMinusMin,
    dataCount,
  };

  useEffect(() => {
    updateData(calData);
  }, [data])
  return calData
}

export default useCalculate;
