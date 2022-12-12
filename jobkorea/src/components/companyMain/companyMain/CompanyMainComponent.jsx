import MainComponent from "./Main";
import EndLineContainer from "./EndLine/Container";

export default function CompanyMainComponent({
  loginIsClick,
  setLoginIsClick,
}) {
  return (
    <>
      <MainComponent
        loginIsClick={loginIsClick}
        setLoginIsClick={setLoginIsClick}></MainComponent>
      <EndLineContainer></EndLineContainer>
    </>
  );
}
