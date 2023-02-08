import styled from "styled-components";
import { useCompareStore } from "../store/configureStore";
import CompareData from "./CompareData";
import { AnimatePresence } from "framer-motion";

const Compare = () => {
  const comparatorList = useCompareStore(state => state.comparatorList)
  return (
    <Wrap comparatorList={comparatorList.length}>
      <AnimatePresence>
        {comparatorList.map((data) => <CompareData key={data.id} prop={data}/>)}
      </AnimatePresence>
    </Wrap>
  )
}

export default Compare;

const Wrap = styled.div<{comparatorList: number} >`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2bec3;
  gap: 1%;
  overflow-x: auto;

  /* @media screen and (max-width: 1000px) {
    gap: 1.5%;
  } */
`;
