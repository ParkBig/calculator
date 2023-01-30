import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Result from "../components/Result";
import Compare from "../components/Compare";
import NavBar from "../components/NavBar";

const MainPage = () => {
  return (
    <Wrap>
      <Helmet>
        <title>
          calculator!
        </title>
      </Helmet>
      <NavBar />
      <CompareDiv>
        <Result />
        <Compare />
      </CompareDiv>
    </Wrap>
  )
}

export default MainPage;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const CompareDiv = styled.div`
  height: 94%;
  width: 100%;
`;