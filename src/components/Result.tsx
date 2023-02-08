import styled from "styled-components";
import { useCompareStore } from "../store/configureStore";
import useAllCalculate from "../hooks/useAllCalculate";
import ai from "../assets/image/png/ai.png";
import ai2 from "../assets/image/png/ai2.png";
import darkAi from "../assets/image/png/darkAi.jpg";
import darkAi2 from "../assets/image/png/darkAi2.png";
import AllBarGraph from "./AllBarGraph";
import FindBestNum from "./FindBestNum";

const Result = () => {
  const comparatorList = useCompareStore(state => state.comparatorList);
  const allCalData = useAllCalculate(comparatorList);
  return (
    <UpperAdd>
      <ImgDiv where="flex-start">
        <Img src={allCalData.allMax[0] ? darkAi : ai} />
      </ImgDiv>
      {(allCalData.allMax[0]) ?
        <WrapResults>
          <FindBestNum allCalData={allCalData}/>
          <AllBarGraph allCalData={allCalData} />
        </WrapResults>
        :
        <WrapResults>
          최상단 버튼을 클릭하여 비교할 데이터 생성 할 수 있습니다.<br/>
          ( 최대 5개 )<br/><br/>
          그래프안의 데이터를 클릭하여 제거 할 수 있습니다.<br/><br/>
          PWA 사용이 가능합니다. (검색창 우측 상단 다운로드.)
        </WrapResults>
      }
      <ImgDiv where="flex-end">
        <Img src={allCalData.allMax[0] ? darkAi2 : ai2} />
      </ImgDiv>
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
  width: 15%;
  display: flex;
  justify-content: ${prop => prop.where};
  align-items: center;
`;
const Img = styled.img`
 height: 100%;
 max-width: 100%;
`;
const WrapResults = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: bolder;
  white-space: pre-wrap;
  text-align: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;
