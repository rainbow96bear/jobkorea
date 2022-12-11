import { useState } from "react";
import HeaderContainer from "./Header/Container";
import MainComponent from "./Main";
import EndLineContainer from "./EndLine/Container";
import FooterContainer from "./Footer/Container";

export default function CompanyMainComponent() {
  const [loginIsClick, setLoginIsClick] = useState(false);

  return (
    <>
      <HeaderContainer
        loginIsClick={loginIsClick}
        setLoginIsClick={setLoginIsClick}></HeaderContainer>
      <MainComponent
        loginIsClick={loginIsClick}
        setLoginIsClick={setLoginIsClick}></MainComponent>
      <EndLineContainer></EndLineContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
