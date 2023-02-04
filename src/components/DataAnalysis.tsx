import styled from "styled-components";
import { IAllData } from "../types/interface";

const DataAnalysis = ({calData}: {calData: IAllData}) => {
  return (
    <Wrap>
      <UpperMainData>
        <MainData>
          합: {calData.sum}
        </MainData>
        <MainData>
          평균값: {calData.avg}
        </MainData>
        <MainData>
          최대값: {calData.max}
        </MainData>
        <MainData>
          최소값: {calData.min}
        </MainData>
      </UpperMainData>
      <UpperSubData>
        <SubData>
          최대값 - 최소값: {calData.maxMinusMin}
        </SubData>
        <SubData>
          최대값 - 평균값: {calData.maxMinusAvg}
        </SubData>
        <SubData>
          평균값 - 최소값: {calData.avgMinusMin}
        </SubData>
      </UpperSubData>
    </Wrap>
  )
}

export default DataAnalysis;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UpperMainData = styled.div`
  width: 90%;
  height: 40%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
`;
const MainData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperSubData = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubData = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
