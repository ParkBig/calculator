import { useRef, useState } from "react";
import styled from "styled-components";
import { compareStore, toggleChoiceStore } from "../store/configureStore";
import useAllCalculate from "./functions/useAllCalculate";
import ai from "./img/png/ai.png"
import ai2 from "./img/png/ai2.png"
import darkAi from "./img/png/darkAi.jpg"
import darkAi2 from "./img/png/darkAi2.png"

const Result = () => {
  const isChoice = toggleChoiceStore(state => state.isChoice);
  const toggleChoice = toggleChoiceStore(state => state.toggleChoice);
  const data = compareStore(state => state.data);
  
  const choice = () => {
    // toggleChoice();
  }
  const allCalData = useAllCalculate(data);
  return (
    <UpperAddDiv>
      {isChoice ?
        <UpperResultDiv onClick={choice}>
          비교를 원하는 데이터 클릭!
        </UpperResultDiv>
        :
        (allCalData.allMax !== -Infinity) ?
          <>
            <ImgDiv where="flex-start">
              <Img src={darkAi} />
            </ImgDiv>
            <UpperResultDiv onClick={choice}>
              <ResultDiv>
                <SubDataDiv>
                  <SubData>
                    전체최대값-전체최소값
                  </SubData>
                  <SubData>
                    {allCalData.allMaxMinusMin}
                  </SubData>
                </SubDataDiv>
                <SubDataDiv>
                  <SubData>
                    전체최대값-전체평균값
                  </SubData>
                  <SubData>
                    {allCalData.allMaxMinusAvg}
                  </SubData>
                </SubDataDiv>
                <SubDataDiv>
                  <SubData>
                    전체평균값-전체최소값
                  </SubData>
                  <SubData>
                    {allCalData.allAvgMinusMin}
                  </SubData>
                </SubDataDiv>
              </ResultDiv>
              <ResultDiv>
                <MainData>
                  최대값: {allCalData.allMax}
                </MainData>
                <MainData>
                  최소값: {allCalData.allMin}
                </MainData>
              </ResultDiv>
              <ResultDiv>
                <MainData>
                  전체합: {allCalData.allSum}
                </MainData>
                <MainData>
                  전체평균: {allCalData.allAvg}
                </MainData>
              </ResultDiv>
            </UpperResultDiv>
            <ImgDiv where="flex-end">
              <Img src={darkAi2} />
            </ImgDiv>
          </>
          :
          <>
            <ImgDiv where="flex-start">
              <Img src={ai} />
            </ImgDiv>
            <UpperResultDiv>
              최상단 버튼을 클릭하여 비교할 데이터 생성 할 수 있습니다.<br/>
              ( 최대 5개 )<br/><br/>
              그래프안의 데이터를 클릭하여 제거 할 수 있습니다.
            </UpperResultDiv>
            <ImgDiv where="flex-end">
              <Img src={ai2} />
            </ImgDiv>
          </>
      }
    </UpperAddDiv>
  )
}

export default Result;

const UpperAddDiv = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;
const ImgDiv = styled.div<{where: string}>`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: ${prop => prop.where};
  align-items: center;
`;
const Img = styled.img`
 height: 100%;
 max-width: 100%;
`;
const UpperResultDiv = styled.div`
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bolder;
  white-space: pre-wrap;
  text-align: center;
`;
const ResultDiv = styled.div`
  height: 33.33%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainData = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubDataDiv = styled.div`
  height: 100%;
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubData = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
