import styled from "styled-components";
import { compareStore } from "../store/configureStore";
import Victory from "./Victory";


const Compare = () => {
  const data = compareStore(state => state.data)
  return (
    <UpperCompareDiv>
      {data.map((prop) => <Victory key={prop.id} prop={prop}/>)}
    </UpperCompareDiv>
  )
}

export default Compare;

const UpperCompareDiv = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2bec3;
  gap: 1%;
`;
