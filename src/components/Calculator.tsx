import styled from "styled-components";

const Calculator = () => {
  return (
    <UpperDiv>
      <ResultDiv>
        결과
      </ResultDiv>
      <BtnDiv>
        <NumDiv>
          <Num>
            7
          </Num>
          <Num>
            8
          </Num>
          <Num>
            9
          </Num>
          <Num>
            4
          </Num>
          <Num>
            5
          </Num>
          <Num>
            6
          </Num>
          <Num>
            1
          </Num>
          <Num>
            2
          </Num>
          <Num>
            3
          </Num>
          <Num>
            0
          </Num>
          <Num>
            .
          </Num>
          <Num>
            =
          </Num>
        </NumDiv>
        <DoItDiv>
          <Operator>
            /
          </Operator>
          <Operator>
            *
          </Operator>
          <Operator>
            -
          </Operator>
          <Operator>
            +
          </Operator>
        </DoItDiv>
      </BtnDiv>
    </UpperDiv>
  )
}

export default Calculator;

const UpperDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const ResultDiv = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnDiv = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NumDiv = styled.div`
  width: 77%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;
const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoItDiv = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Operator = styled.div`
  height: 22%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;