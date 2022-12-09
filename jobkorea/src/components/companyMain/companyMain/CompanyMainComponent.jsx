import { useState } from "react";
import EndLineComponent from "./EndLine/Component";
import FooterComponent from "./Footer/Component";
import HeaderContainer from "./Header/Container";
import MainComponent from "./Main";

export default function CompanyMainComponent() {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <HeaderContainer
        isClick={isClick}
        setIsClick={setIsClick}
      ></HeaderContainer>
      <MainComponent isClick={isClick} setIsClick={setIsClick}></MainComponent>
      <EndLineComponent></EndLineComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}
