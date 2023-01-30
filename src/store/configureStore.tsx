import { create } from "zustand";
import { IChoice, ICount } from "../__interface__/interface";

export const defaultData = {
  sum: 0,
  avg: 0,
  max: -Infinity,
  min: Infinity,
  maxMinusMin: -Infinity,
  maxMinusAvg: -Infinity,
  avgMinusMin: -Infinity,
  dataCount: 0,
}

export const compareStore = create<ICount>(set => ({
  count: 1,
  data: [{id: Date.now(), ...defaultData}],
  inc: () => set(state => ({
    data: [...state.data, {id: Date.now(), ...defaultData}],
    count: state.data.length +1
  })),
  del: (id) => set(state => ({
    data: state.data.filter(prop => prop.id !== id),
    count: state.count - 1 
  })),
  updateData: (data) => set(state => ({
    data: state.data.map(prop => (prop.id === data.id) ? data : prop )
  })),
  resetData: (data) => set(state => ({
    data: state.data.map(prop => (prop.id === data.id) ? {id: data.id, ...defaultData} : prop)
  })),
}));

export const toggleChoiceStore = create<IChoice>(set => ({
  isChoice: false,
  toggleChoice: () => set(state => ({ isChoice: !state.isChoice })),
}));
