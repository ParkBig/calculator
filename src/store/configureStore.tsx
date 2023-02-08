import { create } from "zustand";
import { ICount } from "../types/interface";

export const defaultData = {
  sum: 0,
  avg: 0,
  max: null,
  min: null,
  maxMinusMin: null,
  maxMinusAvg: null,
  avgMinusMin: null,
  dataCount: 0,
}

export const useCompareStore = create<ICount>(set => ({
  comparatorList: [{id: Date.now(), ...defaultData}],
  addComparator: () => set(state => ({
    comparatorList: [...state.comparatorList, {id: Date.now(), ...defaultData}]
  })),
  deleteComparator: (id) => set(state => ({
    comparatorList: state.comparatorList.filter(prop => prop.id !== id)
  })),
  updateComparator: (data) => set(state => ({
    comparatorList: state.comparatorList.map(prop => (prop.id === data.id) ? data : prop )
  })),
}));
