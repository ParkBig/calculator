import styled from "styled-components";
import { compareStore } from "../store/configureStore";


const NavBar = () => {
  const inc = compareStore(state => state.inc);
  const count = compareStore(state => state.count);
  const increase = () => {
    if (count === 5) return;
    inc();
  }
  return (
    <Wrap>
      <UpperDiv>
        <NameDiv>
          Calculate your number!
        </NameDiv>
      </UpperDiv>
      <UpperDiv>
        <ClickDiv onClick={increase}>
          Click Me to Increase.
        </ClickDiv>
      </UpperDiv>
      <UpperDiv>
        <NavBarDiv>
          업그레이드를 기대해주세요!
        </NavBarDiv>
      </UpperDiv>
    </Wrap>
  )
}

export default NavBar;

const Wrap = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: gray;
`;
const UpperDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;
const NameDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20%;
  color: white;
`;
const ClickDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
const NavBarDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 10%;
  color: white;
`;