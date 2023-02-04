import styled from "styled-components";
import { compareStore } from "../store/configureStore";
import Victory from "./Victory";

const Compare = () => {
  const dataList = compareStore(state => state.data)
  return (
    <UpperCompare>
      {dataList.map((data) => <Victory key={data.id} prop={data}/>)}
    </UpperCompare>
  )
}

export default Compare;

const UpperCompare = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2bec3;
  gap: 1%;
`;
