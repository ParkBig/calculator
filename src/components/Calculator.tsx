import styled from "styled-components";

// this will update next version
const Calculator = () => {
  return (
    <Wrap>
      <ResultText>
        결과
      </ResultText>
      <UpperButtons>
        <Buttons>
          <Btn>
            7
          </Btn>
          <Btn>
            8
          </Btn>
          <Btn>
            9
          </Btn>
          <Btn>
            4
          </Btn>
          <Btn>
            5
          </Btn>
          <Btn>
            6
          </Btn>
          <Btn>
            1
          </Btn>
          <Btn>
            2
          </Btn>
          <Btn>
            3
          </Btn>
          <Btn>
            0
          </Btn>
          <Btn>
            .
          </Btn>
          <Btn>
            =
          </Btn>
        </Buttons>
        <UpperOperatorButtons>
          <OperatorBtn>
            /
          </OperatorBtn>
          <OperatorBtn>
            *
          </OperatorBtn>
          <OperatorBtn>
            -
          </OperatorBtn>
          <OperatorBtn>
            +
          </OperatorBtn>
        </UpperOperatorButtons>
      </UpperButtons>
    </Wrap>
  )
}

export default Calculator;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const ResultText = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperButtons = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Buttons = styled.div`
  width: 77%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpperOperatorButtons = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const OperatorBtn = styled.div`
  height: 22%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;