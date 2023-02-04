import styled from "styled-components";
import useAllCalculate from "../hooks/useAllCalculate";
import { compareStore } from "../store/configureStore";
import ai from "../assets/image/png/ai.png"
import ai2 from "../assets/image/png/ai2.png"
import darkAi from "../assets/image/png/darkAi.jpg"
import darkAi2 from "../assets/image/png/darkAi2.png"

const Result = () => {
  const data = compareStore(state => state.data);

  const allCalData = useAllCalculate(data);
  return (
    <UpperAdd>
      {(allCalData.allMax !== -Infinity) ?
        <>
          <ImgDiv where="flex-start">
            <Img src={darkAi} />
          </ImgDiv>
          <WrapResults>
            <UpperResult>
              <UpperSubData>
                <SubData>
                  전체최대값-전체최소값
                </SubData>
                <SubData>
                  {allCalData.allMaxMinusMin}
                </SubData>
              </UpperSubData>
              <UpperSubData>
                <SubData>
                  전체최대값-전체평균값
                </SubData>
                <SubData>
                  {allCalData.allMaxMinusAvg}
                </SubData>
              </UpperSubData>
              <UpperSubData>
                <SubData>
                  전체평균값-전체최소값
                </SubData>
                <SubData>
                  {allCalData.allAvgMinusMin}
                </SubData>
              </UpperSubData>
            </UpperResult>
            <UpperResult>
              <MainData>
                최대값: {allCalData.allMax}
              </MainData>
              <MainData>
                최소값: {allCalData.allMin}
              </MainData>
            </UpperResult>
            <UpperResult>
              <MainData>
                전체합: {allCalData.allSum}
              </MainData>
              <MainData>
                전체평균: {allCalData.allAvg}
              </MainData>
            </UpperResult>
          </WrapResults>
          <ImgDiv where="flex-end">
            <Img src={darkAi2} />
          </ImgDiv>
        </>
        :
        <>
          <ImgDiv where="flex-start">
            <Img src={ai} />
          </ImgDiv>
          <WrapResults>
            최상단 버튼을 클릭하여 비교할 데이터 생성 할 수 있습니다.<br/>
            ( 최대 5개 )<br/><br/>
            그래프안의 데이터를 클릭하여 제거 할 수 있습니다.<br/><br/>
            PWA 사용이 가능합니다. (검색창 우측 상단 다운로드.)
          </WrapResults>
          <ImgDiv where="flex-end">
            <Img src={ai2} />
          </ImgDiv>
        </>
      }
    </UpperAdd>
  )
}

export default Result;

const UpperAdd = styled.div`
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
const WrapResults = styled.div`
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
const UpperResult = styled.div`
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
const UpperSubData = styled.div`
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
