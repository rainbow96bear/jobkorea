import { useState } from "react";
import styled from "styled-components";
import LoginMordalContainer from "./LoginMordal/Container";
import MainLoginBoardContainer from "./MainLogin/Container";
import SolutionComponent from "./MainSolution/Component";
import ServiceQComponent from "./ServiceQ";
import ServiceModalContainer from "./ServiceQ/ServiceMordal/Container";

const MainComponent = ({ loginIsClick, setLoginIsClick }) => {
  const [serviceMordalIsClick, setServiceMordalIsClick] = useState(false);
  const [mordalIndex, setMordalIndex] = useState(0);

  return (
    <MainBox>
      <MainLoginBoardContainer
        loginIsClick={loginIsClick}
        setLoginIsClick={setLoginIsClick}></MainLoginBoardContainer>
      {loginIsClick ? (
        <LoginMordalContainer setLoginIsClick={setLoginIsClick} />
      ) : (
        <></>
      )}
      <SolutionComponent></SolutionComponent>
      {serviceMordalIsClick ? (
        <ServiceModalContainer
          setMordalC={setMordalC}
          mdIndex={mdIndex}></ServiceModalContainer>
      ) : (
        <></>
      )}
      <ServiceQComponent
        serviceMordalIsClick={serviceMordalIsClick}
        setServiceMordalIsClick={setServiceMordalIsClick}
        setMordalIndex={setMordalIndex}></ServiceQComponent>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #f2f4f7;
`;

export default MainComponent;
