import styled from "styled-components";
import { IAllCalData } from "../types/interface";

const FindBestNum = ({ allCalData }: {allCalData: IAllCalData}) => {
  return (
    <Wrap>
      <FindBestText>
        Find Highlight Group
      </FindBestText>
      <FindBestResult>
        <DataName>
          SUM
        </DataName>
        <DataName>
          AVG
        </DataName>
        <DataName>
          MAX
        </DataName>
        <DataName>
          MIN
        </DataName>
        <Data>
          {`${allCalData.allSum[1]}`}
        </Data>
        <Data>
          {`${allCalData.allAvg[1]}`}
        </Data>
        <Data>
          {`${allCalData.allMax[0]}`}
        </Data>
        <Data>
          {`${allCalData.allMin[0]}`}
        </Data>
        <GroupName>
          {`Group ${allCalData.allSum[2]+1}`}
        </GroupName>
        <GroupName>
          {`Group ${allCalData.allAvg[2]+1}`}
        </GroupName>
        <GroupName>
          {`Group ${allCalData.allMax[1]+1}`}
        </GroupName>
        <GroupName>
          {`Group ${allCalData.allMin[1]+1}`}
        </GroupName>
      </FindBestResult>
    </Wrap>
  )
}

export default FindBestNum;

const Wrap = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;
const FindBestText = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 1.2em;
  }
`;
const FindBestResult = styled.div`
  height: 70%;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);

  div {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: 1px solid black;
    }

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      border-top: 1px solid black;
    }
  
    &:nth-child(1),
    &:nth-child(5),
    &:nth-child(9) {
      border-right: 1px solid black;
    }
  
    &:nth-child(2),
    &:nth-child(6),
    &:nth-child(10) {
      border-right: 1px solid black;
    }
  
    &:nth-child(4),
    &:nth-child(8),
    &:nth-child(12) {
      border-left: 1px solid black;
    }
  }

`;
const DataName = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Data = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    font-size: 0.7em;
    font-weight: 700;
  }
`;
const GroupName = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;

  @media screen and (max-width: 1024px) {
    font-size: 0.7em;
    font-weight: 700;
  }
`;
