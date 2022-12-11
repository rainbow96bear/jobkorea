import { useState } from "react";
import styled from "styled-components";
import MordalContainer from "./LoginMordal/Container";
import MainLoginBoardComponent from "./MainLogin/Component";
import SolutionComponent from "./MainSolution/Component";
import ServiceQComponent from "./ServiceQ";
import ServiceModalContainer from "./ServiceQ/ServiceMordal/Container";

const MainComponent = ({ isClick, setIsClick }) => {
  const [mordalC, setMordalC] = useState(false);
  const [mdIndex, setMdIndex] = useState(0);

  return (
    <MainBox>
      <MainLoginBoardComponent
        setIsClick={setIsClick}
        isClick={isClick}
      ></MainLoginBoardComponent>
      {isClick ? <MordalContainer setIsClick={setIsClick} /> : <></>}
      <SolutionComponent></SolutionComponent>
      {mordalC ? (
        <ServiceModalContainer
          setMordalC={setMordalC}
          setMdIndex={setMdIndex}
          mdIndex={mdIndex}
        ></ServiceModalContainer>
      ) : (
        <></>
      )}
      <ServiceQComponent
        mordalC={mordalC}
        setMordalC={setMordalC}
        mdIndex={mdIndex}
        setMdIndex={setMdIndex}
      ></ServiceQComponent>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #f2f4f7;
`;

export default MainComponent;
