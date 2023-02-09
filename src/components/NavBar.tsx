import { useState } from "react";
import styled from "styled-components";
import { useCompareStore } from "../store/configureStore";
import Calculator from "./Calculator";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const addComparator = useCompareStore(state => state.addComparator);
  const comparatorList = useCompareStore(state => state.comparatorList);
  const increaseDataList = () => {
    if (comparatorList.length === 5) return;
    addComparator();
  }
  const toggleCalculator = () => {
    // setIsOpen(prev => !prev);
  }
  return (
    <Wrap>
      <UpperDiv>
        <Name>
          Num Comparator
        </Name>
      </UpperDiv>
      <UpperDiv>
        <ClickToIncrease onClick={increaseDataList}>
          Click Me to Increase.
        </ClickToIncrease>
      </UpperDiv>
      <UpperDiv>
        <NavigationBar>
          <ClickToOpenCal onClick={toggleCalculator}>
            Will Upgrade Soon!
          </ClickToOpenCal>
          {isOpen &&
            <WrapCalculator>
              {/* this will upgrade next version */}
              <Calculator />
            </WrapCalculator>
          }     
        </NavigationBar>
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
  
  @media screen and (max-width: 1024px) {
    font-size: 1em;
  }
  transition: 0.2s;
`;
const Name = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20%;
  color: white;
`;
const ClickToIncrease = styled.div`
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

  :hover {
    scale: 1.1;
  }
  transition: 0.2s;
`;
const NavigationBar = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 10%;
  color: white;
  position: relative;
`;
const ClickToOpenCal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const WrapCalculator = styled.div`
  width: 100%;
  height: 370%;
  top: 100%;
  position: absolute;
`;