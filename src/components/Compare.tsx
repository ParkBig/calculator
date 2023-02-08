import styled from "styled-components";
import { useCompareStore } from "../store/configureStore";
import CompareData from "./CompareData";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Compare = () => {
  const trackRef = useRef<HTMLInputElement>(null);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const comparatorList = useCompareStore(state => state.comparatorList);
  
  const reSize = () => {
    setWindowSize(trackRef.current?.clientWidth as number);
  };

  useEffect(() => {
    window.addEventListener("resize", reSize);
    return () => {
      window.removeEventListener("resize", reSize);
    }
  });
  return (
    <Wrap comparatorList={comparatorList.length} ref={trackRef} nowWidth={windowSize}>
      <AnimatePresence>
        {comparatorList.map((data) => <CompareData key={data.id} prop={data}/>)}
      </AnimatePresence>
    </Wrap>
  )
}

export default Compare;

const Wrap = styled.div<{comparatorList: number, nowWidth: number}>`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: ${prop => (prop.comparatorList)*382 > prop.nowWidth ? "left" : "center" };
  align-items: center;
  background-color: #b2bec3;
  gap: 1%;
  overflow-x: auto;
`;
