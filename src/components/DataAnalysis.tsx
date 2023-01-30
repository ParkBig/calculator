import styled from "styled-components";
import { IAllData } from "../__interface__/interface";

const DataAnalysis = ({calData}: {calData: IAllData}) => {
  return (
    <UpperDiv>
      <UpperMainDataDiv>
        <MainDataDiv>
          합: {calData.sum}
        </MainDataDiv>
        <MainDataDiv>
          평균값: {calData.avg}
        </MainDataDiv>
        <MainDataDiv>
          최대값: {calData.max}
        </MainDataDiv>
        <MainDataDiv>
          최소값: {calData.min}
        </MainDataDiv>
      </UpperMainDataDiv>
      <UpperSubDataDiv>
        <SubDataDiv>
          최대값 - 최소값: {calData.maxMinusMin}
        </SubDataDiv>
        <SubDataDiv>
          최대값 - 평균값: {calData.maxMinusAvg}
        </SubDataDiv>
        <SubDataDiv>
          평균값 - 최소값: {calData.avgMinusMin}
        </SubDataDiv>
      </UpperSubDataDiv>
    </UpperDiv>
  )
}

export default DataAnalysis;

const UpperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UpperMainDataDiv = styled.div`
  width: 90%;
  height: 40%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
`;
const MainDataDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperSubDataDiv = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubDataDiv = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
